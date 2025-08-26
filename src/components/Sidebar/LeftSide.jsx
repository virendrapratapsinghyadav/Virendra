import React from 'react'
import profile from '../../assets/profile.png';
import { FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";


const LeftSide = () => {
    return (
        <div>
            <div className="h-screen w-64 flex flex-col justify-between border-r bg-white p-6">
                <div>
                    <div className="mb-8">
                        <div className="mb-8 flex items-center gap-4">
                            <div className="w-20 h-20 rounded-full bg-gray-300 mb-4"><img className=" mb-4 w-20 h-20 rounded-full object-cover" src={profile} alt="" /></div>
                            <div className='mb-3'>
                                <h1 className="text-xl font-bold">Virendra</h1>
                                <p className="text-gray-600 text-xs">Software Developer</p>
                            </div>
                        </div>
                        <div>
                            <nav className="space-y-2 mb-8 ">
                                <div className="block  shadow-md font-mono text-shadow-xs text-gray-800 hover:text-blue-600 px-3 py-1 rounded-lg border border-gray-300 hover:bg-gray-100">
                                    <a href="/" >
                                        Home
                                    </a>
                                </div>
                                <div className="block  shadow-md font-mono text-shadow-xs text-gray-800 hover:text-blue-600 px-3 py-1 rounded-lg border border-gray-300 hover:bg-gray-100">
                                    <a href="/projects" >
                                        Projects
                                    </a>
                                </div>
                                <div className="block  shadow-md font-mono text-shadow-xs text-gray-800 hover:text-blue-600 px-3 py-1 rounded-lg border border-gray-300 hover:bg-gray-100">
                                    <a href="/about" >
                                        About Me
                                    </a>
                                </div>
                            </nav>
                        </div>

                        <div>
                            <div>
                                <p className="font-semibold mb-2">social</p>
                            </div>

                            <div className="space-y-2 text-sm">
                                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-gray-700 hover:text-blue-600 rounded-md hover:bg-gray-100">
                                    <FaLinkedin /> LinkedIn
                                </a>
                                <a href="https://twitter.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-gray-700 hover:text-blue-600 rounded-md hover:bg-gray-100">
                                    <FaTwitter /> X (Twitter)
                                </a>
                                <a href="mailto:your@email.com" className="flex items-center gap-2 text-gray-700 hover:text-blue-600 hover:bg-gray-100 rounded-md pr-2">
                                    <FaEnvelope /> Email Me
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="space-y-2">
                        <div>
                            <button className="w-full px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100">
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
