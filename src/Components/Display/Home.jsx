import Artists from "../Cards/Artists";
import SongItem from "../Cards/SongItem";

export default function Home(){
    return (
        <div className="bg-gradient-to-b from-[#ffffff26] to-[#ffffff8]  overflow-auto  flex flex-col mr-2 pt-8 rounded-md w-[75%] h-[95%] gap-8 ">
            <div className="h-[50%] ">
                <b className="font-bold ml-8 text-white text-4xl">Trending Song's</b>
                <div className="overflow-x-auto scrollbar-hide mt-4">
                    <div className="grid grid-flow-col auto-cols-[minmax(150px,_1fr)] gap-4 w-max">
                        <SongItem />
                        <SongItem />
                        <SongItem />
                        <SongItem />
                        <SongItem />
                        <SongItem />
                        <SongItem />
                        <SongItem />
                        <SongItem />
                        <SongItem />
                    </div>
                </div>
            </div>

              <div className="h-[50%] ">
                <b className="font-bold ml-8 text-white text-3xl">Popular Artists's</b>
                <div className="overflow-x-auto scrollbar-hide mt-4">
                    <div className="grid grid-flow-col auto-cols-[minmax(150px,_1fr)] gap-4 w-max">
                       <Artists/>
                        <Artists/> <Artists/> <Artists/> <Artists/> <Artists/> <Artists/> <Artists/> <Artists/>
                         <Artists/> <Artists/> <Artists/> <Artists/>
                          <Artists/> <Artists/>
                    </div>
                </div>
            </div>

            <div className="h-[50%]">
                <b className="font-bold ml-8 text-white text-3xl">Popular Albums's and Singles </b>
                <div className="overflow-x-auto scrollbar-hide mt-4">
                    <div className="grid grid-flow-col auto-cols-[minmax(150px,_1fr)] gap-4 w-max">
                        <SongItem />
                        <SongItem />
                        <SongItem />
                        <SongItem />
                        <SongItem />
                        <SongItem />
                        <SongItem />
                        <SongItem />
                        <SongItem />
                        <SongItem />
                    </div>
                </div>
            </div>

        </div>
    );
}
