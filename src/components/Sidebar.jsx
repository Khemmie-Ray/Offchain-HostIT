import React from 'react'
import logo from "../assets/hostit.png"
import { NavLink } from 'react-router-dom'
import { BiSolidDashboard } from "react-icons/bi";
import { FaPeopleGroup } from "react-icons/fa6";

const Sidebar = () => {

    const activeStyle = {
        backgroundColor: '#F5F5F5',
        borderLeft: '4px solid #11EBF2',
        borderRight: '4px solid #11EBF2',
        color: '#0D0042',
        borderRadius: '10px',
        width: '100%',
        padding: '20px'
      };

  return (
    <div className='w-[20%] border-r border-[#dadada] px-6 h-[100vh] bg-white hidden lg:flex md:flex flex-col'>
        <img src={logo} alt="" className="w-[150px] mt-6" />
        <div className='mt-20 flex flex-col'>
        <NavLink to='/dashboard' className='flex items-center my-4 py-4 px-6 text-[18px] font-[500] hover:text-[#015C28]"' style={({isActive}) => isActive ? activeStyle : null } end><BiSolidDashboard className='mr-2'/>  Dashboard</NavLink>
        <NavLink to='attendance' className='flex items-center my-4 py-4 px-6  text-[18px] font-[500]' style={({isActive}) => isActive ? activeStyle : null }> <FaPeopleGroup className='mr-2' /> Attendance</NavLink>
        </div>
    </div>
  )
}

export default Sidebar