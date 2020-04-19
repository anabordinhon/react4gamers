import React from 'react';
import {TILE_SIZE, HEAD_OFFSET} from '../settings/constants';
import './index.css';

const Trap = () =>{
    return(
        <div 
        style={{
            width:TILE_SIZE,
            height:100,
            backgroundImage:"url(./assets/TRAP.png)",
            backgroundRepeat:'no-repeat', 
            //backgroundPosition: `0px -${TILE_SIZE - HEAD_OFFSET}px`,
            animation:'trap-animation 1s steps(8) infinite',
            position:"absolute",
            bottom:TILE_SIZE * 8, //manipulando o hero
            left:TILE_SIZE *9 //manipulando o hero

        }}
        
/>
    );
}

export default Trap;