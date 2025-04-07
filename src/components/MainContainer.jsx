import React from 'react'
import SideBar from './SideBar'
import NewsContainer from './NewsContainer'

function MainContainer() {
  return (
    <div className="bg-black text-white h-screen flex flex-row w-full">
        <SideBar/>
        <NewsContainer/>
        
    </div>
  )
}

export default MainContainer