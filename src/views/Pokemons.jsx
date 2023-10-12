import { useContext } from "react";
import { PokemonsContext } from "../context/PokemonContext";

const Pokemons = () => {
    const { pokemons, selectedPokemons, setSelectedPokemons, setPokemons } =
        useContext(PokemonsContext);

    return (
        <div>
            <h1>Select a Pokemon</h1>
            <section>
                <select
                    value={selectedPokemons}
                    onChange={({ target }) =>
                        setSelectedPokemons(target.value)
                    }>
                    <option value="" disabled>
                        Pokemons
                    </option>
                    {pokemons.map(({ name }, i) => (
                        <option key={i} value={name}>
                            {name}
                        </option>
                    ))}
                </select>
            </section>
        </div>
    );
};

export default Pokemons;
