import React from 'react'
import Experience from '../../components/experiences/Experience'
import Btn from '../../components/NonBtn/Btn'
import profile from '../../assets/profile.png'
import visibuild from '../../assets/images/pasteApp-logo.png'
import cheil from '../../assets/images/sparkboard-logo.png'
import bmc from '../../assets/images/DC.png'
import schoolofrock from '../../assets/images/movieInfo-logo.png'
import galgotia from '../../assets/images/galgotia.jpg'
import bethel from '../../assets/images/BethelAcademy.png'
import maharishi from '../../assets/images/MaharishiVidyaMandir.jpg'
import {PlaneTakeoff, MapPin, Briefcase, Plane, MoveUpRight, FileText, Layers, Smartphone, Grid } from "lucide-react";


const About = () => {



    const summaryTags = [
        {icon: Briefcase, label:"Open to entry-level roles"},
        {icon: MapPin, label:"Kanpur"},
        {icon: Plane, label:"Open to relocation"},
    ]

    const specialisingTags = [
        {icon: Layers, label:"Problem Solving"},
        {icon: Grid, label:"Web Apps"},
    ]

    const ExperienceList = [
        {icon:visibuild, company:"ReactJs, TailwindCSS, MongoDB, NodeJs, ExpressJs, Cloudinary", role:"Paste App", present:"", duration:"2024-present"},
        {icon:cheil, company:"OpenAI GPT-4 API, MongoDB, NodeJs, ExpressJs", role:"SparkBoard", present:"", duration:""},
        {icon:bmc, company:"Frontend, Backend", role:"Developer Community App", present:"", duration:""},
        {icon:schoolofrock, company:"ReactJs, TailwindCSS, Axios", role:"MovieInfo", present:"", duration:""},
    ]

    const EducationList = [
        {icon:galgotia, company:"Galgotias College of Engineering and Technology", role:"Bachelor of Technology", present:"", duration:"2021 - 2025"},
        {icon:bethel, company:"Bethel Academy", role:"Intermediate", present:"", duration:"2020"},
        {icon:maharishi, company:"Maharishi Vidya Mandir", role:"High-School", present:"", duration:"2018"},
    ]




    return (
        <div className=' bg-[rgb(237,237,237)] p-0.5 rounded-xl '>
            <div className='h-full py-3 px-5 bg-[rgb(247,247,247)] m-3 rounded-xl '>

            {/* Intro */}
            

            {/* Top */}
            <div className='flex justify-between items-center'>
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
                    <Btn icon={PlaneTakeoff} label={"Send me an Email"}/>
                </div>
            </div>

            {/* Information */}
            <div className='p-3 mb-2'>
                <p className='my-1'>I’m a curious developer who loves turning ideas into web apps. My journey started with small coding problems and a lot of tutorials, but every project I built—whether it’s a weather app, a Trello-style board, or an image gallery—pushed me a step closer to becoming a real builder.</p>
                <p className='my-1'>Right now, I’m sharpening my frontend skills, experimenting with backend features, and trying to level up as a full-stack dev. I’m not an expert (yet), but I enjoy figuring things out, breaking stuff, and learning along the way.</p>
                <p className='my-1'>When I’m not coding, I’m probably geeking out on new tech tools, or just vibing with music.</p>
            </div>
<hr className='border-t border-gray-300 opacity-30' />

            {/* Summary: */}
            <div className='p-3 mb-2'>
                <div className='text-xl'><h1>Summary </h1></div>
                <div className='flex gap-10 mt-1'>
                    {
                        summaryTags.map((tag, index)=>{
                            return(<Btn key={index} icon={tag.icon} label={tag.label}/>)
                        })
                    }
                </div>
            </div>
            <hr className='border-t border-gray-300 opacity-30' />
            
            {/* Specialising in: */}
            <div className='p-3 mb-2'>
                <div className='text-xl'><h1>Specialising in: </h1></div>
                <div className='flex gap-10 mt-1'>
                    {
                        specialisingTags.map((tag, index)=>{
                            return(<Btn key={index} icon={tag.icon} label={tag.label}/>)
                        })
                    }
                </div>
            </div>

            <hr className='border-t border-gray-300 opacity-30' />

            {/* Experience */}
            <div className='p-3 mb-2'>
                <div className='text-xl'>
                    <h1>Project Experience</h1>
                </div>
                <div>
                    {
                        ExperienceList.map((tag, index)=>{
                            return(
                                <div key={index}>
                                <Experience  icon={tag.icon} role={tag.role} company={tag.company} present={tag.present} duration={tag.duration}/>
                                </div>
                            )
                        })
                    }
                </div>
                <a className=''>
                    <div
                    onClick={()=>{window.open('https://drive.google.com/file/d/1K1jZKSsUcyyou-2iJd_p_Xuk3WkyzGjj/view','_blank')}}
                    className='group flex justify-between items-center rounded-md ml-4 mb-2 p-1 hover:bg-[rgb(227,227,227)] cursor-pointer'>
                        <div className='flex gap-2 items-center'>
                        <FileText className="w-4 h-4"/>
                        <p>Read my entire CV</p>
                        </div>
                        <div>
                            <MoveUpRight className="w-4 h-4 rotate-0 transition-transform duration-300 group-hover:rotate-45"/>
                        </div>
                    </div>
                </a>
            </div>
            <hr className='border-t border-gray-300 opacity-30' />

            {/* Education */}
            <div className='p-3 mb-2'>
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
        </div>
    )
}

export default About
