import React, { useEffect } from 'react'
import SendInput from './SendInput'
import Messages from './Messages'
import { useDispatch, useSelector } from 'react-redux'
import { setSelectedUser } from '../Redux/userSlice'

const MessageContainer = () => {
    const {selectedUser}=useSelector(store=>store.user)
    const authUser = useSelector((store) => store.user?.authUser);

    const dispatch=useDispatch();
    useEffect(()=>{
        return()=> dispatch(setSelectedUser(null));
    },[])


    return (<>
        {
            selectedUser!==null?(

        <div className='md:min-w-[550px] flex flex-col'>
            <div>
                <div className='flex items-center bg-zinc-800 p-3'>
                    <div className="avatar">
                        <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 ">
                            <img src={selectedUser?.profilePhoto} alt="User Avatar" />
                        </div>
                    </div>
                    <div className='px-5'>
                        <div className=" flex justify-between  gap-2 ">
                            <p>{selectedUser?.fullName}</p>
                        </div>
                    </div>
                    
                </div>
            </div>
                <Messages/>
                <SendInput/>    
        </div>
            ):(
                <div className='md:min-w-[550px] flex flex-col justify-center items-center'>
                    <h1 className='text-4xl text-white font-bold'>Hi,{authUser?.fullName}</h1>
                    <h1 className='text-2xl text-white'>Lets start a conversation</h1>

                </div>
            )
        }
        
    </>
    )
}

export default MessageContainer
