// import daisyui from 'daisyui'
import {Routes,Link,Route} from 'react-router-dom';
import HomePage from './components/HomePage';
import SignUp from './components/SignUp';
import Login from './components/Login';
import './App.css';
import TailwindTest from './components/TailwindTest';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAuthUser, setOnlineUsers } from './Redux/userSlice';
import io from 'socket.io-client'
import { setScoket } from './Redux/socketSlice';


function App() {
  
  const {authUser}= useSelector(store=>store.user);
  const{socket}=useSelector(store=>store.socket);
  const dispatch= useDispatch();
  useEffect(() => {
    if (authUser) {
      console.log("Attempting to connect to socket server...");
      
      const newSocket = io('http://localhost:5000', {
        transports: ['websocket', 'polling'], // Try both transport methods
        reconnection: true,
        reconnectionAttempts: 5,
        reconnectionDelay: 1000,
        query:{
          userId:authUser._id},
        
      },
        

      );
      
      newSocket.on('connect', () => {
        console.log('✅ Connected to socket server!', newSocket.id);
      });
      
      newSocket.on('welcome', (data) => {
        console.log('Received welcome message:', data);
      });
      
      newSocket.on('connect_error', (error) => {
        console.error('❌ Socket connection error:', error);
      });
      
      newSocket.on('disconnect', (reason) => {
        console.log('❌ Socket disconnected:', reason);
      });
      
      dispatch(setScoket(newSocket))

      newSocket.on('getOnlineUsers',(onlineUsers)=>{
        dispatch(setOnlineUsers(onlineUsers))
      });
      
      // Cleanup function
      return () => {
        console.log('Disconnecting socket...');
        newSocket.disconnect();
      };
    }
    else{
      if(socket){
        socket.close();
        dispatch(setScoket(null));
      }
    }
  }, [authUser]);

  

  useEffect(() => {
    const storedUser = localStorage.getItem('authUser');
    if (storedUser) {
      dispatch(setAuthUser(JSON.parse(storedUser)));
    }
  }, []);

  return (
    <>
    <div className="p-4 h-screen flex items-center justify-center">
      <Routes>
      <Route path="/" element={<HomePage  />}/>
        <Route path="/register" element={<SignUp  />}/>
        <Route path="/login" element={<Login  />}/>
        <Route path="/test" element={<TailwindTest />}/>
      </Routes>
     
    </div>
    </>
  );
}

export default App;
