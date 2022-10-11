import {useState} from "react";
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';
import styles from './auth.module.css'

export default function AuthPage({setUser}) {
    const [showSignUp, setShowSignUp] = useState(false);
    return (
        <main className={styles.main}>
            <div className={styles.heading}><h1>Geppetto</h1></div>
            <img className={styles.image} src="/images/login.jpg" />
            {showSignUp ?
                <SignUpForm setUser={setUser}/>
                :
                <LoginForm setUser={setUser}/>
            }
            <button className={styles.button} onClick={() => setShowSignUp(!showSignUp)}>{showSignUp ? 'Go to log in' : 'Go to sign up'}</button>
            
        </main>
    );
}