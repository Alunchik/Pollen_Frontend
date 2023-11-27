import React, {useState} from 'react';



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

    return(
        <div>
            <form action="">
                <div className={"pollForm formContainer"}>
                    <h1>Create poll</h1>

                    <label htmlFor="pollName">Poll name</label>
                    <input   type="text" placeholder="pollName" name="username" required/>

                    <div>
                        <AnswerContainer></AnswerContainer>
                    </div>

                    <label htmlFor="answerName">Answer name</label>
                    <input val={answer} onChange={event => setAnswer(event.target.value)} type="text" placeholder="answerName" id="answerInput" name="answerName" required/>

                    <button type="button" onClick={addAnswer}>Add answer</button>

                </div>
            </form>
        </div>
    );
}

export default CreatePoll;