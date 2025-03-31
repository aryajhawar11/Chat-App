import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import toast from 'react-hot-toast';

const SignUp = () => {
  const[user,setUser]= useState({
    fullName:"",
    username:"",
    password:"",
    confirmPassword:"",
    gender:""
  })

const navigate= useNavigate();
const onSubmitHandler= async (e)=>{
  e.preventDefault();
  try {
    const res= await axios.post('http://localhost:8080/api/v1/user/register',user,{
      headers:{
        'Content-Type':'application/json'
      },
        withCredentials:true
      
    });
    if(res.data.success){
      navigate("/login")
      toast.success(res.data.message);

    }
  } catch (error) {
    toast.error(error.response.data.message)
    console.log(error)
    
  }
  setUser({
    fullName:"",
    username:"",
    password:"",
    confirmPassword:"",
    gender:""
  })
}
const handleCheckBox=(gender)=>{
  setUser({...user,gender})
}





  return (
  <>
   <div className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur"></div>
    <div className="bg-white p-8 rounded-3xl shadow-xl w-96 z-10 text-black">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Create an Account</h2>
      <form onSubmit={onSubmitHandler} action="">
        <div className="mb-5">
          <label className="block text-gray-700 font-semibold mb-2">Full Name</label>
          <input
          value={user.fullName} onChange={(e)=>setUser({...user,fullName:e.target.value})}  
            type="text" 
            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-400 text-black"
            placeholder="Enter your full name"
          />
        </div>
        <div className="mb-5">
          <label className="block text-gray-700 font-semibold mb-2">Username</label>
          <input
          value={user.username} onChange={(e)=>setUser({...user,username:e.target.value})}  
            type="text" 
            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-400 text-black"
            placeholder="Choose a username"
          />
        </div>
        <div className="mb-5">
          <label className="block text-gray-700 font-semibold mb-2">Password</label>
          <input 
          value={user.password} onChange={(e)=>setUser({...user,password:e.target.value})}
            type="password" 
            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-400 text-black"
            placeholder="Enter a strong password"
          />
        </div>
        <div className="mb-5">
          <label className="block text-gray-700 font-semibold mb-2">Confirm Password</label>
          <input 
          value={user.confirmPassword} onChange={(e)=>setUser({...user,confirmPassword:e.target.value})}
            type="password" 
            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-400 text-black"
            placeholder="Confirm your password"
          />
        </div>
        <div className="mb-5">
            <label className="block text-gray-700 font-semibold mb-2 text-lg">
              Gender
            </label>
            <div className="flex space-x-6">
              <label className="flex items-center text-lg cursor-pointer">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={user.gender === "male"}
                  onChange={(e) => setUser({ ...user, gender: e.target.value })}
                  className="w-5 h-5 accent-blue-500"
                />
                <span className="ml-2">Male</span>
              </label>
              <label className="flex items-center text-lg cursor-pointer">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={user.gender === "female"}
                  onChange={(e) => setUser({ ...user, gender: e.target.value })}
                  className="w-5 h-5 accent-pink-500"
                />
                <span className="ml-2">Female</span>
              </label>
            </div>
          </div>
        <button type='submit'
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition text-lg font-semibold shadow-md"
        >
          Sign Up
        </button>
        <Link to="/login">
        <p className="text-center text-gray-600 mt-4 text-sm">Already have an account? 
        <span className="text-blue-500 font-semibold cursor-pointer hover:underline">Login</span></p>
         </Link>
      </form>
    </div>
  </>

  )
}

export default SignUp
