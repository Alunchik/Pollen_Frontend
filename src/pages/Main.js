import React, {useEffect, useState} from 'react';
import {useCookies } from "react-cookie";

import {get_all_polls_request} from "../actions/poll";
import Poll from "./Poll";

function Main() {
    const [cookie, setCookie] = useCookies(['']);

    const [polls, setPolls] = useState([]);

    useEffect(()=>{
        get_all_polls_request(cookie.token).then((res)=>{
            setPolls(res)
        })
    }, [])



     function RenderPolls(){
         return <div>

         </div>
     }

    return(
        <div>
                <div className={"loginForm formContainer"}>
                    <div>
                        {polls.map((poll)=>(
                            Poll(poll, cookie.token)
                        ))}
                    </div>
                </div>
        </div>
    );
}

export default Main;