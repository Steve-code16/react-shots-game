import React, { useState } from 'react';
import { GiGlassShot } from 'react-icons/gi';
import generateBoard from '../utils/generateBoard';
import BoardOptions from './BoardOptions';

const updateBoardStyles = (value) => {
    if (value === 16) {
        return "grid-cols-4";
    } else if (value === 9) {
        return "grid-cols-3";
    }
    return "grid-cols-4";
};

export default function Board({ setPhuzaTime }) {
    const gridType = parseInt(localStorage.getItem("boardType")) || 16;
    const [board, setBoard] = useState(generateBoard(gridType));
    const [boardStyle, setBoardStyle] = useState(updateBoardStyles(gridType));

    const handleSelect = (index) => {
        if (board[index] === 0) {
            const updatedBoard = [...board];
            updatedBoard[index] = -1;
            setBoard(updatedBoard);
        } else {
            setPhuzaTime(true);
        }

    };

    const boardType = (value) => {
        setBoard(generateBoard(value));
        setBoardStyle(updateBoardStyles(value));
        localStorage.setItem("boardType", value.toString());
    };

    return (
        <>
            <BoardOptions boardType={boardType} gridType={gridType} />
            <div className={`${boardStyle} grid gap-2 p-5`}>
                {board.map((value, index) => {
                    return (
                        <div className='w-full h-36 grid place-content-center' key={index} onClick={() => handleSelect(index)}>
                            {value >= 0 && <GiGlassShot className='text-6xl text-purple-500' />}
                        </div>
                    );
                })}
            </div>
        </>
    );
}
