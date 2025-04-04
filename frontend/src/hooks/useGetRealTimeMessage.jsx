import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addMessage } from "../Redux/messageSlice"


const useGetRealTimeMessage = () => {
const {socket}= useSelector(store=>store.socket)
const {messages}= useSelector(store=>store.message)
const dispatch=useDispatch()
useEffect(()=>{
    socket?.on("newMessage",(newMessage)=>{
        dispatch(addMessage(newMessage))
    })
},[messages,socket,dispatch])
}

export default useGetRealTimeMessage
