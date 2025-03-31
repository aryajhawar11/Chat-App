import { Conversation } from "../models/conversationModel.js";
import { Message } from "../models/messageModel.js";

export const sendMessage = async(req, res) => {
    try {
        const senderId = req.id;
        const receiverId = req.params.id;
        
        console.log("Request body:", req.body);
        
        // Check if message exists in request body
        if (!req.body.message) {
            return res.status(400).json({
                message: "Message content is required"
            });
        }
        
        const { message } = req.body;
        
        let gotConversation = await Conversation.findOne({
            participants: {$all: [senderId, receiverId]}
        });

        if(!gotConversation) {
            gotConversation = await Conversation.create({
                participants: [senderId, receiverId]
            });
        }

        const NewMessage = await Message.create({
            senderId,
            receiverId,
            message // Make sure this field name matches your schema
        });
        
        if(NewMessage) {
            gotConversation.messages.push(NewMessage._id);
        }
        
        await gotConversation.save();

        return res.status(201).json({
            message: "Message sent successfully"
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Failed to send message",
            error: error.message
        });
    }
}

export const getMessage=  async(req,res)=>{
    try {
        const receiverId= req.params.id;
        const senderId= req.id;
        const conversation= await Conversation.findOne({
            participants: {$all:[senderId,receiverId]}
        }).populate('messages')
       return res.status(200).json(conversation?.messages);
    } catch (error) {
        return res.status(500).json({
            message: "Failed to show message",
            error: error.message
        
    })
    }}