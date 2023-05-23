import React, { useState } from 'react';
import './loginWindowCSS.css';

interface LoginWindowProps {
    onClose: () => void;
    onLogin: () => void
}

function LoginWindow({ onClose }: LoginWindowProps) {
    const [userName, setUserName] = useState('');
    const [passwd, setPasswd] = useState('');

    const changeUserName = (event: React.ChangeEvent<HTMLInputElement>) => {setUserName(event.target.value);};

    const changePasswd = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPasswd(event.target.value);
    };

    const submitAction = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (passwd.trim() === '') {
            alert('Trebuie sa completați acest camp');
            return;
        }

        const validUsername = 'Dima2000';
        const validPassword = 'DimaBMW';

        if (userName === validUsername && passwd === validPassword) {
            localStorage.setItem('userName', userName);
            alert('Te-ai conectat cu succes');
            onClose();

            const usersInApp = JSON.parse(localStorage.getItem('users') || '[]');
            const newUser = { userName, passwd };
            usersInApp.push(newUser);
            localStorage.setItem('users', JSON.stringify(usersInApp));
//localStorage.setItem('username', userName);
        } else {
            alert('Ati introdus o parola sau un nume de utilizator gresit');
        }
    };

    return (
        <div className="login-form-overlay">
            <div className="login-form-container">
                <form onSubmit={submitAction}>
                    <h2>Introduceți numele de utilizator și parola</h2>
                    <div>
                        <label htmlFor="username" className={"userNam"}>  Numele de utilizator:  </label>
                        <input type="text" id="username" value={userName} onChange={changeUserName} />
                    </div>
                    <div>
                        <label htmlFor="password" className={"passwd"}>Parola:</label>
                        <input type="password" id="password" value={passwd} onChange={changePasswd} />
                    </div>
                    <div className="button-container">
                        <button type="submit">Login</button>
                        <button type="button" onClick={onClose}>
                            Close
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginWindow;