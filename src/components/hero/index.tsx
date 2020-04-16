import React from 'react';
import {TILE_SIZE} from '../settings/constants';
import './index.css';

const Hero = () =>{
    return(
        <div 
        style={{
            width:TILE_SIZE,
            height:100,
            backgroundImage:"url(./assets/HERO.png)",
            backgroundRepeat:'no-repeat', 
            animation:'hero-animation 1s steps(4) infinite',
            position:"absolute",
            bottom:0, //manipulando o hero
            left:0 //manipulando o hero
        }}
        
/>
    );
}

export default Hero;