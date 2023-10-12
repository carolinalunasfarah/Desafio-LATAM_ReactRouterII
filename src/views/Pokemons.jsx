import { useContext, useState } from "react";
import { PokemonsContext } from "../context/PokemonsContext";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Pokemons = () => {
    const { pokemons, setPokemons, selectedPokemon, setSelectedPokemon } =
        useContext(PokemonsContext);
    const navigate = useNavigate();

    const goToDetails = async () => {
        selectedPokemon
            ? navigate(`/pokemons/${selectedPokemon}`)
            : Swal.fire("You must select a Pokemon");
    };

    return (
        <div className="pokemons">
            <h1>Select a Pokemon</h1>
            <section>
                <select
                    className="pokemonsSelect"
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
                <article>
                    <button className="btn btn-secondary" onClick={goToDetails}>
                        View Details
                    </button>
                </article>
            </section>
        </div>
    );
};

export default Pokemons;
