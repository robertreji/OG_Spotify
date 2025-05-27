
const NavSearch = () => {
  return (
     <div className='-0 bg-[#ffffff26] h-[50px] w-[55%] rounded-l-full rounded-r-full flex items-center '>
                <div className='ml-3 '>
                    <img className='w-6 cursor-pointer' src="https://cdn-icons-png.flaticon.com/128/10469/10469570.png" alt="" />
                </div>
                <div>
                    <input  className='text-white  focus:outline-0 focus:caret-white font-semibold text-lg ml-2' type="text" placeholder='what do you want to play today ?' />
                </div>
                <div className='flex  items-center gap-2'>
                     <p className='w-px h-[20px] bg-white ml-4'></p> <img  className='cursor-pointer w-8 inline ml-2' src="https://cdn-icons-png.flaticon.com/128/732/732422.png" alt="" />
                </div>
            </div>
  )
}

export default NavSearch
