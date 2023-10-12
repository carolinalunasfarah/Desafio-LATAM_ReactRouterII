import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

const PokemonCard = ({ pokemon }) => {
    const { name, stats, src, types } = pokemon;
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/pokemons`);
    };

    return (
        <>
            <section className="pokemonCard">
                <Card className="card">
                    <article>
                        <Card.Img
                            className="pokemonCardImg"
                            src={src}
                            alt={name}
                        />
                    </article>
                    <article className="pokemonDetails">
                        <Card.Body>
                            <Card.Title className="text-capitalize">
                                {name}
                            </Card.Title>
                            <Card.Text>
                                {stats?.map((stat, i) => (
                                    <li key={i}>
                                        <strong className="text-capitalize">
                                            {stat.name}
                                        </strong>
                                        : {stat.base}
                                    </li>
                                ))}
                            </Card.Text>
                            <Card.Text>{types}</Card.Text>
                        </Card.Body>
                    </article>
                </Card>
            </section>
            <button className="btn btn-warning" onClick={handleClick}>
                Back to selection
            </button>
        </>
    );
};

export default PokemonCard;
