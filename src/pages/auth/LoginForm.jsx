import React, {useState} from 'react';
import "../../style/Form.css"
import {login_request} from "../../actions/user";

function LoginForm() {

    const src = "localhost:8189";
    const [password,setPassword] = useState("")
    const [username,setUsername] = useState("")

    const login = () => {
        var response = login_request(username, password);
    }


    return(
        <div>
            <form action="">
                <div className={"loginForm formContainer"}>
                    <h1>Login</h1>

                    <label htmlFor="username">Username</label>
                    <input value={username} onChange={event => setUsername(event.target.value)}  type="text" placeholder="username" name="username" required/>

                    <label htmlFor="password">Password</label>
                    <input value={password} onChange={event => setPassword(event.target.value)}  type="password" hint="enter" name="password" required/>
                    <button type="button" className="loginButton" onClick={()=>login()}>
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}

export default LoginForm;