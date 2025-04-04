import axios from 'axios';
import React, { useState } from 'react'
import { IoIosSend } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { setMessages } from '../Redux/messageSlice';


const SendInput = () => {

    const [message, setMessage] = useState('');
    const dispatch = useDispatch();
    const { selectedUser } = useSelector(store => store.user);
    const { messages } = useSelector(store => store.message);

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        if (!message.trim() || !selectedUser?._id) return;
        try {
            axios.defaults.withCredentials = true;
            const res = await axios.post(`http://localhost:8080/api/v1/message/send/${selectedUser?._id}`, { message },
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            )
            console.log(res)

            dispatch(setMessages([...messages, res?.data?.newMessage]))
            



        } catch (error) {
            console.log(error);
        }
        setMessage("");
    }

    return (
        <form className='px-4 my-3' onSubmit={onSubmitHandler}>
            <div className='w-full flex items-center border border-zinc-500 rounded-lg bg-zinc-800'>
                <input
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    type='text'
                    placeholder='Send a message...'
                    className="flex-grow text-sm rounded-lg p-3 bg-zinc-800 text-white focus:outline-none" />

                <button type="submit" className='p-3 text-white hover:text-blue-400'>
                    <IoIosSend size={24} />
                </button>
            </div>
        </form>
    )
}

export default SendInput
