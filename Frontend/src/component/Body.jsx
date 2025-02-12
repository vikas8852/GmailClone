// eslint-disable-next-line no-unused-vars
import React from 'react'
import Sidebar from './Sidebar'
//import Inbox from './Inbox'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <div className='flex'>
    <Sidebar/>
    <Outlet/>
    </div>
  )
}

export default Body
