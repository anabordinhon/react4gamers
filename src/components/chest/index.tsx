import React from 'react';
import {TILE_SIZE, HEAD_OFFSET} from '../settings/constants';
import './index.css';
import { ChestsContext } from '../../contexts/chests';


interface IProps{
  initialPosition: {x:number, y:number}
}

const Chest = (props : IProps) =>{
  const chestsContext = React.useContext(ChestsContext);

  const shouldAnimate = chestsContext.openedChests.positions.find((position) =>{
    const match = props.initialPosition.y === position.y && props.initialPosition.x === position.x;

    return match;
  })

    return(
        <div 
        style={{
            width:TILE_SIZE,
            height:100,
            backgroundImage:"url(./assets/CHEST.png)",
            backgroundRepeat:'no-repeat', 
            //backgroundPosition: `0px -${TILE_SIZE - HEAD_OFFSET}px`,
            animation: shouldAnimate && 'chest-animation 1s steps(2) forwards',
            position:"absolute",
            top:TILE_SIZE * props.initialPosition.y, //manipulando o hero
            left:TILE_SIZE * props.initialPosition.x //manipulando o hero

        }}
        
/>
    );
}

export default Chest;