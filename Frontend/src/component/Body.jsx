// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react'
import Sidebar from './Sidebar'
//import Inbox from './Inbox'
import { Outlet,  } from 'react-router-dom'

import Navbar from './Navbar';

const Body = () => {
  // const {user}=useSelector(store=>store.app);
  // const navigate=useNavigate();
  // useEffect(()=>{
  //   if(!user){
  //    navigate("/login")
  //   }
  // },[])
  return (
 <>
 <Navbar/>
     <div className='flex'>
    <Sidebar/>
    <Outlet/>
    </div>
 </>
  )
}

export default Body
