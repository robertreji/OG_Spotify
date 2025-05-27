import Home from "./Home";
import SideBar from "./SideBar";

export default function Display()
{
    return(
        <div className="w-full h-[93%] gap-2 flex items-center">
            <SideBar/>
            <Home/>
        </div>
    )
}