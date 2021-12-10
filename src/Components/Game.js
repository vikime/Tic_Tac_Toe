import React,{useState} from "react";
import { calculateWinner } from "../helpers";
import Board from "./Board";

const styles ={
    width : "200px",
    margin : " 20px auto",
};



const Game = () =>{

    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [stepNumber, setStepNumber] = useState(0);
    const [xIsNext, setXisNext] = useState(true);
    const winner = calculateWinner(history[stepNumber]);

    function handler(i) {
        const timeInHistory = history.slice(0,stepNumber + 1);
        const current = timeInHistory[stepNumber];
        const squares = [...current];

    
        if (winner || squares[i]) return;
        squares[i] = xIsNext ? "X" : "O";
        setHistory([...timeInHistory,squares]);
        setStepNumber(timeInHistory);
        setXisNext(!xIsNext);
    }

    const moveon = step =>{
        setStepNumber(step);
        setXisNext(step % 2=== 0)

    }

    const rendermove =() =>(
        history.map((_step,move) =>{
            const destination = move ? "go to move${move}" : "go to start";
            return(
                <li key={move}>
                    <button onClick={ () => moveon(move)}>{destination}</button>
                </li>
         
            )
        })
     

    )

    return(
        <>
           <Board   squares={history[stepNumber]} onClick={handler} />
           <div style={styles}>
               <p>{winner ? "winner" + winner : "next player: " + (xIsNext ? "X" : "O")} </p>
               {rendermove()}
           </div>
        </>
       
    )
}

export default Game;