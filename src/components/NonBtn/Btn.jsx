import React from 'react'

const Btn = ({icon:Icon, label}) => {
  return (
    <>
    <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-xs font-medium lg:text-sm ">
      {Icon && <Icon className=' lg:w-4 lg:h-4'/>}
      {label}
    </span>
    </>
  )
}

export default Btn
