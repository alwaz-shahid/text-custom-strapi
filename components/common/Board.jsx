import React from 'react'
import Sqaure from './Sqaure'

const Board = ({ squares, onClick }) => {
    return (
        <div className="w-72 h-72 border-2 m-auto">
            {squares?.map((square, i) => {
                return <Sqaure onClick={() => onClick(i)} key={i} value={square} />
            })}
        </div>
    )
}

export default Board
