import { useContext, useState } from "react";
import { PokemonsContext } from "../context/PokemonsContext";
import { useNavigate } from "react-router-dom";

const Pokemons = () => {
    const { pokemons, setPokemons, selectedPokemon, setSelectedPokemon } =
        useContext(PokemonsContext);
    const navigate = useNavigate();

    const goToDetails = async () => {
        selectedPokemon
            ? navigate(`/pokemons/${selectedPokemon}`)
            : alert("You must select a pokemon");
    };

    return (
        <div>
            <h1>Select a Pokemon</h1>
            <section>
                <select
                    value={selectedPokemon}
                    onChange={({ target }) => setSelectedPokemon(target.value)}>
                    <option value="" disabled>
                        Pokemons
                    </option>
                    {pokemons.map(({ name }, i) => (
                        <option key={i} value={name}>
                            {name}
                        </option>
                    ))}
                </select>
                <button onClick={goToDetails}>View Details</button>
            </section>
        </div>
    );
};

export default Pokemons;
