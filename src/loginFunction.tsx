import React, { useState, useEffect } from 'react';
import LoginForm from './loginWindow';
import './loginFunctionCSS.css';
export function loginFunction() {
}

export default function LoginButton(): JSX.Element {
    const [showLoginWindow, setShowLoginWindow] = useState<boolean>(false);
    const [loggedInUser, setLoggedInUser] = useState<string | null>(localStorage.getItem('users'));

    useEffect(() => {
        setLoggedInUser(localStorage.getItem('userName'));
    }, []);

    const onLoginButtonClick = (): void => {
        setShowLoginWindow(true);
    };

    const makeLogin = (username: string): void => {
        setLoggedInUser(username);
        setShowLoginWindow(false);
    };

    const makeLogout = (): void => {
        localStorage.removeItem('userName');
        localStorage.removeItem('users');
        setLoggedInUser(null);
    };

    return (
        <div>
            {loggedInUser ? (
                    <div>
                        <button className="login-button" onClick={makeLogout}>
                    Logout
                    </button>
                    <p className={"loggedUserName"}> Logat ca  <b> {loggedInUser} </b> </p>
    </div>
) : (
        <button className="login-button" onClick={onLoginButtonClick}>
        Login
        </button>
)}

    {showLoginWindow && (
        <div className="modal">
        <div className="modal-content">
        <LoginForm onClose={() => setShowLoginWindow(false)} onLogin={() => makeLogin} />
    </div>
    </div>
    )}
    </div>
);
}
