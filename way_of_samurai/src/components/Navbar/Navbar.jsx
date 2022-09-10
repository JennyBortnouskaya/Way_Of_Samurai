import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css'; 

function Navbar() {
    return (
        <nav className={styles.nav}>
            <NavLink to="/profile" activeClassName={styles.profileActive}>Profile</NavLink>
            <NavLink to="/dialogs" activeClassName={styles.profileActive}>Messages</NavLink>
            <NavLink to="/news" activeClassName={styles.profileActive}>News</NavLink>
            <NavLink to="/music" activeClassName={styles.profileActive}>Music</NavLink>
            <NavLink to="/users" activeClassName={styles.profileActive}>Users</NavLink>
        </nav>
    )
}

export default Navbar; 