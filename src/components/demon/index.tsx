import React from 'react';
import {TILE_SIZE, DEMON_TILE_SIZE} from '../settings/constants';
import './index.css';

const Demon = () =>{
    return(
        <div 
        style={{
            width:DEMON_TILE_SIZE,
            height:DEMON_TILE_SIZE,
            backgroundImage:"url(./assets/DEMON.png)",
            backgroundRepeat:'no-repeat', 
            animation:'demon-animation 1s steps(4) infinite',
            position:"absolute",
            bottom:TILE_SIZE * 5, //manipulando o hero
            left:TILE_SIZE *5 //manipulando o hero

        }}
        
/>
    );
}

export default Demon;