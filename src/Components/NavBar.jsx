import React from 'react'
import NavSearch from './NavSearch'

export default function  NavBar() {
  return (
    <div className='flex h-[7%]  justify-between'>

        <div className='flex  w-[50%] h-full justify-start items-center gap-4 ml-4 mt-2'>
           
            <div>
                <img className='w-10 cursor-pointer' src="https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Primary_Logo_RGB_Green.png" alt="" />
            </div>

            <div className='bg-[#ffffff26] rounded-full w-[50px] h-[50px] ml-3 flex justify-center '>
                <img className='w-9 m-auto cursor-pointer' src="https://cdn-icons-png.flaticon.com/128/14035/14035684.png" alt="" />
            </div>

           <NavSearch/>

        </div>

        <div className='flex justify-end items-center mt-2 mr-4 w-[50%] h-full'>import React from 'react'
          <p  className='text-black h-[30px] bg-white font-bold w-[150px] flex justify-center items-center mr-6 rounded-2xl'>Premium</p>  <div className='bg-green-600 rounded-full h-10 w-10 text-white font-bold text-lg flex justify-center items-center'>
                R
            </div>
        </div>

    </div>
  )
}
