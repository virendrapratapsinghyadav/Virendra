import React from 'react';
import p1 from '../../assets/images/p1.avif'

const Card2 = ({icon, heading, description}) => {
  return (
    <div className='m-2 p-1'>
      <a href="">

        <div className='flex justify-between'>
          {/* image */}
        
          <img src={icon} alt="" className='h-[200px] w-[500px] rounded-xl'/>
        

        {/* Overview */}
        <div>
          <h1 className='text-xl font-bold'>{heading}</h1>
          <p>
            {description}
          </p>
        </div>
        </div>

      </a>
    </div>
  )
}

export default Card2
