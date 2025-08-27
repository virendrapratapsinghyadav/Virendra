import React from 'react'
import companyLogo from '../../assets/images/company.png'
import Btn from '../NonBtn/Btn'

const Experience = () => {
    return (
        <div className=' w-full flex justify-between items-center border border-red-500'>

            {/* Company & logo  */}
            <div className='flex items-center gap-3'>
                {/* logo */}
                <img src={companyLogo} alt="logo" className='h-[40px] w-[40px] m-2' />

                {/* name &role */}
                <div>
                    <div>Product Designer</div>
                    <div>Visibuild</div>
                </div>
            </div>

            {/* time */}
            <div className='flex gap-2'>
                <div>
                    <Btn />
                </div>
                <div>
                    <span>2024</span>-<span>present</span>
                </div>
            </div>

        </div>
    )
}

export default Experience
