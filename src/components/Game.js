import Win from './Win';
import classes from './Project.module.css';
import { useState } from "react";

const Game = () =>{
    //const [num1, setNum1] = useState(1);
    //const [num2, setNum2] = useState(2);
    

    //A better method of declaring mutiple states and even other states to monitor states of variable. 
  const [state, setState] = useState({
    num1 : 1,
    num2 : 2,
    response: '',
    score : 0,
    correct : true
    
  });
  
const SubmitHandler = () =>{
    if(!state.response ){
        alert("Please enter your answer")
        return
    }
    const answer = parseInt(state.response)
    if(state.num1 + state.num2 === answer){
        //user got the question right
        
        setState({
            ...state,
            num1 : Math.ceil(Math.random() * 10) + 1,
            num2: Math.ceil(Math.random() * 10) + 1,
            response: '',
            correct: true,
            score : state.score +1 
        }); 
    }else
    {
        //User got the question wrong
        setState({
            ...state,
            num1 : Math.ceil(Math.random() * 10) + 1,
            num2: Math.ceil(Math.random() * 10) + 1,
            response: '',
            correct: false,
            score: state.score - 1
        })        
    }
}

//On submitting the input by pressing 'Enter key'
const onPressEnterKey = (event) =>{
    if(event.key === 'Enter'){

        if(!state.response ){
            alert("Please enter your answer") //Stops submitting when input value is empty
            return
        }

        const answer = parseInt(state.response) //Converts string input value to int
        if(state.num1 + state.num2 === answer){ //Checks whether response is equal to question
            //user got the question right
            
            setState({
                ...state, //add existing state variables
                num1 : Math.ceil(Math.random() * 10) + 1, //Generates random number to update question
                num2: Math.ceil(Math.random() * 10) + 1, //Generates random number to update question
                correct: true, //confirms that user got the answer.
                response: '', //Set input value upon submission to empty 
                score : state.score +1  //Increase the score by 1
            }); 
        }else
        {
            //User got the question wrong
            setState({
                ...state,
                num1 : Math.ceil(Math.random() * 10) + 1,
                num2: Math.ceil(Math.random() * 10) + 1,
                correct: false,
                response: '',
                score: state.score - 1
            })        
        }
    }
      
}

//Determines the winner
if(state.score === 10){
    return(
        <div>
        <Win />
        </div>
    ); 
}  

//Obtain the value of the input field.
//Update the state
const updateResponse = (event) =>{
    setState({
    ...state,
    response: event.target.value
})

}
    return(
        <div className={classes.Game}>

            <h2 className={classes.title}>Game</h2>
            

            <h3 className={state.correct ? "correct" : 'incorrect'}> Question: {state.num1 } + {state.num2} </h3>

            <input className={classes.input} type="text" autoFocus ={true} value={state.response} 
            onKeyDown={onPressEnterKey} onChange={updateResponse} placeholder='Enter Answer' /> <p></p>

            <h3 className={classes.title}>Score: {state.score}  </h3>

            <button className={classes.btn} onClick={SubmitHandler}>Check Answer</button>
            
        </div>

    );
}

export default Game;

const incorrectanswer = {
    color: 'red',
}