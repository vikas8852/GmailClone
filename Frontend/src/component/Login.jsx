// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='flex items-center justify-center w-screen mt-10'>
    <form action="" className='flex flex-col gap-3 bg-white p-4 w-[20%]'>
    <h1 className='text-2xl my-2 font-medium' >Login</h1>
    <input type="email" placeholder='Email' className=' border border-gray-400 rounded-md px-2 py-1'/>
    <input type="password" placeholder='Password' className='border border-gray-400 rounded-md px-2 py-1' />
    <button type='submit' className='bg-gray-800 p-2 text-white rounded-md'>Login</button>
    <p>Do'nt have a Account? <Link to={"/signup"} className='text-blue-600'>SignUp</Link></p>
    </form>
    </div>
  )
}

export default Login
