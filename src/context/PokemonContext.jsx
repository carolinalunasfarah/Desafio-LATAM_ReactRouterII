import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const PokemonsContext = createContext();

const url = "https://pokeapi.co/api/v2/pokemon?offset=0&limit={150}";

const PokemonsProvider = ({ children }) => {
    const [pokemons, setPokemons] = useState([]);
    const [selectedPokemons, setSelectedPokemons] = useState("");
    const navigate = useNavigate();

    const getPokemons = async () => {
        try {
            const response = await axios.get(url);
            if (!response.status) {
                throw new Error("Data not found");
            }
            setPokemons(response);
        } catch (error) {
            console.log(error.message);
        }
    };

    const pokemonDetails = async () => {
        selectedPokemons
            ? navigate(`/pokemons/${selectedPokemons}`)
            : alert("Select a pokemon");
    };

    useEffect(() => {
        getPokemons();
    }, []);

    return (
        <PokemonsContext.Provider
            value={{
                pokemons,
                setPokemons,
                selectedPokemons,
                setSelectedPokemons,
            }}>
            {children}
        </PokemonsContext.Provider>
    );
};

export default PokemonsProvider;
