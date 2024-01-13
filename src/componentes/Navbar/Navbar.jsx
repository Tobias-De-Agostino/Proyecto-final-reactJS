import "./Navbar.css";
import CartWidget from "./CartWidget";
import { Link, NavLink } from "react-router-dom";
import { useContext } from 'react';
import {UserContext} from "../../context/UserContext";
import Boton from "../../ejemplos/renderprops/Boton";

const links = [
    {
        label: "Inicio",
        href: "/",
    },
    {
        label: "Destacado",
        href: "/productos/Destacado",
    },
    {
        label: "Hombre",
        href: "/productos/Hombre",
    },
    {
        label: "Mujer",
        href: "/productos/Mujer",
    }
];

const Navbar = () => {
    const {user, logout} = useContext(UserContext)
    return(
        <header className="header">
            <div className="menu container">
                <a href="#" className="logo">De todo <br /> un poco</a>
                <input type="checkbox" id="menu" />
                <label htmlFor="menu">
                    &#8801
                </label>
                <nav className="navbar">
                    {links.map((link) => (
                        <NavLink
                            key={link.href}
                            to={link.href}
                            className={({ isActive }) => (
                            `uppercase font-bold ${isActive ? "text-white" : "text-black"}`
                            )}
                        >
                            {link.label}
                        </NavLink>

                    ))}

                    <CartWidget/>
                </nav>
            </div>
            {user.logged && <div class="header-content container">
                <div class="header-txt">
                    <h1>de todo un poco</h1>
                    <p>Indumentaria para todos</p>
                </div>
            </div>}
        </header>
    );
};

export default Navbar