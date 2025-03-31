import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'
const Login = () => {
      const[user,setUser]= useState({
        username:"",
        password:""
      })
    const navigate=useNavigate();
    
    const onSubmitHandler=async (e)=>{
      e.preventDefault();
      console.log(user)
      try {
        const res= await axios.post('http://localhost:8080/api/v1/user/login',user,{
          headers:{
            'Content-Type':'application/json'
          },
            withCredentials:true
          
        });
        navigate("/")
          console.log(res)
      } catch (error) {
        toast.error(error.response.data.message)
        console.log(error)
      }



      setUser({
        username:"",
        password:""
      })
    }




  return (
    <>
    <div className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur"></div>
     <div className="bg-white p-8 rounded-3xl shadow-xl w-96 z-10 text-black">
       <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Login</h2>
       <form onSubmit={onSubmitHandler}>
         
         <div className="mb-5">
           <label className="block text-gray-700 font-semibold mb-2">Username</label>
           <input 
           value={user.username}
           onChange={(e)=>setUser({...user,username:e.target.value})}
             type="text" 
             className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-400 text-black"
             placeholder="Enter username"
           />
         </div>
         <div className="mb-5">
           <label className="block text-gray-700 font-semibold mb-2">Password</label>
           <input 
           value={user.password}
           onChange={(e)=>setUser({...user,password:e.target.value})}
             type="password" 
             className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-400 text-black"
             placeholder="Enter password"
           />
         </div>
        
         <button
         type='submit'
           className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition text-lg font-semibold shadow-md"
         >
           Login
         </button>
         <Link to="/register">
         <p className="text-center text-gray-600 mt-4 text-sm">Don't have an account? 
         <span className="text-blue-500 font-semibold cursor-pointer hover:underline">Signup</span></p>
          </Link>
       </form>
     </div>
   </>
  )
}

export default Login
