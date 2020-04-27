import React from 'react';
import Hero from '../hero';
import { GAME_SIZE } from '../settings/constants';
import Minidemon from '../minidemon';
import Demon from '../demon';
import Chest from '../chest';
import Trap from '../trap';
import { canvas, ECanvas } from '../../contexts/canvas/helpers';
import { isElementOfType } from 'react-dom/test-utils';
import { ChestsContext } from '../../contexts/chests';

function getCanvasMap(){
  const array = [];

  for (let y = 0; y < canvas.length; y++){
    const canvasY = canvas[y];
    
    for(let x = 0; x < canvasY.length; x++){
      const canvasYX = canvasY[x];

      const position = {x: x, y:y};
      const text = canvas[y][x] || canvasYX;
      const key = `${x}-${y}`;

      if(text === ECanvas.TRAP){
        array.push(<Trap key={key} initialPosition={position}/>);
      }
      if(text === ECanvas.MINI_DEMON){
        array.push(<Minidemon key={key} initialPosition={position}/>);
      }
      if(text === ECanvas.DEMON){
        array.push(<Demon key={key} initialPosition={position}/>);
      }
      if(text === ECanvas.CHEST){
        array.push(<Chest key={key} initialPosition={position}/>);
      }
       if(text === ECanvas.HERO){
        array.push(<Hero key={key} initialPosition={position}/>);
      }
    }
  }
  return array;
}

const elements = getCanvasMap();
const Board = () =>{
  const chestsContext = React.useContext(ChestsContext);

  function renderOpenedDoor(){
    return(
      <img src ="./assets/DOOR-OPEN.png" alt="" style={{
        position: "absolute",
        left:578,
        top: 0
      }}/>
    )
  }

    return(
        <div>
            {elements}
            {chestsContext.totalChests === chestsContext.openedChests.total &&(
               renderOpenedDoor()
            )}  

        <img src="./assets/tileset.gif" alt="" width={GAME_SIZE} height={GAME_SIZE}/>
        </div>
    );
}

export default Board;