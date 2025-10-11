import React from 'react'
import companyLogo from '../../assets/images/company.png'
import Btn from '../NonBtn/Btn'

const Experience = ({icon,company,role,present,duration}) => {
    return (
        <div className=' w-full flex justify-between items-center  px-2 rounded-md my-2'>

            {/* Company & logo  */}
            <div className='flex items-center gap-3'>
                {/* logo */}
                <img src={icon} alt="logo" className='h-[40px] w-[40px] m-2 rounded-md' />

                {/* name &role */}
                <div>
                    <div className='font-bold'>{role}</div>
                    <div className='truncate max-w-[160px] sm:max-w-[200px] md:max-w-[500px] lg:max-w-full '>
                        {company}
                    </div>
                </div>
            </div>

            {/* time */}
            <div className='hidden lg:block'>
                {
                    present?<Btn label={current}/>:""
                }
                <div>
                    {duration}
                </div>
            </div>

            {/* Light horizontal line */}
            


        </div>
    )
}

export default Experience
