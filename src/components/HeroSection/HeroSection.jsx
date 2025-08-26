import React from 'react'
import { IoLocationSharp, IoBulb} from "react-icons/io5";
import { AiFillGithub } from "react-icons/ai";

const HeroSection = () => {
  return (
    <div>
      <div className='flex flex-col space-y-0.5'>

        {/* top */}
        <div>
            <div className='flex gap-3'>
                <div className=' text-[rgb(107,107,115)] inline-flex items-center rounded-2xl bg-gray-200 text-xs px-2 py-0.5 gap-1'> 
                    <div><IoLocationSharp /></div>
                    <div><p className='font-bold text-gray-800 font-mono text-shadow-2xs'>Kanpur</p></div>
                </div>
                <div className=' text-[rgb(107,107,115)] inline-flex items-center rounded-2xl bg-gray-200 text-xs px-2 py-0.5 gap-1'>
                    <div><IoBulb /></div>
                    <div><p className='font-bold text-gray-800 font-mono text-shadow-2xs'>2+ years of experience</p></div>
                </div>
            </div>
        </div>



        {/* Middle */}
        <div className='py-1'>
            <h1 className=' text-[rgb(41,41,48)] text-xl font-bold pt-2'>A Software Developer specialising in creating delightful experiences</h1>
        </div>



        {/* bottom */}
        <div className='text-[rgb(107,107,115)] text-base space-y-2 pb-2'>
            <p className=''>I'm a software developer who brings clarity to complex problems. I design intutitve, elegant interfaces that make technology feel human.</p>
            <p className=''>With over 2 years of experience in website design and a knack for smooth interactions, I'm an asset to any team.</p>
            <p className=''>My focus is on building experiences that move that needle and drive business outcomes. Click around and enjoy my corner of the internet!</p>
        </div>

        {/* footer */}
        <div className='mt-[3px] flex gap-[3px] items-center'>
            <div><p>Currently designing :</p></div>
            <div className=' text-[rgb(107,107,115)] inline-flex items-center rounded-2xl bg-gray-200 text-xs px-2 py-0.5'>
                <div><AiFillGithub /></div>
                <div>
                    <button>MovieApp</button>
                </div>
            </div>
        </div>



      </div>
    </div>
  )
}

export default HeroSection
