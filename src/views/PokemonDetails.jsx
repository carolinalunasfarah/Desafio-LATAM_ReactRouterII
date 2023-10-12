import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";

const PokemonDetails = () => {
    const {name} = useParams();
    const [pokemons, setPokemons] = useState();

    const urlPoke = "https://pokeapi.co/api/v2/pokemon";

    const getPokemon = async (name) => {
        try {
            const response = await axios.get(`${urlPoke}/${name}`);
            if (!response.status) {
                throw new Error ("Data not found")
            }
            setData(response.data.results);

            const src = data.sprites.other.dream_world.front_default;
            const stats = data.stats.map ((stat) => ({
                name: stat.stat.name,
                base: stat.base_stat,
            }));
            const type = data.types.map(({type}) => type.name).join(" ");
            setPokemons({name, stats, src, type})
        } catch (error) {
            console.log(error.message);
        }
    };

    useEffect(() => {
        getPokemon(name); 
    }, [name]);


  return (
    <div>PokemonDetails</div>
  )
}

export default PokemonDetails