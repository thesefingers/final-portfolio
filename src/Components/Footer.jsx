import React from 'react'
import { IoLogoGithub, IoLogoLinkedin, IoMailSharp } from "react-icons/io5";

const Footer = () => {
  return (
    <div id='#Footer' className='bg-black w-screen flex flex-col justify-center items-center text-center p-2'>
        <h1 className='font-semibold text-[30px]  text-gray-300 hover:text-white tracking-widest mt-5'>
            Contact
        </h1>
        <br />
        <div className='flex flex-row gap-10 mb-10'>

            <IoLogoGithub className='w-[50px] h-[50px] text-gray-400 hover:scale-150 transition-all ease-in-out hover:text-white cursor-pointer'/>
            <IoLogoLinkedin className='w-[50px] h-[50px] text-gray-400 hover:scale-150 transition-all ease-in-out hover:text-white cursor-pointer'/>
            <IoMailSharp className='w-[50px] h-[50px] text-gray-400 hover:scale-150 transition-all ease-in-out hover:text-white cursor-pointer'/>
        </div>
        <div>
            <h2 className='mt-5 text-[30px] mb-2'>
                &copy;TheseFingers
            </h2>
        </div>
    </div>
  )
}

export default Footer