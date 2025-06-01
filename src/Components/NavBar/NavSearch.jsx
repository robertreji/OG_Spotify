import { useContext } from "react"
import { PlayerContext } from "../../Context/PlayerContext"

const NavSearch = () => {
    const {searchref,setSearchData}=useContext(PlayerContext)

    function onSearch()
    {
        const data=searchref.current.value
        setSearchData(data)
        console.log(data)
    }

  return (
     <div className='  bg-[#ffffff26] w-[99%] h-[90%] lg:h-[50px] lg:w-[55%] rounded-l-full rounded-r-full flex items-center '>
                <div className=''>
                    <img className='lg:w-5 w-9 ml-2 lg:ml-3  cursor-pointer' src="https://cdn-icons-png.flaticon.com/128/10469/10469570.png" alt="" />
                </div>
                <div>
                    <input onChange={onSearch} ref={searchref}  className='text-white w-[100%] lg:w-[90%] focus:outline-0 focus:caret-white font-semibold text-md lg:text-lg ml-2' type="text" placeholder='search song..' />
                </div>
                <div className='lg:flex hidden  items-center gap-2'>
                     <p className='w-px h-[20px] bg-white ml-4'></p> <img  className='cursor-pointer w-8 inline ml-2' src="https://cdn-icons-png.flaticon.com/128/732/732422.png" alt="" />
                </div>
            </div>
  )
}

export default NavSearch
