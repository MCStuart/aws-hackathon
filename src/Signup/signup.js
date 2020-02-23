import React from 'react';

export default function signup() {
    return (
        <div>
            <main className="registerScreen">
                <h1>Signup</h1>
                <div className="dataInput">
                    <div className="form-group">
                        <label htmlFor="user-email">email address</label>
                        <input type="email" className="form-control" id="user-email" aria-describedby="emailHelp" placeholder="enter email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="user-password">password</label>
                        <input type="password" className="form-control" id="user-password" placeholder="password" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="user-password">confirm password</label>
                        <input type="password" className="form-control" id="user-password-confirm" placeholder="confirm password" />
                    </div>
                </div>
                <button id="registerNewUser" className="btn btn-success" type="button" name="button">register</button>
            </main>
        </div>
    )
}