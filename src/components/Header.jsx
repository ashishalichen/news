import React from 'react'

function Header() {
    return (
        <div className='flex flex-row justify-between px-10 h-16 top-0'>
            <h1 className='text-5xl font-bold  text-red-500 font-stretch-200% p-2 w-1/4'>SWEN</h1>

            <div className='flex flex-row items-center w-3/4 mx-30 justify-center'>
                <input
                    type='text'
                    placeholder='What do you want to know today?'
                    className='bg-neutral-800 text-white h-10 w-1/2 px-4 p-2  rounded-l-4xl'

                />
                <button className='bg-red-500 text-white h-10 px-4 p-2 rounded-r-4xl'> Search</button>
            </div>

        </div>


    )
}

export default Header