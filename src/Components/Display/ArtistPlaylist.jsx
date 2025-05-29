import { useContext } from "react"
import { PlayerContext } from "../../Context/PlayerContext"
import SongItem from "../Cards/SongItem"

export default function  ArtistPlaylist()
{
    const {ArtistPlaylist}=useContext(PlayerContext)
    return(
        <div className="relative bg-gradient-to-b from-[#20171750] to-[#0aa2ad5d]  overflow-auto  flex flex-col mr-2 pt-8 rounded-md w-[75%] p-4  h-[95%] gap-2 ">
            <div className="w-full h-[40%]">
                <div className=" w-[30%] h-full">
                    <img src={''} alt="img" />
                    
                </div>
            </div> 
            <div className=" overflow-auto w-full h-[60%]">
                <div className="overflow-x-auto scrollbar-hide ">
                    <div className="grid grid-cols-5   justify-start  w-auto">
                       {
                        ArtistPlaylist
                        ?ArtistPlaylist.map((item)=>{
                            return <div onClick={()=>{

                            }}> 
                             <SongItem id={item.id.videoId} img={item.snippet.thumbnails.high.url} name={item.snippet.channelTitle} /> 
                            </div> 
                        }
                        )
                        :null
                        }
                       
                    </div>
            </div>
            </div>
        </div>
    )
}