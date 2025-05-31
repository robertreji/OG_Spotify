import { useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../src/firebase_config.js";  // adjust path
import NavBar from "./Components/NavBar/NavBar.jsx";
import Display from './Components/Display/Display.jsx';
import SongPlayer from "./Components/Player/SongPlayer.jsx";
import { PlayerContext } from "./Context/PlayerContext.jsx";
import SignupLogin from "../src/Authentication/SighnUpLogin.jsx";  // Your login/signup form component

const App = () => {
  const { isPlaySong } = useContext(PlayerContext);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  // If no user, show signup/login form instead of main app UI
  if (!user) {
    return <SignupLogin />;
  }

  return (
    <div className='relative h-screen w-screen overflow-hidden bg-black caret-transparent'>
      <NavBar />
      <Display />
      {isPlaySong ? <SongPlayer /> : console.log("waiting to be true .....")}
    </div>
  );
};

export default App;
