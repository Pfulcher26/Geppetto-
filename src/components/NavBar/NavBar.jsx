import {Link} from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({user, setUser}) {

    function handleLogOut(){
        userService.logOut();
        setUser(null);
    }

    return (
        <nav>
            <Link to="/workshop">Workshop</Link>
            &nbsp; | &nbsp;
            <Link to="/prototypes">Prototypes</Link>
            &nbsp; | &nbsp;
            <span>Welcome, {user.name}</span>
            &nbsp;&nbsp; <Link to={""} onClick={handleLogOut}>Logout</Link>
        </nav>
    )
}
