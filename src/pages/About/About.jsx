import React from 'react'
import Experience from '../../components/experiences/Experience'
import Btn from '../../components/NonBtn/Btn'
import profile from '../../assets/profile.png'
import visibuild from '../../assets/images/visibuild.png'
import cheil from '../../assets/images/cheil.jpeg'
import bmc from '../../assets/images/bmc.png'
import schoolofrock from '../../assets/images/schoolofrock.jpg'
import galgotia from '../../assets/images/galgotia.jpg'
import bethel from '../../assets/images/BethelAcademy.png'
import maharishi from '../../assets/images/MaharishiVidyaMandir.jpg'
import { MapPin, Briefcase, Plane, MoveUpRight, FileText, Layers, Smartphone, Grid } from "lucide-react";


const About = () => {



    const summaryTags = [
        {icon: Briefcase, label:"Contech"},
        { label:"Over 2 years of experience"},
        {icon: MapPin, label:"Kanpur"},
        {icon: Plane, label:"Open to relocation"},
    ]

    const specialisingTags = [
        {icon: Layers, label:"Growth design"},
        {label:"Design systems"},
        {icon: Smartphone, label:"Mobile UI"},
        {icon: Grid, label:"B2B software"},
    ]

    const ExperienceList = [
        {icon:visibuild, company:"Visibuild", role:"Product Designer", present:"", duration:"2024-present"},
        {icon:cheil, company:"Cheil Worldwide-Samsung", role:"Junior UX Designer", present:"", duration:"2022-2024"},
        {icon:bmc, company:"Ben M Creative", role:"Freelance Web Designer", present:"", duration:"2020"},
        {icon:schoolofrock, company:"School of Rock Australia", role:"Digital Designer", present:"", duration:"2021-2022"},
    ]

    const EducationList = [
        {icon:galgotia, company:"Galgotia College", role:"Btech", present:"", duration:"2025"},
        {icon:bethel, company:"Bethel Academy", role:"Intermediate", present:"", duration:"2020"},
        {icon:maharishi, company:"Maharishi Vidya Mandir", role:"HighScool", present:"", duration:"2018"},
    ]




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
                    {
                        summaryTags.map((tag, index)=>{
                            return(<Btn key={index} icon={tag.icon} label={tag.label}/>)
                        })
                    }
                </div>
               
            </div>
            
            {/* Specialising in: */}
            <div >
                <div className='text-xl'><h1>Specialising in: </h1></div>
                <div className='flex gap-10 px-2'>
                    {
                        specialisingTags.map((tag, index)=>{
                            return(<Btn key={index} icon={tag.icon} label={tag.label}/>)
                        })
                    }
                </div>
                <hr/>
            </div>

            {/* Experience */}
            <div>
                <div className='text-xl'>
                    <h1>Experience</h1>
                </div>
                <div >
                    {
                        ExperienceList.map((tag, index)=>{
                            return(
                                <>
                                <Experience key={index} icon={tag.icon} role={tag.role} company={tag.company} present={tag.present} duration={tag.duration}/>
                                </>
                            )
                        })
                    }
                </div>
                <a className=''>
                    <div className='flex justify-between items-center bg-gray-300 rounded-md m-1 px-2 '>
                        <div className='flex gap-2 items-center'>
                        <FileText className="w-4 h-4"/>
                        <p>Read my entire CV</p>
                        </div>
                        <div>
                            <MoveUpRight className="w-4 h-4"/>
                        </div>
                    </div>
                </a>
            </div>

            {/* Education */}
            <div>
                <div className='text-xl'>
                    <h1>Education</h1>
                </div>
                <div>
                    {
                        EducationList.map((tag, index)=>{
                            return(
                                <Experience key={index} icon={tag.icon} company={tag.company} role={tag.role} duration={tag.duration} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default About
