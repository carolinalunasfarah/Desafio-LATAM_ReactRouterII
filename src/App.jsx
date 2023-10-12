import { Route, Routes } from "react-router-dom";

import "./App.css";
import Navigation from "./components/Navigation";

function App() {
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
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </>
    );
}

export default App;
