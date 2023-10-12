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
            <section>
                <Card>
                    <Card.Img src={src} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {stats?.map((stat, i) => (
                                <li key={i}>
                                    {stat.name}: {stat.base}
                                </li>
                            ))}
                        </Card.Text>
                        <Card.Text>{types}</Card.Text>
                    </Card.Body>
                </Card>
                <button onClick={handleClick}>Back to selection</button>
            </section>
        </>
    );
};

export default PokemonCard;
