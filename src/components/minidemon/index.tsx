import React from 'react';
import {TILE_SIZE, HEAD_OFFSET} from '../settings/constants';
import './index.css';

const Minidemon = () =>{
    return(
        <div 
        style={{
            width:TILE_SIZE,
            height:TILE_SIZE + HEAD_OFFSET,
            backgroundImage:"url(./assets/MINI-DEMON.png)",
            backgroundRepeat:'no-repeat',
            backgroundPosition: `0px -${TILE_SIZE - HEAD_OFFSET}px`, 
            animation:'mini-demon-animation 1s steps(4) infinite',
            position:'absolute',
            bottom:TILE_SIZE * 10, //manipulando o hero
            left:TILE_SIZE *3 //manipulando o hero

        }}
        
/>
    );
}

export default Minidemon;