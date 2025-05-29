import { useContext } from "react"
import { PlayerContext } from "../../Context/PlayerContext"

export default function SongItem({img,name,desc,id})
{
    const {onClickSong,setisPlay}=useContext(PlayerContext)
    return(
        <div onClick={()=>{
            setisPlay(true)
            onClickSong(id)}} className="cursor-pointer hover:bg-[#ffffff14] 
                            ml-3 hover:scale-[101%] delay-100 
                            p-4 flex flex-col gap-2  rounded-2xl
                             min-w-[200px] min-h-[260px] max-w-[250px]
                              max-h-[250px]">
            <div className="w-[100%] overflow-hidden rounded-2xl bg-amber-800 h-[95%]">
                <img className="shadow-black scale-[150%]   shadow-2xl rounded-2xl h-full w-full object-cover object-center" 
                src={img} alt="image" />
            </div>
            <b className="font-black text-white">{name}</b>
            <p className="font-light text-gray-100">{desc}</p>
        </div>
    )
}