import {Link} from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import styles from "./nav-bar.module.css";

export default function NavBar({user, setUser}) {

    function handleLogOut(){
        userService.logOut();
        setUser(null);
    }

    return (
        <nav className={styles.nav}>
            <Link to="/prototypes">Prototypes</Link>
            &nbsp; &nbsp; &nbsp; &nbsp;
            <Link to="/workshop">Workshop</Link>
            &nbsp; &nbsp; &nbsp; &nbsp;
            <Link to="/home">home</Link>
            &nbsp; &nbsp; &nbsp; &nbsp;
            <span className={styles.user}>Welcome, {user.name}</span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; <Link to={""} onClick={handleLogOut}>Logout</Link>
        </nav>
    )
}
