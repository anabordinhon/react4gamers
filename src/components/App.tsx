import React from 'react';
import './App.css';
import Board from './board';
import { GAME_SIZE } from './settings/constants';
import Debugger from './debugger';
import CanvasProvider from '../contexts/canvas';
import Game from './game';

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
        <Game/>
      </div>
    </div>
  );
}

export default App;
