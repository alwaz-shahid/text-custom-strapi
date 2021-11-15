import React, { useState } from 'react'
import { calculateWinner } from '../lib/getWinner'

const Game = () => {
    const [history, setHistory] = useState([Array(9).fill(null)])   // history of the game
    const [stepNumber, setStepNumber] = useState(0)                  // current step of the game
    const [xIsNext, setXIsNext] = useState(true)                     // who's turn is it?
    const [winner, setWinner] = useState(null)                       // who won?
    const winner = calculateWinner(history[stepNumber])              // calculate the winner
    const x0 = xIsNext ? "X" : "O"
    const handleClick = (i) => {
        const historyPoint = history.slice(0, stepNumber + 1)
        const current = historyPoint[historyPoint?.length - 1]
        const squares = [...current]
        if (winner || squares[i]) return;
        squares[i] = x0
        setHistory([...historyPoint, squares])
    }

    return (
        <div>

        </div>
    )
}

export default Game
