import React from 'react'
import Experience from '../../components/experiences/Experience'
import Btn from '../../components/NonBtn/Btn'
import profile from '../../assets/profile.png'

const About = () => {
    return (
        <div className='w-full'>

            {/* Intro */}

            {/* Top */}
            <div className='flex justify-between items-center mt-3 p-2'>
                <div className='flex gap-3'>
                    <div className=''>
                        <img src={profile} alt="" className='h-[64px] w-[64px] m-2 rounded-2xl'/>
                    </div>
                    <div  className='pt-3'>
                        <p className='text-blue-500'>A Software developer with 2+years experience</p>
                        <h1 className='text-xl font-bold'>Hi, I'm Virendra!</h1>
                    </div>
                </div>

                <div>
                    <Btn/>
                </div>
            </div>

            {/* Information */}
            <div>
                <p>I desisgned and built my first product in 2013 when I was 20 year old - an iOS app for new students at my high school to help them settle in - ever since i've beeb obssessed with what I could create from noting.</p>
                <p>When i'm not working. I am likely filling y cup with one of my many passsions, writing, reading, watching football, travelling or catching up on sleep.</p>
            </div>


            {/* Summary: */}
            <div>
                <div className='text-xl'><h1>Summary </h1></div>
                <div className='flex gap-10 px-2'>
                    <Btn/>
                    <Btn/>
                    <Btn/>
                    <Btn/>
                </div>
                <hr/>
            </div>
            
            {/* Specialising in: */}
            <div >
                <div className='text-xl'><h1>Specialising in: </h1></div>
                <div className='flex gap-10 px-2'>
                    <Btn/>
                    <Btn/>
                    <Btn/>
                    <Btn/>
                </div>
                <hr/>
            </div>

            {/* Experience */}
            <div>
                <div className='text-xl'>
                    <h1>Experience</h1>
                </div>
                <div >
                    <Experience />
                </div>
                <a className=''>
                    <div className='flex gap-3 bg-gray-300 rounded-md m-1 px-2'>                       <div><Btn/></div>
                        <div><p>Read my entire CV</p></div>
                    </div>
                </a>
            </div>

            {/* Education */}
            <div>
                <div className='text-xl'>
                    <h1>Education</h1>
                </div>
                <div>
                    <Experience />
                </div>
            </div>
        </div>
    )
}

export default About
