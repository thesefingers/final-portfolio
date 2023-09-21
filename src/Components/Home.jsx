import React from 'react'

const Home = () => {
  return (
    
        <div id='Home' className='mt-7 px-8 md:px-20 items-center flex flex-col md:flex-row w-screen'>
            <div className=''>
                <h1 className='text-[30px] font-bold mb-5'>Hello, </h1>
                <h1 className='text-[35px] font-bold mb-5'>I Am</h1>
                <h1 className='text-[45px] font-extrabold mb-5 text-orange-500 type-name'></h1>
                <h3 className='text-[30px] font-semibold mb-5'>Web Developer | Frontend Engineer</h3>
                <h3 className='text-[18px] font-semibold mb-5'>
                "I'm a web developer and frontend engineer, crafting visually appealing and user-friendly digital experiences."
                </h3>
                <button className='bg-orange-500 font-bold hover:scale-110 transition-all ease-in-out p-2 rounded text-white tracking-widest mb-5'>Resume</button>
            </div>
            <div>
            <img src="profile1.jpg" className='w-[300px] items-center md:w-[400px] ml-3 rounded-3xl hover:scale-110 transition-all ease-in'/>
            </div>


        </div>

  )
}

export default Home