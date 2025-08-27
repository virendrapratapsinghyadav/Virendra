import React from 'react'
import LeftSide from '../../components/Sidebar/LeftSide'
import HeroSection from '../../components/HeroSection/HeroSection'
import ContactCard from '../../components/ContactCard/ContactCard'
import BlogPreview from '../../components/BlogPreview/BlogPreview'
import MyStack from '../../components/StackIcons/MyStack'
import Card1 from '../../components/ProjectCard/Card1.JSX'
import Gallery from '../../components/GalleryCard/Gallery'
import About from '../About/About'

const Home = () => {
  return (
    <div className=' flex gap-3 w-full overflow-x-hidden'>

      {/* LEFTSIDE */}
      <div className=" block w-[260px] h-full shrink-0">
        <LeftSide />
      </div>

      {/* RIGHT SIDE
      <div className='flex  flex-wrap h-fit gap-4 w-full'>
        <div className=' shadow-2xl h-fit border-amber-50 rounded-2xl px-5 py-7 m-2 -translate-0.5 w-[510px] '>
          <HeroSection />
        </div>
        <div>
          <div className='h-fit flex'>
            
            <div className='shadow-2xl border-amber-50 rounded-2xl  m-2 -translate-0.5 cursor-pointer'>
              <Gallery />
            </div>
            <div className='shadow-2xl  h-[206px]  border-amber-50 rounded-2xl px-10 py-5 m-2 -translate-0.5'>
              <ContactCard />
            </div>

          </div>
          <div className='shadow-2xl h-[180px] w-  border-amber-50 rounded-2xl px-10 py-5 m-2 -translate-0.5'>
            <BlogPreview />
          </div>
        </div>

        <div className='shadow-2xl w-xs  h-fit border-amber-50 rounded-2xl px-10 pt-5 pb-1 m-2 -translate-0.5'>
          <Card1 />
        </div>
        <div className=' h-[206px]'>
          <MyStack />
        </div>
      </div> */}

      {/* <About/> */}

    </div>
  )
}

export default Home 