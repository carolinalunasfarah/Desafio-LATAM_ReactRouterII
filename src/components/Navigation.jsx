import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";

const Navigation = () => {
    const activeClass = ({ isActive }) => (isActive ? "active" : undefined);

    return (
        <Navbar className="bg-body-tertiary">
            <Navbar.Brand>
                {" "}
                <img
                    src="pokeapi-project/src/assets/img/poke-icon.png"
                    alt="Pokemon icon lines"
                />
            </Navbar.Brand>
            <section>
                <NavLink className={activeClass} to="/" />
                <NavLink className={activeClass} to="/pokemons">
                    Pokemons
                </NavLink>
            </section>
        </Navbar>
    );
};

export default Navigation;
