import {Link} from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import styles from "./nav-bar.module.css";
//import bootstrap and react bootstrap elements
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NavBar({user, setUser}) {

    function handleLogOut(){
        userService.logOut();
        setUser(null);
    }

    return (
        <Navbar className={styles.nav} bg="white" fixed="top">
            <Container>
                <Navbar.Brand href="/home">Geppetto</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/workshop">Workshop</Nav.Link>
                        <Nav.Link href="/prototypes">Prototypes</Nav.Link>    
                    </Nav>
                    <Nav className="ml-auto">
                        <Nav.Link href={""} onClick={handleLogOut}>Logout</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container> 
        </Navbar>
    )
}
