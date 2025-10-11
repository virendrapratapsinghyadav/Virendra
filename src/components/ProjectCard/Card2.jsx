import React from 'react';

const Card2 = ({ icon, heading, description }) => {
  return (
    <div className='m-2 p-1 border rounded-lg overflow-hidden transform hover:scale-90 transition-transform duration-300 '>

      <div className='flex flex-col lg:flex-row'>

        {/* Image container */}
        <div className='flex-1'>
          <img
            src={icon}
            alt="ProjectImage"
            className=' h-full w-full object-cover rounded-xl'
          />
        </div>

        {/* Text container */}
        <div className='flex-1 p-6 flex flex-col justify-center'>
          <h1 className='text-xl font-bold mb-2 lg:text-xl'>{heading}</h1>
          <p className='line-clamp-3 lg:line-clamp-none max-w-[160px] sm:max-w-[200px] md:max-w-[500px] lg:max-w-full'>{description}</p>
        </div>

      </div>

    </div>
  );
}

export default Card2;
