import React from 'react';

function PollList() {
    return(
        <div>
            <form action="">
                <div className={"loginForm formContainer"}>
                    <h1>Login</h1>


                    <label htmlFor="username">Username</label>
                    <input   type="text" placeholder="username" name="username" required/>

                    <label htmlFor="password">Password</label>
                    <input  type="password" hint="enter" name="password" required/>

                </div>
            </form>
        </div>
    );
}

export default PollList;