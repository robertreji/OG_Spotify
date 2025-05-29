import { useContext, useEffect, useRef, useState } from "react"
import { PlayerContext } from "../../Context/PlayerContext"
import Youtube from 'react-youtube'
export default function SongPlayerController({name,id})
{
   const {isPlay,setisPlay}=useContext(PlayerContext)
 const [isReady,setIsReady]=useState(false)
 const YiutubePlayerRef=useRef()

  function isPlayerReady(event)
  {
   YiutubePlayerRef.current=event.target;
   event.target.setVolume(100);
  }
  function playSong()
  {
      YiutubePlayerRef.current.playVideo();
  }
  function pauseSong()
  {
   YiutubePlayerRef.current.pauseVideo()
  }
   useEffect(()=>{

      function YoutubePlay()
         {
            setIsReady(true)
         }
         YoutubePlay()
   })
   return(
    <div className=" flex flex-col items-center justify-center h-full">
      {isReady
      ? <Youtube className=" hidden" 
            videoId={id}
            onReady={isPlayerReady}
            opts={{
               height:0,
               width:0,
               playerVars:{
                  autoplay:0,
                  controls:0
               }
            }}/>:null
            }
            <div className="h-1/4 flex justify-center items-center w-full">
                  <b className="font-bold text-2xl">{name}</b>
            </div>
            <div className="h-3/4 flex flex-col items-center justify-center w-[100%]">
               <div className="w-[100%] gap-6 flex justify-center items-center h-[100px]">
                     
                     <img className="w-10" src="https://cdn-icons-png.flaticon.com/128/15732/15732441.png" alt="" />
                     {
                     isPlay
                     ?<img onClick={()=>{
                       
                         playSong()
                        setisPlay(prev=>!prev)}} className="w-10" src="https://cdn-icons-png.flaticon.com/128/10860/10860787.png"  alt="" />
                     :<img onClick={()=>{
                        pauseSong()
                        setisPlay(prev=>!prev)}}  className="w-10" src="https://cdn-icons-png.flaticon.com/128/8374/8374917.png"  alt="" />
}
                     <img className="w-12" src="https://cdn-icons-png.flaticon.com/128/7191/7191571.png" alt="" />
               </div>
               <div className="w-full flex justify-center items-center">
                  <p className="text-lg">0:00</p>
                  <div className="w-[60%] ml-5  mr-5   rounded-2xl h-2 bg-white">
                     <div className="bg-green-500 rounded-2xl h-full w-[50%]" />
                  </div>
                  <p className="text-lg">0:00</p>
               </div>
            </div>
    </div>
   ) 
}