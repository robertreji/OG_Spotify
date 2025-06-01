import React, { useContext } from 'react'
import NavSearch from './NavSearch'
import { useNavigate } from 'react-router-dom'
import { PlayerContext } from '../../Context/PlayerContext'

export default function  NavBar() {
  const navigate=useNavigate()
  const {setSearchData}=useContext(PlayerContext)
  function handleCLick()
    {
        navigate("/")
        setSearchData("")
    }
  return (
    <div className='flex  w-full  h-[7%]  justify-between'>

        <div className='flex w-[90%] lg:w-[50%] h-full justify-start items-center gap-4 ml-1 lg:ml-4 mt-2'>
           
            <div>
                <img className='w-8 lg:w-10 cursor-pointer' src="https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Primary_Logo_RGB_Green.png" alt="" />
            </div>

            <div onClick={handleCLick} className='lg:bg-[#ffffff26] rounded-full lg:w-[50px] lg:h-[30px] w-[50px] h-[50px] lg:ml-3 flex justify-center '>
                <img className='w-12 lg:w-9 m-auto cursor-pointer' src="https://cdn-icons-png.flaticon.com/128/14035/14035684.png" alt="" />
            </div>

           <NavSearch/>
        </div>

        <div className='flex justify-end items-center mt-2 mr-4 w-[50%] h-full'>
          <p  className='text-black hidden  h-[30px] bg-white font-bold w-[150px] lg:flex justify-center items-center mr-6 rounded-2xl'>Premium</p>  <div className='bg-green-600 rounded-full h-10 w-10 text-white font-bold text-lg flex justify-center items-center'>
                R
            </div>
        </div>

    </div>
  )
}
