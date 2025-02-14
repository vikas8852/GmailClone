// eslint-disable-next-line no-unused-vars
import axios from 'axios';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { setAuthUser } from '../redux/appSlice';

const Login = () => {
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const[input,setInput]=useState({
        email:"",
        password:""
    })
    const changeHandler=(e)=>{
        setInput({...input,[e.target.name]:e.target.value});
    }
    const submitHandler=async(e)=>{
        e.preventDefault();
        console.log(input);
       try{
          const res=await axios.post("http://localhost:6060/api/v1/user/login",input,{
            headers:{
                'Content-Type':'application/json'
            },
            withCredentials:true
          })
          if(res.data.success){
          //  console.log(res.data.user)
            dispatch(setAuthUser(res.data.user))  // user return at time of login whn it succssfull
           navigate("/");    //if login success then it move to home page
           toast.success(res.data.message) // us to show pop lik message of success
          }
         // console.log(res.data);
       }
       catch(err){
        console.log(err);
        toast.error(err.response.data.message)
       }
    }
  return (
    <div className='flex items-center justify-center w-screen h-screen'>
    <form onSubmit={submitHandler} className='flex flex-col gap-3 bg-white p-4 w-[20%]'>
    <h1 className='text-2xl my-2 font-medium' >Login</h1>
    <input onChange={changeHandler} type="email" value={input.email} name="email" placeholder='Email' className=' border border-gray-400 rounded-md px-2 py-1'/>
    <input onChange={changeHandler} type="password" value={input.password} name="password" placeholder='Password' className='border border-gray-400 rounded-md px-2 py-1' />
    <button type='submit' className='bg-gray-800 p-2 text-white rounded-md'>Login</button>
    <p>Do'nt have a Account? <Link to={"/signup"} className='text-blue-600'>SignUp</Link></p>
    </form>
    </div>
  )
}

export default Login
