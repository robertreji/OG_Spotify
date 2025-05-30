import { useContext, useEffect, useState } from "react"
import { PlayerContext } from "../../Context/PlayerContext"
import { searchSongs } from "../../YoutubeSongsApi"
import SongItem from "../Cards/SongItem"


export default function SearchSong()
{
    const {searchData}=useContext(PlayerContext)
    const [searchRelatedSongs,setsearchRelatedSongs]=useState()
    useEffect( ()=>{
        
       async function get(){
        const res=await searchSongs(searchData)
        setsearchRelatedSongs(res)
        }
        get()
            
    },[searchData])

    return(
          <div className=" overflow-auto w-full  h-[90%]">
                <div className="overflow-x-auto scrollbar-hide ">
                    <div className="flex relative flex-col gap-2   justify-start  w-auto">
                          <div className="grid px-8 grid-cols-[90px_1fr_1fr_100px] mt-10 mb-4 pl-2 text-[#a7a7a7] ">
                                        <p>
                                            <b  className="ml-4">#</b> 
                                        </p>
                                        <p>Song </p>
                                        <p>Listeners</p>
                                        <p>duration
                                            <img className="w-4 ml-2 m-auto inline" src={"https://cdn-icons-png.flaticon.com/128/833/833643.png"} alt="" />

                                        </p>
                                    </div>
                       {
                         
                      
                        searchRelatedSongs
                        ?searchRelatedSongs.map((item,index)=> 
                            {
                            
                            return <div  className="hover:cursor-pointer grid grid-cols-[90px_1fr_1fr_90px]  items-center hover:bg-[#ffffff10]">
                                <b className="font-semibold font-serif text-2xl text-white flex pl-6">{index+1}</b>
                                <SongItem imgClassWrapper={"overflow-hidden rounded-xl bg-amber-800 h-[95%] w-[10%]"}
                                imgClass={" flex shadow-black scale-[120%]    shadow-xl rounded-2xl h-full w-[100%] object-cover object-center"} 
                                classNames={"flex gap-2   w-full items-center justify-start"} 
                                id={item.id.videoId} 
                                img={item.snippet.thumbnails.high.url} 
                                name={item.snippet.channelTitle} />
                                </div> 
                            })
                           
                        :null
                    } 
                       
                    </div>
            </div>
            </div>
    )
}