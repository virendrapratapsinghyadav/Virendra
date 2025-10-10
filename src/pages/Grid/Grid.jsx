import React from 'react'
import LeftSide from '../../components/Sidebar/LeftSide'
import HeroSection from '../../components/HeroSection/HeroSection'
import ContactCard from '../../components/ContactCard/ContactCard'
import BlogPreview from '../../components/BlogPreview/BlogPreview'
import MyStack from '../../components/StackIcons/MyStack'
import Card1 from '../../components/ProjectCard/Card1.JSX'
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
    <div className="grid grid-cols-4 grid-rows-[250px_150px_200px_250px_230px]  gap-4 p-4 ">
      
      <div className="col-span-2 row-span-2 shadow-2xl border border-amber-50 rounded-2xl px-5 py-7">
        <HeroSection />
      </div>

      <div className="col-span-1 row-span-1 shadow-2xl border border-amber-50 rounded-2xl p-0 cursor-pointer">
        <Gallery />
      </div>

      <div className="col-span-1 row-span-1 shadow-2xl border border-amber-50 rounded-2xl px-5 py-7">
        <ContactCard />
      </div>

      <div className="col-span-2 row-span-1 shadow-2xl border border-amber-50 rounded-2xl px-10 py-5">
        <BlogPreview />
      </div>

      <div className="col-span-2 row-span-1 shadow-2xl border border-amber-50 rounded-2xl px-10 py-5 overflow-hidden">
        <Card1 name = {"Paste Info"} img1 ={pasteAll} img2 ={pasteHome}/>
      </div>

      <div className="col-span-1 row-span-1 shadow-2xl border border-amber-50 rounded-2xl cursor-pointer">
        <MyStack/>
      </div>

      <div className="col-span-1 row-span-2 shadow-2xl border border-amber-50 rounded-2xl px-5 py-7">
        <Leetcode/>
      </div>

      <div className="col-span-1 row-span-1 shadow-2xl border border-amber-50 rounded-2xl hover:bg-blue-400  group transition-all duration-400">
        <CurrentReading/>
      </div>

      <div className="col-span-2 row-span-1 shadow-2xl border border-amber-50 rounded-2xl px-10 py-5 overflow-hidden">
        <Card1 name = {"Movies App for entertainment"} img1 ={movie1} img2 ={movie2}/>
      </div>

      <div className="col-span-4 row-span-1 shadow-2xl border border-amber-50 rounded-2xl  py-1 pb-1 px-2">
        <DancePlayer />
      </div>

    </div>
  );
};




export default Grid