import React from 'react';
import CanvasProvider from '../contexts/canvas';
import Debugger from './debugger';
import Board from './board';
import ChestsProvider from '../contexts/chests';

function Game(){
  return(
  <CanvasProvider>
    <ChestsProvider>
    {/* <Debugger /> */}
    <Board/>
    </ChestsProvider>
  </CanvasProvider>

  )
};

export default Game;