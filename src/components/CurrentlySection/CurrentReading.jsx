import React from 'react'
import currentRead from '../../assets/images/currentRead.png'

const CurrentReading = () => {
  return (
    <div className='grid place-items-center  w-full h-full overflow-hidden group'>
      <h1 className='px-5 py-7 text-3xl text-shadow-amber-50 font-extrabold transition-all duration-400 transform group-hover:scale-110 group-hover:text-amber-300' >Currently reading</h1>
      <img
      className='px-5 lg:translate-25  duration-200 group-hover:-translate-0'
      src={currentRead}></img>
    </div>
  )
}

export default CurrentReading
