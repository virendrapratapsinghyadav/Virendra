import React from 'react'
import { Outlet } from 'react-router-dom'
import LeftSide from '../components/Sidebar/LeftSide'

const Layout = () => {
  return (
    <div>
      <div className="flex w-full min-h-screen">
        {/* LeftSide Fixed */}
        <div className="block w-[260px] h-full shrink-0">
            <LeftSide/>
        </div>

        {/* RightSide Dynamic */}
        <div className="flex-1 p-4 overflow-y-auto">
            <Outlet/>
        </div>
      </div>
    </div>
  )
}

export default Layout
