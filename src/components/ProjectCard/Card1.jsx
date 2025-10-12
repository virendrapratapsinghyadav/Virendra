import React from 'react'
import movie1 from  '../../assets/images/movie1.png';
import movie2 from  '../../assets/images/movie2.png';
import { Link, useNavigate } from 'react-router-dom';

const Card1 = ({id, name, img1, img2}) => {

    const navigate = useNavigate();

    const handleClick=()=>{
        navigate(`/project/${id}`)
    }

    return (
        <div onClick={handleClick}>
            <Link className='cursor-pointer group'>
                {/* heading */}
                <div>
                    <span className='text-blue-400'>ReactsJs Case Study : </span>
                    <span className='text-[rgb(107,107,115)]'>{name}</span>
                </div>

                <div className=' flex justify-center gap-2 overflow-hidden group-hover:gap-5 transition-all duration-300 md:group-hover:gap-2'>
                    {/* image1 */}
                <div >
                    <img className='translate-y-10 lg:translate-y-20  rounded-md 
                     md:group-hover:translate-y-5 transition-transform duration-200 rotate-3 group-hover:rotate-0' src={img1} alt="" />
                </div>

                {/* image2 */}
                <div >
                    <img className='translate-y-10 lg:translate-y-28  rounded-md 
                    group-hover:translate-y-7 transition-transform duration-200 -rotate-7 group-hover:rotate-0' src={img2} alt="" />
                </div>
                </div>
            </Link>
        </div>
    )
}

export default Card1
