import React from 'react'
import { IoLocationSharp, IoBulb} from "react-icons/io5";
import { FaTools } from "react-icons/fa";
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
                

                {/* experience display btn */}
                {/* <div className=' text-[rgb(107,107,115)] inline-flex items-center rounded-2xl bg-gray-200 text-xs px-2 py-0.5 gap-1'>
                    <div><IoBulb /></div>
                    <div><p className='font-bold text-gray-800 font-mono text-shadow-2xs'>2+ years of experience</p></div>
                </div> */}

                {/* display btn */}
                <div className=' text-[rgb(107,107,115)] inline-flex items-center rounded-2xl bg-gray-200 text-xs px-2 py-0.5 gap-1'>
                    <div><FaTools/></div>
                    <div><p className='font-bold text-gray-800 font-mono text-shadow-2xs'>Self-Taught Developer</p></div>
                </div>
            </div>
        </div>



        {/* Middle */}
        <div className='py-1'>
            <h1 className=' text-[rgb(41,41,48)] text-xl font-bold pt-2'>A Software Developer specialising in creating delightful experiences</h1>
        </div>



        {/* bottom */}
        <div className='text-[rgb(107,107,115)] text-base space-y-2 pb-1'>
            <p className=''>I’m a Computer Science graduate diving into the full-stack world—JavaScript, React, Node.js, and everything in between. I enjoy taking ideas from scratch and shaping them into interactive apps.</p>
            <p className=''>Currently, I’m leveling up my problem-solving skills through DSA, learning and practicing on my own to build a strong foundation before stepping into the professional world.</p>
            <p className=''>My focus is on building experiences that move that needle and drive business outcomes. Explore my projects to see the solutions I’ve built.</p>
        </div>

        {/* footer */}
        <div className='mt-[3px] flex gap-[3px] items-center'>
            <div><p>Currently designing :</p></div>
            <div className=' text-[rgb(107,107,115)] inline-flex items-center rounded-2xl bg-gray-200 text-xs px-2 py-0.5'>
                <div><AiFillGithub /></div>
                <div>
                    <button>Trello</button>
                </div>
            </div>
        </div>



      </div>
    </div>
  )
}

export default HeroSection
