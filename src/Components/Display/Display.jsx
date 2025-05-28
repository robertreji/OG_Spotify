import ArtistPlaylist from "./ArtistPlaylist";
import Home from "./Home";
import SideBar from "./SideBar";
import { Routes,Route } from "react-router-dom";
export default function Display()
{
    return(
        <div className="w-full h-[93%] gap-2 flex items-center">
            <SideBar/>
            <Routes>
                   <Route path="/" element={<Home/>}/> 
                   <Route path="/Artists/:name" element={<ArtistPlaylist/>}/>
            </Routes>
            
        </div>
    )
}