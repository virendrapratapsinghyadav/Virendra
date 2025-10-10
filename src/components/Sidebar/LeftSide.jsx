import React from 'react'
import profile from '../../assets/profile1.png';
import { NavLink } from 'react-router-dom';
import { MousePointerClick, UserRound, House } from 'lucide-react';
import { FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";



const LeftSide = () => {
    return (
        <div>
            <div className="min-h-screen w-64 flex flex-col justify-between bg-[rgb(247,247,247)] p-6">
                <div>
                    <div className="mb-8">
                        <div className="mb-8 flex items-center gap-4">
                            <div className="w-20 h-20 rounded-full bg-[rgb(247,247,247)] mb-4"><img className=" mb-4 w-20 h-20 rounded-full object-cover" src={profile} alt="" /></div>
                            <div className='mb-3'>
                                <h1 className="text-xl font-bold">Virendra</h1>
                                <p className="text-gray-600 text-xs">Software Developer</p>
                            </div>
                        </div>
                        <div>
                            <nav className="space-y-2 mb-8 ">
                                <div className="block  shadow-md font-mono text-shadow-xs text-gray-800 hover:text-blue-600 px-3 py-1 rounded-lg border border-gray-300 hover:bg-gray-100">
                                    <NavLink to='/' className='flex gap-1 items-center'>
                                        <House />Home
                                    </NavLink>
                                </div>
                                <div className="block  shadow-md font-mono text-shadow-xs text-gray-800 hover:text-blue-600 px-3 py-1 rounded-lg border border-gray-300 hover:bg-gray-100">
                                    <NavLink to='/projects' className='flex gap-1 items-center'>
                                       <MousePointerClick/> Projects
                                    </NavLink>
                                </div>
                                <div className="block  shadow-md font-mono text-shadow-xs text-gray-800 hover:text-blue-600 px-3 py-1 rounded-lg border border-gray-300 hover:bg-gray-100">
                                    <NavLink to='/about' className='flex gap-1 items-center'>
                                       <UserRound/> <p>About me</p>
                                    </NavLink>
                                </div>
                            </nav>
                        </div>

                        <div className='ml-2'>
                            <div>
                                <p className="font-semibold mb-2">Social</p>
                            </div>

                            <div className="space-y-2 text-sm">
                                <NavLink to="https://www.linkedin.com/in/virendra-pratap-singh-yadav/" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-gray-700 hover:text-blue-600 rounded-md hover:bg-gray-100">
                                    <FaLinkedin /> LinkedIn
                                </NavLink>
                                <NavLink to="https://twitter.com"  target="_blank" rel="noreferrer" className="flex items-center gap-2 text-gray-700 hover:text-blue-600 rounded-md hover:bg-gray-100">
                                    <FaTwitter /> X (Twitter)
                                </NavLink>
                                <NavLink to="mailto:virendrapratapsinghyadav2@gmail.com" className="flex items-center gap-2 text-gray-700 hover:text-blue-600 hover:bg-gray-100 rounded-md pr-2">
                                    <FaEnvelope /> Email Me
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="space-y-2">
                        <div>
                            <button
                            onClick={()=>{window.open('https://drive.google.com/file/d/1K1jZKSsUcyyou-2iJd_p_Xuk3WkyzGjj/view','_blank')}}
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100">
                                Read my CV
                            </button>
                        </div>
                        <div>
                            <button className="w-full px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-800">
                                Contact Me
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default LeftSide
