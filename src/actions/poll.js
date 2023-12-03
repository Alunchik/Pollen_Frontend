import axios from "axios";
import {useCookies} from "react-cookie";
//import React from 'react';



export const get_all_polls_request = async (token)=> {
    try {
        const response = await axios.get("http://localhost:8189/poll", { headers: {"Authorization" : `Bearer ${token}`} });
        return(response.data)
    } catch (e) {
        alert(e)
    }
}


export const vote_at_poll_request = async (token, answerId)=> {
    try {
        const response = await axios.put("http://localhost:8189/poll/1/vote?answerId=" + answerId, { headers: {"Authorization" : `Bearer ${token}`}});
        return(response.data)
    } catch (e) {
        alert(e)
    }
}

export const post_poll = async (poll, token)=>{
    try{
        const response = await axios.post("http://localhost:8189/poll", poll, { headers: {"Authorization" : `Bearer ${token}`} })
        return response.data
    } catch (e){
        alert(e)
    }
}