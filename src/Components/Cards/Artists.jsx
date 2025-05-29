
import { useContext } from "react"
import { playListofArtist } from "../../YoutubeSongsApi"
import { PlayerContext } from "../../Context/PlayerContext"
import { useNavigate } from "react-router-dom"

export default function Artists({img,name})
{
    const {setArtistPlaylist}=useContext(PlayerContext)
    const navigate=useNavigate()
    async function getArtistPlaylist(name)
    {
        const list=await playListofArtist(name)
        setArtistPlaylist(list)
    }
    return(
        <div onClick={()=>{
        navigate("/Artists")
        getArtistPlaylist(name)
        }
        } className="cursor-pointer hover:bg-[#ffffff14] ml-3 hover:scale-[101%] delay-100 p-4 flex flex-col gap-2  rounded-2xl min-w-[200px] min-h-[260px] max-w-[250px] max-h-[250px]">
            <div className="w-full h-[90%]">
                <img className="shadow-black  shadow-2xl rounded-[100%] h-full w-full   object-center object-cover " 
                src={img} alt="image" />
            </div>
            <b className="font-black text-white">{name}</b>
            
        </div>
    )
}