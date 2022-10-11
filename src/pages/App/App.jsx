import './App.css';
import {useState} from 'react';
// Import the following components
import AuthPage from '../AuthPage/AuthPage';
import Workshop from '../Workshop/Workshop';
import Homepage from '../HomePage/Homepage';
import Prototypes from '../Prototype.jsx/Prototypes';
import {Routes, Route, Navigate} from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import {getUser} from '../../utilities/users-service';

function App() {

    // set the user by calling getUser function
    const [user, setUser] = useState(getUser());

    return (
        < main className="App">
            {user ?
                <>
                    <NavBar user={user} setUser={setUser}/>
                    <Routes>
                        <Route path="/workshop" element={<Workshop/>}/>
                        <Route path="/prototypes" element={<Prototypes/>}/>
                        <Route path="/home" element={<Homepage/>}/>
                         {/* redirect to /home if path in address bar hasn't matched a <Route> above */}
                        <Route path="/*" element={<Navigate to="/home" />} />
                    </Routes>
                </>
                :
                <AuthPage setUser={setUser}/>}
        </main>
    );
}

export default App;