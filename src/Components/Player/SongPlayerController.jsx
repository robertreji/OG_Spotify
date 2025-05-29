import { useContext, useEffect, useRef, useState } from "react"
import { PlayerContext } from "../../Context/PlayerContext"
import Youtube from 'react-youtube'
export default function SongPlayerController({name,id})
{
   const {isPlay,setisPlay}=useContext(PlayerContext)
 const [isReady,setIsReady]=useState(false)
 const [duration,setDuration]=useState()
 const [currentTime,setCurrentTime]=useState()
 const YiutubePlayerRef=useRef()
 const loaderRef=useRef()

 useEffect(() => {
  if (!isReady) return;  

  if(isPlay)return
  const interval = setInterval(() => {
    setCurrentTime(prev => {
      const newTime = prev + 1;
      if (loaderRef.current && duration > 0) {
        loaderRef.current.style.width = `${(newTime / duration) * 100}%`;
      }
      if(newTime>=duration){
         setisPlay(false)
         return newTime
      }
      return newTime;
    });
  }, 1000);

  return () => clearInterval(interval);
}, [isPlay, duration, isReady]);

 
  function isPlayerReady(event)
  {
   YiutubePlayerRef.current=event.target;
   event.target.setVolume(100);
   setDuration(YiutubePlayerRef.current.getDuration())
   setCurrentTime(YiutubePlayerRef.current.getCurrentTime())
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
   function formatTime(seconds) {
  const min = Math.floor(seconds / 60);
  const sec = Math.floor(seconds % 60).toString().padStart(2, '0');
  return `${min}:${sec}`;
}

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
                  <p className="text-lg">{formatTime(currentTime)}</p>
                  <div className="w-[60%] ml-5   mr-5  flex items-center rounded-4xl h-2 bg-white">
                     <div ref={loaderRef} className="bg-green-500 rounded-4xl relative h-full w-0" >
                        <div className="h-[15px] absolute -right-2 -top-[50%] rounded-full w-[15px] bg-purple-600"></div>
                     </div>
                  </div>
                  <p className="text-lg">{!isReady?"0:00":formatTime(duration)}</p>
               </div>
            </div>
    </div>
   ) 
}