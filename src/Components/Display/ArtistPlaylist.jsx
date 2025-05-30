import { useContext, useEffect, useState } from "react"
import { PlayerContext } from "../../Context/PlayerContext"
import SongItem from "../Cards/SongItem"
import { useNavigate, useParams } from "react-router-dom"
import { artists ,getSongById} from "../../YoutubeSongsApi"
import  iso8601Duration from 'iso8601-duration'
export default function  ArtistPlaylist()
{
    const {artist}=useParams()
    const ArtistimgUrl=artists.find((item)=>item.name===artist)
    const {ArtistPlaylist}=useContext(PlayerContext)
    const [allduratrion,setallDuration]=useState()
    const navigate=useNavigate()
   async function getDuration()
    {
        if(!ArtistPlaylist)return
       
             const durations = await Promise.all(
                                ArtistPlaylist.map(async (item) => {
                                const res = await getSongById(item.id.videoId);
                                return res;
        })
      );
      setallDuration(durations)
    }
     
    useEffect(()=>
    {
        getDuration()
        
    },[ArtistPlaylist])
    
    return(
        <div className="relative bg-gradient-to-b from-[#ffffff26] to-[#ffffff8]   overflow-auto  flex flex-col mr-2 pt-8 rounded-md w-[75%] p-4  h-[95%]">
             <img onClick={()=>navigate(-1)} className="w-8 cursor-pointer" src="https://cdn-icons-png.flaticon.com/128/189/189254.png" alt="" />
             <div className={`mt-6 mb-4 text-white flex gap-8 flex-col md:flex-row md:items-end`}
                        >
                            <img className="w-48 rounded" src={ArtistimgUrl.imgurl} alt="" />
                            <div className="flex flex-col">
                                <p>Play List</p>
                                <h1 className="text-5xl font-bold  mb-4">{ArtistimgUrl.name}</h1>
                                <p className="mt-1">
                                    <div>
                                        <img className=" inline-block w-5" src="https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Primary_Logo_RGB_Green.png" alt="" />
                                        <b className="ml-3">Spotify    </b>
                                        13,22239 likes
                                        <b className="ml-4 mr-2">25 songs</b>
                                        About 2 hors 30 min
                                    </div>
                                </p>
                            </div>
                        </div>
            <hr className="w-full bg-white h-[2px]" />
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
                        ArtistPlaylist
                        ?ArtistPlaylist.map((item,index)=>
                            
                            {
                                const sec="00"
                            return <div  className="hover:cursor-pointer grid grid-cols-[90px_1fr_1fr_90px]  items-center hover:bg-[#ffffff10]">
                                <b className="font-semibold font-serif text-2xl text-white flex pl-6">{index+1}</b>
                                <SongItem imgClassWrapper={"overflow-hidden rounded-xl bg-amber-800 h-[95%] w-[10%]"}
                                imgClass={" flex shadow-black scale-[120%]    shadow-xl rounded-2xl h-full w-[100%] object-cover object-center"} 
                                classNames={"flex gap-2   w-full items-center justify-start"} 
                                id={item.id.videoId} 
                                img={item.snippet.thumbnails.high.url} 
                                name={item.snippet.channelTitle} />
                                <b className="text-white font-sans font-light text-md">{allduratrion?allduratrion[index].statistics.viewCount:0}</b>
                                <b className="text-md text-white">{allduratrion?iso8601Duration.parse(allduratrion[index].contentDetails.duration).minutes:0} : {allduratrion?iso8601Duration.parse(allduratrion[index].contentDetails.duration).seconds:`${sec}`}</b>
                                </div> 
                            })
                           
                        :null
                    }
                       
                    </div>
            </div>
            </div>
        </div>
    )
}