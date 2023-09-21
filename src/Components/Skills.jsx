import React from 'react'

const Skills = () => {
  return (
    <div id='Skills' className='px-12 justify-center items-center text-center w-screen mt-5'>
      <div className='flex items-center p-1'>
        <div className='w-[15px] h-[7px] bg-black rounded-full'></div>
        <div className='w-full border-2 border-orange-500 mx-4 mt-[2px]'></div>
        <h2 className='font-bold text-[25px] tracking-widest'>Skills</h2>
        <div className='w-full border-2 border-orange-500 mx-4 mt-[2px]'></div>
        <div className='w-[15px] h-[7px] bg-black rounded-full'></div>
      </div>
      <div className='flex flex-wrap justify-center'>
        <div>
        <img src="javascript2.png" className='w-[120px] hover:scale-110 transition-all ease-in'/>
        </div>
        <div>
        <img src="html5.png" className='w-[150px] hover:scale-110 transition-all ease-in'/>
        </div>
        <div>
        <img src="tailwind.png" className='w-[160px] hover:scale-110 transition-all ease-in'/>
        </div>
        <div>
        <img src="newreact.png" className='w-[160px] hover:scale-110 transition-all ease-in'/>
        </div>
        <div>
        <img src="bootstrap2.png" className='w-[200px] hover:scale-110 transition-all ease-in'/>
        </div>
        <div>
        <img src="css3.png" className='w-[130px] hover:scale-110 transition-all ease-in' />
        </div>
        <div>
        <img src="sql.png" className='w-[150px] hover:scale-110 transition-all ease-in' />
        </div>
        <div>
        <img src="nodejs.png" className='w-[140px] hover:scale-110 transition-all ease-in'/>
        </div>
        <div>
        <img src="typescript.png" className='w-[140px] hover:scale-110 transition-all ease-in'/>
        </div>
      </div>
    </div>
  )
}

export default Skills