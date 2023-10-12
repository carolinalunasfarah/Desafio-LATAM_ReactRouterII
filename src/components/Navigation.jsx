import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";

import pokeIcon from "../assets/img/poke-icon.png";

const Navigation = () => {
    const activeClass = ({ isActive }) => (isActive ? "active" : undefined);

    return (
        <Navbar className="bg-body-tertiary">
            <Navbar.Brand>
                <img src={pokeIcon} alt="Pokemon icon lines" />
            </Navbar.Brand>
            <section>
                <NavLink className={activeClass} to="/">
                    Home
                </NavLink>
                <NavLink className={activeClass} to="/pokemons">
                    Pokemons
                </NavLink>
            </section>
        </Navbar>
    );
};

export default Navigation;
