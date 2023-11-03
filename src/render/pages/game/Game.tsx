import React from 'react';
import { Board } from './Board';
import './game.css';

interface GameProps {}

export const Game: React.FC<GameProps> = props => {
    return (
        <>
            <Board />
        </>
    );
};
