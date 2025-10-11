import React, { useState } from 'react'

//images
import dog from '../../assets/images/dog.jpeg';
import flower from '../../assets/images/flower.png';
import profile from '../../assets/images/profile2.jpg';
import stadium from '../../assets/images/stadium.jpg';
import location from '../../assets/images/location.png';
import marine from '../../assets/images/marine.png'
import onePiece from '../../assets/images/onePiece.png'


// icons
import { VscAccount } from "react-icons/vsc";
import { FaRegHeart } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { GiAnchor } from "react-icons/gi";


const Gallery = () => {

    const [currentImage, setCurrentImage]= useState(onePiece);

    const iconActions =[
        {icon:<VscAccount/>, img: profile},
        {icon:<GiAnchor/>, img:marine},
        {icon:<FaRegHeart/>, img:onePiece},
        {icon:<FaLocationDot/>, img:location},
    ]


    return (
        <div className=''>

            <div className='relative w-full overflow-hidden group '>

                {/* flowerLogo */}
                <div className=' absolute top-2 right-2 h-[44px] w-[44px] '>
                    <img src={flower} alt="" className='rounded-full shadow-md' />
                </div>

                {/* dynamic image */}
                <img
                    src={currentImage}
                    alt="gallery"
                    className="w-full h-[250px] object-cover rounded-xl shadow-lg transition-all duration-500"
                />


                {/* ImageSelector */}
                <div className='flex justify-center'>
                    <div className='absolute bottom-0 w-[250px]  py-2 flex justify-around align-middle text-black bg-neutral-400 text-2xl opacity-0 group-hover:opacity-100  rounded-4xl group-hover:-translate-y-4 transition-all duration-300 ease-in gap-0'>
                    {iconActions.map((item, idx)=>(
                        <button
                        key={idx}
                        onClick={()=>setCurrentImage(item.img)}
                        className="hover:scale-110 cursor-pointer transition-transform duration-200"
                        >
                            {item.icon}
                        </button>
                    ))}
                </div>
                </div>

            </div>

        </div>
    )
}

export default Gallery
