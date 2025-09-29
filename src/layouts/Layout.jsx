import React from "react";
import { Outlet } from "react-router-dom";
import LeftSide from "../components/Sidebar/LeftSide";

const Layout = () => {
  return (
      <div className="flex w-full min-h-screen bg-[rgb(247,247,247)] ">
        {/* LeftSide Fixed */}
        <div className=" w-[260px] h-full shrink-0 sticky top-0">
          <LeftSide />
        </div>

        {/* Main content */}
        <div className="flex-1 overflow-y-auto p-5 pr-20">
          <Outlet />
        </div>
      </div>
  );
};

export default Layout;
