import useInterval from '@use-it/interval';
import React from 'react';
import { EDirection, EWalker } from '../../components/settings/constants';
import { CanvasContext } from '../../contexts/canvas';

function useEnemyMoviment(initialPosition) {
  const canvasContext = React.useContext(CanvasContext);
  const [positionState, updatePositionState] = React.useState(initialPosition);
  const [direction, updateDirectionState] = React.useState(EDirection.RIGHT);
  // const positionState = heroPositionState[0];
  // const updatePositionState = heroPositionState[1];

  useInterval(function move (){
    const random = Math.floor(Math.random() * 3);
    const directionArray = Object.values(EDirection);
    const randomDirection = directionArray[random];

    const moviment = canvasContext.updateCanvas(randomDirection, positionState, EWalker.ENEMY);

     if(moviment.nextMove.valid){
     updateDirectionState(randomDirection);
     updatePositionState(moviment.nextPosition);
     }
     if(moviment.nextMove.dead){
       alert('GAME OVER!!! X.X');
       window.location.reload();
     }

  },2000);
  return {
    position: positionState,
    direction: direction,
  }
}

export default useEnemyMoviment;