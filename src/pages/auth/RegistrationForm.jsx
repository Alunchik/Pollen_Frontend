import React, {useState} from "react";
import "../../style/Form.css"
import axios from 'axios';
import {registration_request} from "../../actions/auth";

function RegistrationForm(){
    const src = "localhost:8189";
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [passwordConfirm,setPasswordConfirm] = useState("")
    const [username,setUsername] = useState("")

    const registration = () => {
        if(passwordConfirm==password){
            var response = registration_request(username, email, password);
            alert("success")
        }
        //password does not match password confirmation
        else{
            alert("passwords has to match!#$#&$^#")
        }
    }

    return(
        <div>
            <form action="src/pages/auth/RegistrationForm">
                <div class={"registrationForm formContainer"}>
                    <h1>Registration</h1>


                    <label htmlFor="username">Username</label>
                    <input value={username} onChange={event => setUsername(event.target.value)}  type="text" placeholder="username" name="username" required/>

                    <label htmlFor="email">Email</label>
                    <input  value={email} onChange={event => setEmail(event.target.value)} type="text" hint="enter" name="email" required/>

                    <label htmlFor="password">Password</label>
                    <input value={password} onChange={event => setPassword(event.target.value)} type="password" hint="enter" name="password" required/>

                    <label htmlFor="password-confirm">Confirm password</label>
                    <input value={passwordConfirm} onChange={event => setPasswordConfirm(event.target.value)} type="password" hint="enter" name="password-confirm" required/>

                      <button className="registrationButton" onClick={()=>registration()}>
                        Submit
                    </button>
                </div>

            </form>
        </div>
    );
}
export default RegistrationForm;