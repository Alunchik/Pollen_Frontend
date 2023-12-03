import React from 'react';
import "../style/Poll.css"
import {vote_at_poll_request} from "../actions/poll";
import {useCookies} from "react-cookie";

function Answer(answer, question){
    return <li class="answerElem">
        <div class="answerText">
            {answer.answerText}
        </div>
        <div>{answer.selected}</div>
        <input type="radio" name={question} id={answer.id} value={answer.id}/>
    </li>
}





function Poll(poll, token) {

    var question=poll.question.questionText
    var answers=poll.question.answers

    function vote(e){

        e.preventDefault()
        // event.target — это HTML-элемент form
        let formData = new FormData(e.target);

        // Собираем данные формы в объект
        let obj = {};
        formData.forEach((value, key) => obj[key] = value);
        console.log(obj)
        console.log(obj[question])
        console.log(token)
       vote_at_poll_request(token, obj[question])
    }


       // var question=poll.pollTopic

    return(
        <div class="pollContainer">
            <form onSubmit={vote} class=" formContainer">

                <h1 class="pollName">{question}</h1>
                <div class="answerList">
                    <ul>
                        {answers.map(ans=>Answer(ans, question))}
                    </ul>
            </div>
                <button class="voteButton">Vote</button>

            </form>
        </div>
    );
}

export default Poll;