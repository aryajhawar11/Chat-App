import React, { useState } from "react";
import { HiSearch } from "react-icons/hi";
import OtherUsers from "./OtherUsers";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { setAuthUser, setOtherUsers } from "../Redux/userSlice";
import { useDispatch, useSelector } from "react-redux";
const Sidebar = () => {
    const[search,setSearch]= useState("")
    const {otherUsers}= useSelector(store=>store.user)
    const navigate= useNavigate();
    const dispatch= useDispatch();
const logouthandler= async ()=>{
    try {
        const res= await axios.get('http://localhost:8080/api/v1/user/logout');
        console.log(res);
        navigate("/login")
        toast.success(res.data.message)
        localStorage.removeItem('authUser');
        dispatch(setAuthUser(null));
        
    }catch (error) {
        console.log(error);
    }
}

const searchSubmitHandler=(e)=>{
    e.preventDefault();
    const conversationUser= otherUsers?.find((user)=>user.fullName.toLowerCase().includes(search.toLowerCase()))
    if(conversationUser){
      dispatch(setOtherUsers([conversationUser]));
    }else{
      toast.error("User not found")
    }
} 

  return (
    <div className="border-r border-slate-500 p-4 flex flex-col">
      <form onSubmit={searchSubmitHandler} action="" className="flex items-center space-x-1">
        <input
            onChange={(e)=>setSearch(e.target.value)}
          className="input input-bordered rounded-md px-4 py-2 w-full "
          type="text"
          placeholder="Search..."
        />
        <button type="submit" className="btn bg-zinc-500 text-white p-2 rounded-md group hover:bg-zinc-700 transition">
          <HiSearch className="w-5 h-5 outline-none" />
        </button>
      </form>
      <div className="divider px-3"></div>
      <OtherUsers/>
      <div className="mt-2">
            <button onClick={logouthandler} className="btn btn-sm hover:bg-zinc-700 transition">   Logout </button>
      </div>
    </div>
  );
};

export default Sidebar;
