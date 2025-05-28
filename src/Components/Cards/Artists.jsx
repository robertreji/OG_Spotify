
export default function Artists({img,name})
{
    return(
        <div className="cursor-pointer hover:bg-[#ffffff14] ml-3 hover:scale-[101%] delay-100 p-4 flex flex-col gap-2  rounded-2xl min-w-[200px] min-h-[260px] max-w-[250px] max-h-[250px]">
            <div className="w-full h-[90%]">
                <img className="shadow-black  shadow-2xl rounded-[100%] h-full w-full   object-center object-cover " 
                src={img} alt="image" />
            </div>
            <b className="font-black text-white">{name}</b>
        </div>
    )
}