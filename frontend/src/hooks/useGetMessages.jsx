import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setMessages } from '../Redux/messageSlice';

const useGetMessages = () => {
    const {selectedUser}= useSelector(store=>store.user);
    const {messages}= useSelector(store=>store.message);
    const dispatch= useDispatch();
    
useEffect(()=>{
    const fetchMessages = async()=>{
        
        if (!selectedUser?._id) {
        
            return;}

        try {
            
            axios.defaults.withCredentials= true;
            const res= await axios.get(`http://localhost:8080/api/v1/message/${selectedUser?._id}`);
            console.log(res)
            dispatch(setMessages(res.data))
        } catch (error) {
            console.log(error)
        }
    }
    fetchMessages();
},[selectedUser])
}


export default useGetMessages
