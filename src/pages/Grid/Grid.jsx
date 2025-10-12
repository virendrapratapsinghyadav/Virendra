import React from 'react'
import LeftSide from '../../components/Sidebar/LeftSide'
import HeroSection from '../../components/HeroSection/HeroSection'
import ContactCard from '../../components/ContactCard/ContactCard'
import BlogPreview from '../../components/BlogPreview/BlogPreview'
import MyStack from '../../components/StackIcons/MyStack'
import Card1 from '../../components/ProjectCard/Card1'
import Gallery from '../../components/GalleryCard/Gallery'
import CurrentReading from '../../components/CurrentlySection/CurrentReading'
import About from '../About/About'
import Card2 from '../../components/ProjectCard/Card2'
import ProjectSection from '../ProjectSection/ProjectSection'
import DancePlayer from '../../components/Music/DancePlayer'
import Leetcode from '../../components/Leetcode/Leetcode'
import movie1 from '../../assets/images/movie1.png'
import movie2 from '../../assets/images/movie2.png'
import pasteHome from '../../assets/images/paste-home.png'
import pasteAll from '../../assets/images/allPaste.png'
import viewPaste from '../../assets/images/Viewpaste.png'

const Grid = () => {
  return (
    <div className="grid grid-cols-4 grid-rows-[600px_200px_180px_180px_120px_230px_230px_150px_] md:grid-rows-[250px_auto] lg:grid-cols-4 lg:grid-rows-[auto_auto_200px_250px_230px]  gap-4 p-4 ">
      
      <div className="col-span-4 md:col-span-4 md:row-span-2 lg:col-span-2 lg:row-span-2 shadow-2xl border border-amber-50 rounded-2xl px-5 py-7 overflow-scroll md:overflow-hidden ">
        <HeroSection />
      </div>

      <div className="hidden md:block md:col-span-2 md:h-[253px] lg:block lg:col-span-1 lg:row-span-1 shadow-2xl border border-amber-50 rounded-2xl p-0 cursor-pointer">
        <Gallery />
      </div>

      <div className="col-span-4 row-span-1 md:col-span-2 md:h-[253px] lg:col-span-1 lg:row-span-1 shadow-2xl border border-amber-50 rounded-2xl px-5 py-7">
        <ContactCard />
      </div>

      <div className="hidden md:block col-span-4 md:col-span-4  lg:col-span-2 lg:row-span-1 shadow-2xl border border-amber-50 rounded-2xl px-10 py-5">
        <BlogPreview />
      </div>

      <div className="col-span-4 md:col-span-2 lg:col-span-2 shadow-2xl border border-amber-50 rounded-2xl px-10 py-5 overflow-hidden ">
        <Card1 name = {"Paste Info"} img1 ={pasteAll} img2 ={pasteHome}/>
      </div>

      <div className=" col-span-4 md:col-span-2 lg:col-span-1 lg:row-span-1 shadow-2xl border border-amber-50 rounded-2xl cursor-pointer">
        <MyStack/>
      </div>

      <div className="col-span-4 md:col-span-2 md:row-span-1 lg:col-span-1 lg:row-span-2 shadow-2xl border border-amber-50 rounded-2xl px-5 py-7">
        <Leetcode/>
      </div>

      <div className="col-span-4 md:col-span-2 md: lg:col-span-1 lg:row-span-1 shadow-2xl border border-amber-50 rounded-2xl hover:bg-blue-400  group transition-all duration-400">
        <CurrentReading/>
      </div>

      <div className="col-span-4 h-[250px] lg:col-span-2 lg:row-span-1 shadow-2xl border border-amber-50 rounded-2xl px-10 py-5 overflow-hidden">
        <Card1 name = {"Movies App for entertainment"} img1 ={movie1} img2 ={movie2}/>
      </div>

      <div className="hidden col-span-4 lg:block lg:col-span-4 lg:row-span-1 shadow-2xl border border-amber-50 rounded-2xl  py-1 pb-1 px-2">
        <DancePlayer />
      </div>

    </div>
  );
};




export default Grid