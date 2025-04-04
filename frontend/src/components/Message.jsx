import React, { useEffect, useRef }  from 'react'
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';



const Message = ({message}) => {
    const scroll=useRef(null);
    const{authUser,selectedUser} =useSelector(store=>store.user);
    useEffect(()=>{
        scroll.current?.scrollIntoView({behavior:"smooth"})
    },[message]);    

  return (
    <div ref={scroll} className={`chat ${authUser?._id === message?.senderId ? 'chat-end': 'chat-start'} `}>
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <img
        alt="Tailwind CSS chat bubble component"
        src={message?.senderId=== authUser?._id ? authUser?.profilePhoto: selectedUser?.profilePhoto} />
    </div>
  </div>
  <div className="chat-header">
    Obi-Wan Kenobi
    <time className="text-xs opacity-50">12:45</time>
  </div>
  <div className="chat-bubble">{message?.message}</div>
  
</div>
  )
}


Message.propTypes = {
    message: PropTypes.shape({
      _id: PropTypes.string,
      senderId: PropTypes.string,
      message: PropTypes.string,
    }).isRequired,
  };
  


export default Message;
