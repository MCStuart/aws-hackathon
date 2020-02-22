import React from 'react';

export default function login() {
    return (
        <div>  
            <main className="loginScreen">
                <h1>Please Login</h1>
                <div className="dataInput">
                    <div className="form-group">
                        <label htmlFor="user-email">email address</label>
                        <input type="email" className="form-control user-email" aria-describedby="emailHelp" placeholder="enter email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="user-password">password</label>
                        <input type="password" className="form-control user-password" placeholder="password" />
                    </div>
                    <button id="newUserButton" className="btn-small">click here to register if you are a new user</button>
                </div>
                <button id="login" className="btn" type="button" name="button">login</button>
            </main>
        </div>
    )
};