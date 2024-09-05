import React, { useState } from 'react'
import { Sling as Hamburger } from 'hamburger-react'
import logo from '../assets/hostit.png'
import { NavLink } from 'react-router-dom'
import { BiSolidDashboard } from "react-icons/bi";
import { FaPeopleGroup } from "react-icons/fa6";

const MobileSidebar = () => {
    const [isOpen, setOpen] = useState(false);

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
    <div className='lg:hidden md:hidden flex justify-between w-[90%] mx-auto items-center py-4'>
        <img src={logo} alt="" className="w-[120px]" />
        <Hamburger toggled={isOpen} toggle={setOpen} />
        {isOpen && ( <div className='mt-20 flex flex-col absolute bg-white h-[50vh] w-[100%] top-20 left-0 z-50'>
        <NavLink to='/dashboard' className='flex items-center my-4 py-4 px-6 text-[18px] font-[500] hover:text-[#015C28]"' style={({isActive}) => isActive ? activeStyle : null } end><BiSolidDashboard className='mr-2'/>  Dashboard</NavLink>
        <NavLink to='attendance' className='flex items-center my-4 py-4 px-6  text-[18px] font-[500]' style={({isActive}) => isActive ? activeStyle : null }> <FaPeopleGroup className='mr-2' /> Attendance</NavLink>
        </div>)}
    </div>
  )
}

export default MobileSidebar