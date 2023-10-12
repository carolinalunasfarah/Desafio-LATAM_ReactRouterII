import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PokemonCard from "../components/PokemonCard";

const PokemonDetails = () => {
    const { name } = useParams();
    const [pokemon, setPokemon] = useState({});

    const urlPoke = "https://pokeapi.co/api/v2/pokemon";

    const getPokemon = async (name) => {
        try {
            const response = await fetch(`${urlPoke}/${name}`);
            if (!response.ok) {
                throw new Error("Data not found");
            }

            const data = await response.json();
            const src = data.sprites.other.dream_world.front_default;
            const stats = data.stats.map((stat) => ({
                name: stat.stat.name,
                base: stat.base_stat,
            }));
            const type = data.types.map(({ type }) => type.name).join(" ");
            setPokemon({ name, stats, src, type });
        } catch (error) {
            console.log(error.message);
        }
    };

    useEffect(() => {
        getPokemon(name);
    }, [name]);

    return <PokemonCard pokemon={pokemon} />;
};

export default PokemonDetails;
