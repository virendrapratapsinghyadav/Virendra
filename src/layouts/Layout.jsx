import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import LeftSide from "../components/Sidebar/LeftSide";
import Hamburger from "../components/Sidebar/Hamburger";
import Grid from "../pages/Grid/Grid";



const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  const handleClick =()=>{
    navigate('/')
  }

  const renderSidebar = () => (
    <div className="w-[260px] h-screen shrink-0 sticky top-0">
      <LeftSide />
    </div>
  );

  const renderHamburger = ()=> (
    <div className="">
      <Hamburger closeMenu ={()=> setIsOpen(false)} />
    </div>
  )

  const renderContent = () => (
    <div className="flex-1 overflow-y-auto p-5 pr-20">
      <Outlet />
    </div>
  );

  return (
    <div className="flex flex-col w-full min-h-screen bg-[rgb(247,247,247)]">

      {/* Mobile Layout */}
      <div className="block lg:hidden">
        {!isOpen ? (
          <div>
            {/* Header with hamburger icon */}
            <div className="flex items-center justify-between mt-2 mx-5 mb-3">
              <div onClick={handleClick} className="cursor-pointer " >
                <h1 className="text-2xl font-bold">Virendra</h1>
                <p className="text-gray-600 text-xl">Software Developer</p>
              </div>
              <div className="text-4xl cursor-pointer">
                <GiHamburgerMenu  onClick={() => setIsOpen(true)} />
              </div>
            </div>

            {/* Main content */}
            <div className="flex-1 overflow-y-auto p-5">
              <Outlet />
            </div>
          </div>
        ) : (
          <div className="flex justify-between">
            {renderHamburger()}
            <div className=" mx-5 mt-6 h-fit border-2 bg-amber-300 rounded-3xl  border-red-500 text-4xl cursor-pointer">
              <IoClose onClick={() => setIsOpen(false)} />
            </div>
          </div>
        )}
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:flex w-full min-h-screen">
        {renderSidebar()}
        {renderContent()}
      </div>

    </div>
  );
};

export default Layout;
