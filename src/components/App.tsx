import React from 'react';
import './App.css';
import Board from './board';
import { GAME_SIZE } from './settings/constants';

function App() {
  return (
    <div className="App">
      <div 
       style={{
          position: 'relative',
          width: GAME_SIZE,
          height: GAME_SIZE,
        }}
      >
        <Board/>
      </div>
    </div>
  );
}

export default App;
