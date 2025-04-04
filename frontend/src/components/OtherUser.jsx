import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedUser } from '../Redux/userSlice';

const OtherUser = (props) => {
    const  user= props.user;
    const dispatch= useDispatch();
    const {selectedUser,onlineUsers}=useSelector(store=>store.user);
    const isOnline= onlineUsers.includes(user._id);
    

    const SelecteduserHandler=(user)=>{
        dispatch(setSelectedUser(user));
    }
    return (
        <div >
            <div onClick={(e)=>SelecteduserHandler(user)} className={`${selectedUser?._id=== user?._id? 'bg-zinc-600':''} flex items-center hover:bg-zinc-600 rounded p-2 cursor-pointer`}>
            <div className='avatar'>
            <div className={`w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 ${isOnline ? 'avatar-online' : ''}`}>
                        <img src={user?.profilePhoto} alt="User Avatar" /> 
                    </div>
                </div>
                <div className='px-5'>
                    <div className=" flex justify-between gap-2 ">
                        <p>{user?.fullName}</p>
                    </div>
                </div>
            </div>
            <div className='divider my-0 py-0 h-0.5'></div>
        </div>
    )
}

export default OtherUser

//?. optional chaining for safely accesing the properties of user