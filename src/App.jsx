import NavBar from "./Components/NavBar/NavBar.jsx"
import Display from './Components/Display/Display.jsx'
import { useContext } from "react"
import { PlayerContext } from "./Context/PlayerContext.jsx"
import SongPlayer from "./Components/Player/SongPlayer.jsx"

const App = () => {
  
  const {isPlaySong}=useContext(PlayerContext)
  return (
    <div className='relative h-screen w-screen overflow-hidden bg-black caret-transparent'>
     <NavBar/>
     <Display/>
     {
      isPlaySong?<SongPlayer/>:console.log("waiting to be tru .....")
     }
    </div>
  )
}
export default App
