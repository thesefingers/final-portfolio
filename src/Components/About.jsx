import React from 'react'
import { aboutSection } from '../Constants'

const About = () => {


  return (
    <div>
        <div id='About' className='h-[500px] bg-black w-screen text-center mt-20'>
            <h1 className='text-orange-500 font-semibold mb-8'>
                ABOUT
            </h1>
            <p className='text-[18px] text-orange-400 font-semithin px-10 md:px-70 lg:px-90 mb-[10px]'>
            "I'm a skilled web developer with a passion for creating
            exceptional digital experiences. I specialize in HTML, CSS, JavaScript,
            React, TypeScript, PHP, and SQL. 
            <br />
            I prioritize industry best practices
            for robust and secure web applications and collaborate seamlessly with
            backend engineers. What sets me apart is my effective communication,
            time management, and problem-solving skills. 
           
            <br />
            Let's embark on our future projects together, one
            line of code at a time!"
            </p>
        </div>
        <div className='flex flex-col md:flex-row lg:flex-row justify-center items-center w-screen mt-[-30px] mb-[30px] px-28 gap-10'>
            {
                aboutSection.map((item,index)=> (
                    <div className='rounded-lg hover:bg-black hover:text-white hover:scale-125 transition-all ease-in-out'>
                        <img src={item.image} className='w-[230px] h-[230px] cursor-pointer object-cover rounded-lg  hover:p-5 hover:scale-110 transition-all ease-in mb-1'/>
                        <h2 className='w-[230px] text-center  font-bold text-[20px] mb-1'>{item.title}</h2>
                        <h2 className='w-[230px] text-center font-semithin text-[16px] mb-5'>{item.desc}</h2>

                    </div>
                ))

            }
      

        </div>
    </div>
  )
}

export default About