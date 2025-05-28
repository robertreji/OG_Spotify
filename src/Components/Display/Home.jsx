import Artists from "../Cards/Artists";
import SongItem from "../Cards/SongItem";
import { trendingSongList } from "../../YoutubeSongsApi";
import {  useEffect, useState } from "react";
import { artists } from "../../YoutubeSongsApi";
export default function Home(){
    
    const [trendingSongs,setTrendingSongs]=useState(null)

    useEffect( ()=>{
        async function fetchTrending() {
             const songs= await trendingSongList()
             setTrendingSongs(songs)
        }
        fetchTrending()
    },[])

    return (
        <div className="relative bg-gradient-to-b from-[#ffffff26] to-[#ffffff8]  overflow-auto  flex flex-col mr-2 pt-8 rounded-md w-[75%] h-[95%] gap-8 ">
            <div className="h-[50%] ">
                <b className="font-bold ml-8 text-white text-4xl">Trending Indian Song's</b>
                <div className="overflow-x-auto scrollbar-hide mt-4">
                    <div className="grid grid-flow-col auto-cols-[minmax(150px,_1fr)] gap-4 w-max">
                       {
                        trendingSongs
                        ?trendingSongs.map((item)=>
                            (
                                <SongItem key={item.id} id={item.id} img={item.snippet.thumbnails.standard.url} desc={item.snippet.discription} name={item.snippet.channelTitle }/>
                            ))
                        :console.log(trendingSongs)
                        }
                       
                    </div>
                </div>
            </div>

              <div className="max-h-[50%] ">
                <b className="font-bold ml-8  text-white text-3xl">Popular Artists's</b>
                <div className="overflow-x-auto scrollbar-hide mt-4">
                    <div className="grid grid-flow-col auto-cols-[minmax(150px,_1fr)] gap-4 w-max">
                       {
                       artists.map((artist)=>(
                         <Artists img={artist.imgurl} name={artist.name}/>
                       ))
                       }
                    </div>
                </div>
            </div>
        </div>
    );
}
