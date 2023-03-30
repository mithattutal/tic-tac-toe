import Board from "./Board";
import { useState } from "react";


export default function Game() {

    const [xIsNext, setXIsNext] = useState(true);
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const currentSquares = history[history.length - 1];

    function handlePlay(nextSquares) {
        setHistory([...history, nextSquares]);
        setXIsNext(!xIsNext);
      }

    function handleReset() {
        setHistory([Array(9).fill(null)])
        setXIsNext(true)
    }
     

    return(
        <div className="game">
            <div className="game-board">
                <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay}/>
                <button type="button" className="btn btn-warning" onClick={()=>handleReset()}>Reset</button>
            </div>
            
            
        </div>
    )
}