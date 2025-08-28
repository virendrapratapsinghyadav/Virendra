import React from 'react'
import companyLogo from '../../assets/images/company.png'
import Btn from '../NonBtn/Btn'

const Experience = ({icon,company,role,present,duration}) => {
    return (
        <div className=' w-full flex justify-between items-center border border-red-500 px-2 rounded-md'>

            {/* Company & logo  */}
            <div className='flex items-center gap-3'>
                {/* logo */}
                <img src={icon} alt="logo" className='h-[40px] w-[40px] m-2 rounded-md' />

                {/* name &role */}
                <div>
                    <div className='font-bold'>{role}</div>
                    <div>{company}</div>
                </div>
            </div>

            {/* time */}
            <div className='flex gap-2'>
                {
                    present?<Btn label={current}/>:""
                }
                <div>
                    {duration}
                </div>
            </div>

        </div>
    )
}

export default Experience
