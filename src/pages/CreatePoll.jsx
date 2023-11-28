import React, {useState} from 'react';

import {post_poll} from "../actions/poll";
import {useCookies} from "react-cookie";

function Answer(name){
    return
    <div>
        <div class="answer">
            {name}
        </div>
    </div>
}



function CreatePoll() {
    const [answerList,setAnswerListEmail] = useState([])
    const [answer,setAnswer] = useState("")
    const [pollName,setPollName] = useState("")
    const [cookie,setCookie] = useCookies("")



    function addAnswer(){
        setAnswerListEmail([...answerList, answer])
        setAnswer("");
        document.getElementById('answerInput').innerText='';
    }


    function AnswerContainer(){
        const answers = answerList.map((answer)=>(
            <li>{answer}</li>
        ));
        return(
            <div class={"answerContainer"}>
                <ul>{answers}</ul>
            </div>

        )
    }

    function createPoll(){
        var poll = {
            "pollTopic": pollName,
            "question":{
                "questionText":pollName,
                "answers":
                       answerList.map((val)=>{ return {"answerText":val}})
            }
        }
     var response = post_poll(poll, cookie.token)
        alert("success")
    }

    return(
        <div>
            <form action="">
                <div className={"pollForm formContainer"}>
                    <h1>Create poll</h1>

                    <label htmlFor="pollName">Poll name</label>
                    <input val={pollName} onChange={event => setPollName(event.target.value)}  type="text" placeholder="pollName" name="username" required/>

                    <div>
                        <AnswerContainer></AnswerContainer>
                    </div>

                    <label htmlFor="answerName">Answer name</label>
                    <input val={answer} onChange={event => setAnswer(event.target.value)} type="text" placeholder="answerName" id="answerInput" name="answerName" required/>

                    <button type="button" onClick={addAnswer}>Add answer</button>
                    <button type="button" onClick={createPoll}>Create</button>

                </div>
            </form>
        </div>
    );
}

export default CreatePoll;