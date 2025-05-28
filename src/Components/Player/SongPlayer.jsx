import { useContext, useEffect, useState } from "react";
import { getSongById } from "../../YoutubeSongsApi";
import { PlayerContext } from "../../Context/PlayerContext";
import {useNavigate} from 'react-router-dom'
import SongPlayerController from "./SongPlayerController";

export default function SongPlayer()
{
    const {SongId}=useContext(PlayerContext)
    const [songImage,setSongimage]=useState()
    const {setisPlaySong}=useContext(PlayerContext)
    const navigate=useNavigate()
    useEffect(()=>{
        async function getSong() {
           const img= await getSongById(`${SongId}`);
           setSongimage(img.thumbnails.standard.url)
        }
        
        getSong()
    },[])
 function home()
 {
    navigate("/")
    setisPlaySong(false)
 }
    return(
        <div className="absolute z-10   bg-black/90 inset-0 flex items-center justify-center">
            <div  className="flex border-[2px] border-black  flex-col pl-1 rounded-2xl opacity-100 bg-gradient-to-br from-40%   from-[#3b5228]  via-black to-[#136a79] w-[60%] h-[50%] text-white text-6xl">
                <div className="flex flex-col w-1/2 h-full">
                    <div className="w-[10%] h-[20%] mt-2 rounded-full">
                        <img onClick={home} className="w-8 cursor-pointer" src="https://cdn-icons-png.flaticon.com/128/14035/14035684.png" alt="" />
                    </div>
                    <div className="flex  pl-4 w-[97%] h-[100%] ">
                        <div className=" rounded-2xl W-[90%] max-w-[90%] min-h-[70%] max-h-[80%] overflow-hidden">
                        <img className="w-full h-full scale-[140%] object-center" src={songImage}  />
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}