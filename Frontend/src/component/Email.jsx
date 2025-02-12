// eslint-disable-next-line no-unused-vars
import React from 'react'
import { MdCropSquare } from 'react-icons/md'
import { FaRegStar } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Email = () => {
    const navigate=useNavigate();
    const openMail=()=>{
        navigate("/mail/1234");
    }
  return (
    <div onClick={openMail} className='flex items-center justify-between border-b border-gray-200 px-4 py-3 text-sm hover:cursor-pointer hover:shadow-md'>
    <div className='flex items-center gap-2'>
    <div className='text-gray-400'> 
    <MdCropSquare size={'20px'}/>
    </div>
    <div className='text-gray-400'>
    <FaRegStar size={'20px'}/>
    </div>
    <div>
        <h1 className='font-semibold'>30DaysCoading</h1>
    </div>

    </div>
    <div className=' flex-1 ml-4'>
     <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ipsum expedita minus. Nisi eaque asperiores est dolores iusto nobis .</p>
    </div>
    <div  className='flex-none text-gray text-sm'>
     <p> 12 days ago</p>
    </div>
   
  </div>
  )
}

export default Email
