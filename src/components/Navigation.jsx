import { NavLink, useNavigate } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";

import pokeIcon from "../assets/img/poke-icon.png";

const Navigation = () => {
    const activeClass = ({ isActive }) => (isActive ? "active" : "inactive");
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/`);
    };

    return (
        <Navbar className="navigation">
            <section>
                <Navbar.Brand className="navBrand" onClick={handleClick}>
                    <img
                        className="navIcon"
                        src={pokeIcon}
                        alt="Pokemon icon lines"
                    />
                </Navbar.Brand>
            </section>
            <section className="navLinks">
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
