import React from 'react'
import SideBar from './SideBar'
import TopHeadlines from './TopHeadlines'
import Business from './Business'
import Entertainment from './Entertainment'
import Health from './Health'
import Science from './Science'
import Sports from './Sports'
import Technology from './Technology'

function MainContainer() {
  return (
    <div className="bg-black text-white  flex flex-row w-full">
      <SideBar />
      {/* <TopHeadlines /> */}
      {/* <Business /> */}
      {/* <Entertainment /> */}
      {/* <Health /> */}
      {/* <Science /> */}
      {/* <Sports /> */}
      <Technology />

    </div>
  )
}

export default MainContainer