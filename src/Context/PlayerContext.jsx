import {createContext,useState } from "react";


export const PlayerContext=createContext();

export const PlayerContextProvide=({children})=>{
    const [isPlaySong,setisPlaySong]=useState(false)
    const [SongId,setSongId]=useState()

    function onClickSong(id)
    {
        setisPlaySong(true)
        console.log("clicked "+ " "+ isPlaySong)
        setSongId(id)
    }

    const ContextValue={
        isPlaySong,onClickSong,setisPlaySong,
        SongId
    }
   return(
    <PlayerContext.Provider value={ContextValue}>
        {children}
    </PlayerContext.Provider>
   )
}