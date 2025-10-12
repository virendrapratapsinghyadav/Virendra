import React from 'react'
import profile from '../../assets/profile1.png';
import { NavLink } from 'react-router-dom';
import { MousePointerClick, UserRound, House } from 'lucide-react';
import { FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";



const Hamburger = ({closeMenu}) => {
    return (
        <div>
            <div className=" w-64 flex flex-col justify-between bg-[rgb(247,247,247)] p-6 ">
                <div>
                    <div className="mb-8">
                        <div>
                            <nav className="space-y-2 mb-8 ">
                                <div className="block  shadow-md font-mono text-shadow-xs text-gray-800 hover:text-blue-600 px-3 py-1 rounded-lg border border-gray-300 hover:bg-gray-100">
                                    <NavLink to='/' onClick={closeMenu} className='flex gap-1 items-center'>
                                        <House />Home
                                    </NavLink>
                                </div>
                                <div className="block  shadow-md font-mono text-shadow-xs text-gray-800 hover:text-blue-600 px-3 py-1 rounded-lg border border-gray-300 hover:bg-gray-100">
                                    <NavLink to='/projects' onClick={closeMenu}  className='flex gap-1 items-center'>
                                       <MousePointerClick/> Projects
                                    </NavLink>
                                </div>
                                <div className="block  shadow-md font-mono text-shadow-xs text-gray-800 hover:text-blue-600 px-3 py-1 rounded-lg border border-gray-300 hover:bg-gray-100">
                                    <NavLink to='/about' onClick={closeMenu}  className='flex gap-1 items-center'>
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
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 cursor-pointer">
                                Read my CV
                            </button>
                        </div>
                        <div>
                            <button 
                            onClick={()=>{window.location.href ='mailto:narveer@gmail.com'}}
                            className="w-full px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-800 cursor-pointer">
                                Contact Me
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Hamburger
