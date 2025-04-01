import React from 'react'

const OtherUser = () => {
  return (
    <div>
    <div className='flex items-center hover:bg-zinc-600 rounded p-2 cursor-pointer'>
      <div className="avatar">
          <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 avatar-online">
              <img src="https://3f76d3c30ed12bfc1032-89cd4604d12caea63ac7d98e7b7a3861.ssl.cf1.rackcdn.com/82667666.jpg" alt="User Avatar" />
          </div>
      </div>
      <div className='px-5'>
          <div className=" flex justify-between  gap-2 ">
              <p>Arya Jhawar</p>
          </div>
      </div>
    </div>
    <div className='divider my-0 py-0 h-1'></div>
  </div>
  )
}

export default OtherUser
