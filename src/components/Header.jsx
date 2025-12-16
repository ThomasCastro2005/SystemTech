import React from "react";
import "../styles/header.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-toastify";

function Header() {
    const { isAuthenticated, logout } = useAuth();
    const navigate = useNavigate();
    const logOutHeader = () => {
        logout();
        toast.success("Has cerrado sesión correctamente", {
            position: "top-right",
            autoClose: 3000,
        });
        navigate('/login')
    }
    return (
        <header>
            <h3>ZEN TECH</h3>
            <nav>
                <ul>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/catalogo">Servicios</Link></li>
                    {isAuthenticated
                        ?
                        <li>
                            <button
                                onClick={logOutHeader}
                                style={{ color: "red", background: "none", border: "none", cursor: "pointer", fontWeight:"500", fontSize:"1rem" }}
                            >
                                Cerrar sesión
                            </button>
                        </li>
                        : (<li><Link to="/login">Login</Link></li>)
                    }

                </ul>
            </nav>
        </header>
    );
}

export default Header;
