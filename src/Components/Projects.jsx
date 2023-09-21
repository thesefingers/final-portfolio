import React from 'react'

const Projects = () => {
  return (
    <div className='flex flex-col items-center mt-5 w-screen'>
            <h1 className='mb-10'>
                Projects
            </h1>

        <div>
            <div className='flex flex-col sm:flex-row gap-5 mb-5'>
            <div className='flex flex-col'>
            <div className='flex flex-row gap-5 mb-5'>
                <img src="ohnHome.png" className='w-[100px] rounded-md'/>
                <img src="ohn2.png" className='w-[100px] rounded-md'/>     
            </div>
            <div className=''>
                <a href="https://ohnstraining.com">
                <h3 className='font-semithin underline text-[30px]'>
                ohnstraining.com
                </h3>
                </a>
            </div>
            </div>
            <div className='flex flex-col text-center'>
            <div className='flex flex-row gap-5 mb-5'>
                <img src="mysite.png" className='w-[250px] h-[200px] rounded-md'/>
                <img src="mysite2.png" className='w-[250px] h-[200px] rounded-md'/>     
            </div>
            <div>
                <a href="#Home">
                <h3 className='font-semithin underline text-[30px]'>
                this very site
                </h3>
                </a>
            </div>
            </div>
            </div>
        </div>

    </div>
  )
}

export default Projects