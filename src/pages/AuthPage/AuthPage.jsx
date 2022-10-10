import {useState} from "react";
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';

export default function AuthPage({setUser}) {
    const [showSignUp, setShowSignUp] = useState(false);
    return (
        <main>
            <h1>Geppetto</h1>
            {showSignUp ?
                <SignUpForm setUser={setUser}/>
                :
                <LoginForm setUser={setUser}/>
            }
            <button onClick={() => setShowSignUp(!showSignUp)}>{showSignUp ? 'Go to log in' : 'Go to sign up'}</button>
            
        </main>
    );
}