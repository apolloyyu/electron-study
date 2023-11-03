import React from 'react';
import { Home } from './pages/Home';
import { Game } from './pages/game/Game';

interface AppProps {}

export const App: React.FC<AppProps> = props => {
    return (
        <>
            <Home />
            <Game />
        </>
    );
};
