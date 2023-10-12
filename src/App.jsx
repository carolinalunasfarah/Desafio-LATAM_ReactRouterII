import { Route, Routes } from "react-router-dom";
import "./App.css";

import Navigation from "./components/Navigation";
import Home from "./views/Home";
import Pokemons from "./views/Pokemons";

const App = () => {
    return (
        <>
            <div>
                <Navigation />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/pokemons" element={<Pokemons />} />
                </Routes>
            </div>
        </>
    );
};

export default App;
