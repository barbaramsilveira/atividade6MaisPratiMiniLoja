
import { Link } from "react-router-dom";
import styles from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <Link to="/global">CSS Global</Link>
            <Link to="/modules">CSS Modules</Link>
            <Link to="/tailwind">Tailwind</Link>
            <Link to="/styled">Styled Components</Link>
        </nav>
    );
};
export default Navbar;