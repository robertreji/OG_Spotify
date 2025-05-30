import { useContext, useEffect, useState } from "react";
import { getSongById } from "../../YoutubeSongsApi";
import { PlayerContext } from "../../Context/PlayerContext";
import SongPlayerController from "./SongPlayerController";

export default function SongPlayer()
{
    const {SongId,setisPlay}=useContext(PlayerContext)
    const [songImage,setSongImage]=useState()
    const {setisPlaySong}=useContext(PlayerContext)
    const [songName,setSongName]=useState();

    useEffect(()=>{
        async function getSong() {
           const img= await getSongById(`${SongId}`);
           setSongName(img.snippet.title)
           console.log(songImage)
           setSongImage(img.snippet.thumbnails.standard.url)
          
        }
        
        getSong()
    },[])
 function home()
 {
    setisPlaySong(false)
    setisPlay(true)
 }
    return(
        <div className="absolute z-10   bg-black/90 inset-0 flex items-center justify-center">
            <div className="p-[3px] scale-box flex justify-center items-center w-[60%] h-[50%] bg-gradient-to-r from-green-400 to-blue-400 rounded-2xl">
                <div  className="flex  rounded-2xl opacity-100 bg-gradient-to-br from-40% w-[100%] h-[100%]   from-[#3b5228]  via-black to-[#136a79]  text-white text-6xl">
                    <div className="flex flex-col w-1/2 h-full">
                        <div className="w-[10%] h-[20%] mt-2 rounded-full">
                            <img onClick={home} className="w-8 cursor-pointer" src="https://cdn-icons-png.flaticon.com/128/189/189254.png" alt="" />
                        </div>
                        <div className="flex  pl-4 w-[97%] h-[100%] ">
                            <div  className=" bg-green-700 rounded-2xl W-[90%] max-w-[90%] min-h-[70%] max-h-[80%] overflow-hidden">
                                <img className="w-full h-full scale-[140%] object-center" src={songImage}  />
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2 h-auto">
                        <SongPlayerController name={songName} id={SongId}/>
                    </div>
                </div>
            </div>
        </div>
    )
}