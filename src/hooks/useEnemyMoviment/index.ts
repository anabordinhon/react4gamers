import useInterval from '@use-it/interval';
import React from 'react';
import { EDirection } from '../../components/settings/constants';
import { handleNextPosition } from '../../contexts/canvas/helpers';

function useEnemyMoviment(initialPosition) {
  const [positionState, updatePositionState] = React.useState(initialPosition);
  const [direction, updateDirectionState] = React.useState(EDirection.RIGHT);
  // const positionState = heroPositionState[0];
  // const updatePositionState = heroPositionState[1];

useInterval(function move (){
  const random = Math.floor(Math.random() * 3);
  const directionArray = Object.values(EDirection);
  const randomDirection = directionArray[random];

  const nextMoviment = handleNextPosition(randomDirection, positionState);
  
  updateDirectionState(randomDirection);
  updatePositionState(nextMoviment);
  
},2000);
  return {
    position: positionState,
    direction: direction,
  }
}

export default useEnemyMoviment;