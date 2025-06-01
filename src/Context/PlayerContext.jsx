import {createContext,useRef,useState } from "react";


export const PlayerContext=createContext();

export const PlayerContextProvide=({children})=>{
    const [isPlaySong,setisPlaySong]=useState(false)
    const [SongId,setSongId]=useState()
    const [isPlay,setisPlay]=useState(false)
    const [ArtistPlaylist,setArtistPlaylist]=useState()
    const [searchData,setSearchData]=useState()
    const searchref=useRef()
    var ArtistName;
    function onClickSong(id)
    {
        setisPlaySong(true)
        console.log("clicked "+ " "+ isPlaySong)
        setSongId(id)
    }
        
    const ContextValue={
        isPlaySong,onClickSong,setisPlaySong,
        SongId,
        isPlay,setisPlay,
        ArtistPlaylist,setArtistPlaylist,
        ArtistName,
        searchData,searchref,setSearchData
       
    }
   return(
    <PlayerContext.Provider value={ContextValue}>
        {children}
    </PlayerContext.Provider>
   )
}