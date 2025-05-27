import NavBar from "./Components/NavBar/NavBar.jsx"
import Display from './Components/Display/Display.jsx'

const App = () => {
  return (
    <div className='h-screen w-screen overflow-hidden bg-black caret-transparent'>
     <NavBar/>
     <Display/>
    </div>
  )
}
export default App
