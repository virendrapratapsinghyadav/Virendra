import React from 'react'
import movie1 from  '../../assets/images/movie1.png';
import movie2 from  '../../assets/images/movie2.png';

const Card1 = () => {
    return (
        <div>
            <a className='cursor-pointer group'>
                {/* heading */}
                <div>
                    <span className='text-blue-400'>ReactsJs Case Study : </span>
                    <span className='text-[rgb(107,107,115)]'>Movies App for Entertainment</span>
                </div>

                <div className='flex gap-2  overflow-y-hidden group-hover:gap-5 transition-all duration-300'>
                    {/* image1 */}
                <div >
                    <img className=' translate-y-30  rounded-md 
                     group-hover:translate-y-10 transition-transform duration-300' src={movie1} alt="" />
                </div>

                {/* image2 */}
                <div >
                    <img className='translate-y-30  rounded-md 
                    group-hover:translate-y-5 transition-transform duration-300' src={movie2} alt="" />
                </div>
                </div>
            </a>
        </div>
    )
}

export default Card1
