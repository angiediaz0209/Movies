import { Link } from "react-router-dom";
import "../css/NavBar.css";

function NavBar() {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link style={{color: "white", fontSize: "1.5rem", fontFamily:"monospace", textDecoration:"none"}} to="/">Movie App</Link>
            </div>
            <div className="navbar-links">
                <Link to="/" className="nav-link">HOME</Link>
                <Link to="/favorites" className="nav-link">FAVORITES</Link>
            </div>
        </nav>
    )
}

export default NavBar;