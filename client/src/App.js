import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import PlayerMain from './views/PlayerMain';
import PlayerAdd from './views/PlayerAdd';
import GameMain from './views/GameMain';

function App() {
  return (
    <div className="row m-4">
      <div className="col">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route element={<PlayerMain />} path='players/list' default/>
            <Route element={<PlayerAdd />} path='/players/addplayer' />
            <Route element={<GameMain />} path='/status/game/:gameId'/>
          </Routes>
        </BrowserRouter>

      </div>
    </div>
  );
}

export default App;
