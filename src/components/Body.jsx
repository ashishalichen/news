import React from 'react'
import SideBar from './SideBar'
import TopHeadlines from './TopHeadlines'
import Business from './Business'
import Entertainment from './Entertainment'
import Health from './Health'
import Science from './Science'
import Sports from './Sports'
import Technology from './Technology'
import { Outlet } from 'react-router-dom'

function Body() {
  return (
    <div className="bg-black text-white  flex flex-row w-full">
      <SideBar />
      <Outlet />

    </div>
  )
}

export default Body