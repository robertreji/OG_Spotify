import { StrictMode } from "react";
import {createRoot} from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { PlayerContextProvide } from "./Context/PlayerContext.jsx";
import { BrowserRouter } from "react-router-dom";
createRoot(document.getElementById("root")).render(
    <StrictMode>
        <BrowserRouter>
            <PlayerContextProvide>
                <App/>
            </PlayerContextProvide>
        </BrowserRouter>
    </StrictMode>
)