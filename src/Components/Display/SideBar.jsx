
export default function SideBar()
{
    return(
        <div className="h-[95%] hidden  relative lg:flex flex-col gap-10 p-2 w-[25%] pt-4 rounded-lg ml-3 bg-[#121212]">
            <div className="flex items-center  justify-between text-white font-semibold">
                <p className="ml-6 text-2xl ">Your library </p>
                <img className="rounded-full w-8 mr-6 cursor-pointer" src="https://cdn-icons-png.flaticon.com/128/4315/4315609.png" alt="" />
            </div>
            <div className="bg-[#ffffff10] rounded-md text-white flex  flex-col p-6 gap-1">
                <b className="text-xl">Create your First Playlist</b>
                <p className="font-light ">It's easy we will help you</p>
                <button className="bg-white mt-4 cursor-pointer rounded-xl text-black font-bold w-[200px]">Create Playlist</button>
            </div>
           
            <div className="flex cursor-pointer gap-4 items-center absolute bottom-[20px] left-2  border-2  border-y-green-600 w-[100px] p-1 rounded-lg">
                <img className="w-4 inline" src="https://cdn-icons-png.flaticon.com/128/14188/14188696.png" alt="" />
                <p className="inline text-white text-sm font-semibold  ">English</p>
            </div>
        </div>
    )
}