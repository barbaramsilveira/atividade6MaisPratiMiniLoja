import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav id="navbar">
            <Link to="/">CSS Global</Link>
            <Link to="/modules">CSS Modules</Link>
            <Link to="/tailwind">Tailwind</Link>
            <Link to="/styled-components">Styled Components</Link>
        </nav>
    );
}
export default Navbar;