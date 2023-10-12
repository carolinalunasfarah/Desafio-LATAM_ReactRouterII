import { Route, Routes } from "react-router-dom";
import "./App.css";

import Navigation from "./components/Navigation";
import Home from "./views/Home";
import Pokemons from "./views/Pokemons";
import PokemonDetails from "./views/PokemonDetails";

const App = () => {
    return (
        <>
            <div>
                <Navigation />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/pokemons" element={<Pokemons />} />
                    <Route
                        path="/pokemons/:name"
                        element={<PokemonDetails />}
                    />
                </Routes>
            </div>
        </>
    );
};

export default App;
