import React from 'react'

function SideBar() {
  return (
    <div className='w-1/6 bg-neutral-900 rounded p-2 m-2 '>
      <ul>
        <li className='text-white text-lg font-bold p-2'>Categories</li>
        <li className='text-gray-400  pl-5 py-2 hover:text-white cursor-pointer font-semibold text-lg'>Business</li>
        <li className='text-gray-400 pl-5 py-2 hover:text-white cursor-pointer font-semibold text-lg'>Entertainment</li>
        <li className='text-gray-400  pl-5 py-2 hover:text-white cursor-pointer font-semibold text-lg'>Health</li>
        <li className='text-gray-400  pl-5 py-2 hover:text-white cursor-pointer font-semibold text-lg'>Science</li>
        <li className='text-gray-400  pl-5 py-2 hover:text-white cursor-pointer font-semibold text-lg'>Sports</li>
        <li className='text-gray-400  pl-5 py-2 hover:text-white cursor-pointer font-semibold text-lg'>Technology</li>
      </ul>
    </div>
  )
}

export default SideBar