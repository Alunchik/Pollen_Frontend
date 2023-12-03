import React from 'react';
import "../style/Poll.css"

function Answer(answer, question){
    return <li class="answerElem">
        <label htmlFor={answer.id}>{answer.answerText}</label>
        <input type="radio" name={question} id={answer.id} value={answer.id}/>
        <p>{answer.selected}</p>
    </li>
}


function Poll(poll) {
       // var question=poll.pollTopic
        var question=poll.question.questionText
       var answers=poll.question.answers
    return(
        <div>
            <div class="poll">
                <h1 class="pollName">{question}</h1>
                <div>
                <div>
                    <ul>
                        {answers.map(ans=>Answer(ans, question))}
                    </ul>
                </div>
            </div>
                <button class="voteButton">Vote</button>
            </div>
        </div>
    );
}

export default Poll;