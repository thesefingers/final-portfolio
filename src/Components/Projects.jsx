import React from 'react'

const Projects = () => {
  return (
    <div id='Projects' className='flex flex-col items-center mt-5 w-screen bg-gray-300 p-3'>
            <h1 className='mb-10 text-[30px] mt-5 font-semibold text-black'>
                Finished Projects 
            </h1>

        <div className='mb-10 flex flex-col md:flex-row lg:flex-row gap-5'>
          <div className='flex flex-col gap-2 items-center md:flex-row md:gap-2 lg:flex-row lg:gap-2 mb-5'>
            <img src="ohnHome.png" className='w-[100px] rounded-xl hover:scale-110 transition-all ease-in' />
            <img src="ohn2.png" className='w-[100px] rounded-xl hover:scale-110 transition-all ease-in' />
            <a href="https://ohnstraining.com">
                <h3 className='text-[20px] font-semithin'>ohnstraining.com</h3>
            </a>
          </div>
          <div className='flex flex-col gap-2 items-center md:flex-row md:gap-2 lg:flex-row lg:gap-2'>
            <img src="mysite.png" className='w-[150px] rounded-xl hover:scale-110 transition-all ease-in' />
            <img src="mysite2.png" className='w-[150px] rounded-xl hover:scale-110 transition-all ease-in' />
            <div>
            <a href="#Home">
                <h3 className='text-[20px] font-semithin'>this site!</h3>
            </a>

            </div>

          </div>

       

        </div>

    </div>
  )
}

export default Projects