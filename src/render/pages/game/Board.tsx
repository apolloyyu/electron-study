import React, { useState } from 'react';

interface SquareProps {
    value?: 'X' | 'O';
    onClick?: () => void;
}

export const Square: React.FC<SquareProps> = ({ value, onClick }) => {
    return <button className="square" onClick={onClick}>{value}</button>;
};

export const Board: React.FC = props => {
    const [state, setState] = useState<Record<number, 'X' | 'O' | undefined>>({});
    const [winFlag, setWinFlag] = useState<'X' | 'O' | undefined>();
    return <>
        <div className="board-row">
            <Square value={state[0]} onClick={() => handleClick(0)} />{winFlag && `${winFlag}赢得了比赛！`}
            <Square value={state[1]} onClick={() => handleClick(1)} />
            <Square value={state[2]} onClick={() => handleClick(2)} />
        </div>
        <div className="board-row">
            <Square value={state[3]} onClick={() => handleClick(3)} />
            <Square value={state[4]} onClick={() => handleClick(4)} />
            <Square value={state[5]} onClick={() => handleClick(5)} />
        </div>
        <div className="board-row">
            <Square value={state[6]} onClick={() => handleClick(6)} />
            <Square value={state[7]} onClick={() => handleClick(7)} />
            <Square value={state[8]} onClick={() => handleClick(8)} />
        </div>
    </>;

    function handleClick (index: number) {
        if (winFlag || state[index]) {
            return;
        }
        const keys = Object.keys(state);
        const label = (keys.length % 2) === 0 ? 'X' as 'X' : 'O' as 'O';
        const newState = ({
            ...state,
            [index]: label,
        });
        setState(newState);
        // 判断是否有人获胜
        if (
            (
                // 竖着组成一条
                newState[(index + 3) % 9] === label && newState[(index + 6) % 9] === label
            )
            || (
                // 横着组成一条
                newState[Math.floor(index / 3)] === label 
                    && newState[Math.floor(index / 3) + 1] === label
                    && newState[Math.floor(index / 3) + 2] === label
            )
            || (
                // ↙斜着组成一条
                [2, 4, 6].includes(index) && newState[2] === label 
                    && newState[4] === label
                    && newState[6] === label
            )
            || (
                // ↘斜着组成一条
                [0, 4, 8].includes(index) && newState[0] === label 
                    && newState[4] === label
                    && newState[8] === label
            )
        ) {
            setWinFlag(label);
        }
    }
};
