import React from 'react'
import { useState } from 'react';


const NavBar = () => {

    const [toggle, setToggle] = useState(false);

    return (
        <div className='w-screen flex justify-between'>
            <img src="hands.png" className='h-[100px]'/>
            <div className='hidden md:flex gap-10 justify-between items-center'>
            <a href="#Home" className='cursor-pointer hover:bg-orange-500 hover:scale-110 transition-all ease-in-out hover:rounded hover:p-3 hover:text-white'>
            <h2>HOME</h2>
            </a>
            <a href="About" className='cursor-pointer hover:bg-orange-500 hover:scale-110 transition-all ease-in-out hover:rounded hover:p-2 hover:text-white'>
            <h2>ABOUT</h2>
            </a>
            <a href="#Skills" className='cursor-pointer hover:bg-orange-500 hover:scale-110 transition-all ease-in-out hover:rounded hover:p-2 hover:text-white'>
            <h2>SKILLS</h2>
            </a>
            <a href="#Projects" className='cursor-pointer hover:bg-orange-500 mr-5 hover:scale-110 transition-all ease-in-out hover:rounded hover:p-2 hover:text-white'>
            <h2>PROJECTS </h2>
            </a>
            </div>
            <div className='md:hidden lg:hidden flex mt-8 flex-col'>
                {!toggle?<svg xmlns="http://www.w3.org/2000/svg" fill="none" onClick={()=>setToggle(true)} viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 cursor-pointer text-orange-600">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                </svg>
                    :<svg xmlns="http://www.w3.org/2000/svg" fill="none" onClick={()=>setToggle(false)} viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 cursor-pointer text-orange-600 float-right">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    }
                    {toggle? 
                            <div className='md:hidden flex flex-col bg-orange-500 p-1 text-center rounded mr-2'>
                                <h2 className='p-2 cursor-pointer hover:scale-125 transition-all ease-in-out font-semibold text-white'>HOME</h2>
                                <h2 className='p-2 cursor-pointer hover:scale-125 transition-all ease-in-out font-semibold text-white'>ABOUT</h2>
                                <h2 className='p-2 cursor-pointer hover:scale-125 transition-all ease-in-out font-semibold text-white'>SKILLS</h2>
                                <h2 className='p-2 cursor-pointer hover:scale-125 transition-all ease-in-out font-semibold text-white'>PROJECTS</h2>
                            </div>
                        :null}
            </div>  
  



        </div>
  )
}

export default NavBar