import React from 'react'
import { Link } from 'react-router-dom'

const ProjectDetail = ({ subHeading, heading, image, duration, role, link, context, outcome }) => {
    return (
        <div>
            <div>
                {/* CONTENT */}
                <div className='flex flex-col justify-center items-center gap-10'>

                    {/* Heading */}
                    <div className='flex flex-col items-center'>
                        <div><h2 className=''>{subHeading}</h2></div>
                        <div><h1 className='text-2xl'>{heading}</h1></div>
                    </div>

                    {/* IMAGE */}
                    <div>
                        <img src={image} alt="img" />
                    </div>

                    {/* PROJECT DETAILS/CONTEXT */}
                    <div className='flex'>

                        {/* DETAILS */}
                        <div className='w-[40%]'>
                            <div><h1>Project Details</h1></div>

                            <div>
                                {/* Duration */}
                                <div>
                                    <p>Duration</p>
                                    <p>{duration}</p>
                                </div>

                                {/* Role */}
                                <div>
                                    <p>Role</p>
                                    <p>{role}</p>
                                </div>
                            </div>

                        </div>

                        {/* CONTEXT */}
                        <div className='w-[50%'>
                            {/* heading */}
                            <div>
                                <h1>Project Context</h1>
                            </div>

                            {/* description */}
                            <div>
                                <p>{context}</p>
                            </div>
                        </div>
                    </div>

                    {/* PROJECT OUTCOME */}
                    <div>
                        {/* heading */}
                        <div><h1>Project Outcome</h1></div>

                        {/* content */}
                        <div>
                            <p>{outcome}</p>
                        </div>
                    </div>

                    {/* Link */}
                    <div>
                        <Link to={link}>visit live site</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetail
