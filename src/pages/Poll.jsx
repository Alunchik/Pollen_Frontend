import React from 'react';
import "../style/Poll.css"

function Answer(name, question){
    return <li class="answerElem">
        <label htmlFor={"answer_" + name}>{name}</label>
        <input type="radio" name={question} id={"answer_" + name}/>
    </li>
}


function Poll() {
        var question="who?"
        var answers=["me", "not me"]
    return(
        <div>
            <div class="poll">
                <h1 class="pollName">{question}</h1>
                <div>
                <div>
                    <ul>
                        {answers.map((elem)=>Answer(elem, question))}
                    </ul>
                </div>
            </div>
                <button class="voteButton">Vote</button>
            </div>
        </div>
    );
}

export default Poll;