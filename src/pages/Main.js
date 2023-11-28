import React from 'react';
import { CookiesProvider, useCookies } from "react-cookie";

import {get_all_polls_request} from "../actions/poll";

function Main() {
    const [cookie, setCookie] = useCookies(["token"]);

    function AllPollNames(){
       let data = get_all_polls_request()
        data.then(alert(data.pollTopic))
    }

    return(
        <div>
            <form action="">
                <div className={"loginForm formContainer"}>
                    <h1>Login</h1>
                    <div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Main;