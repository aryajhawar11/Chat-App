import React from 'react'
import Message from './Message'
import useGetMessages from '../hooks/useGetMessages'
import { useSelector } from 'react-redux';
import useGetRealTimeMessage from '../hooks/useGetRealTimeMessage';

const Messages = () => {
    const { messages } = useSelector(store => store.message);
    useGetMessages();
    useGetRealTimeMessage();
    
    // Early return if messages is falsy, but with empty div instead of nothing
    if (!messages || messages.length === 0) {
        return <div className='px-4 flex-1 overflow-auto'></div>;
    }
    
    return (
        <div  className='px-4 flex-1 overflow-auto'>
            {
                messages && messages?.map((message) => {
                    // Skip undefined messages
                    if (!message) return null;
                    
                    return (
                        <Message key={message?._id} message={message} />
                    )
                })
            }
            {/* This div serves as our scroll target at the end of the messages */}
            <div />
        </div>
    )
}

export default Messages