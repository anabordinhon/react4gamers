import React from 'react';
import {TILE_SIZE, HEAD_OFFSET} from '../settings/constants';
import './index.css';


interface IProps{
  initialPosition: {x:number, y:number}
}

const Chest = (props : IProps) =>{
    return(
        <div 
        style={{
            width:TILE_SIZE,
            height:100,
            backgroundImage:"url(./assets/CHEST.png)",
            backgroundRepeat:'no-repeat', 
            //backgroundPosition: `0px -${TILE_SIZE - HEAD_OFFSET}px`,
            animation:'chest-animation 1s steps(3) infinite',
            position:"absolute",
            top:TILE_SIZE * props.initialPosition.y, //manipulando o hero
            left:TILE_SIZE * props.initialPosition.x //manipulando o hero

        }}
        
/>
    );
}

export default Chest;