import React from 'react';
import Tile from './Tile';
import { canvas } from '../../contexts/canvas/helpers';

function getCanvasMap(){
  const tilesArray = [];

  for (let y = 0; y < canvas.length; y++){
    const canvasY = canvas[y];
    
    for(let x = 0; x < canvasY.length; x++){
      const canvasYX = canvasY[x];

      const position = {x: x, y:y};
      const text = canvas[y][x] || canvasYX;
      const key = `${x}-${y}`;

      tilesArray.push(<Tile key={key} position = {position} text={text} />)

    }
  }
  return tilesArray;
}


function Debugger() {
  const tiles = getCanvasMap();
  return (
    <div>
        {tiles}
    </div>
  );
}

export default Debugger;