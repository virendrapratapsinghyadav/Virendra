import React from 'react';

const Card2 = ({ icon, heading, description }) => {
  return (
    <div className='m-2 p-1 border rounded-lg overflow-hidden transform hover:scale-90 transition-transform duration-300'>

      <div className='flex'>

        {/* Image container */}
        <div className='flex-1'>
          <img
            src={icon}
            alt="ProjectImage"
            className='h-full w-full object-cover rounded-xl'
          />
        </div>

        {/* Text container */}
        <div className='flex-1 p-6 flex flex-col justify-center'>
          <h1 className='text-xl font-bold mb-2'>{heading}</h1>
          <p>{description}</p>
        </div>

      </div>

    </div>
  );
}

export default Card2;
