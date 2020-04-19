import useEventListener from '@use-it/event-listener';
import React from 'react';
import {TILE_SIZE, HEAD_OFFSET} from '../settings/constants';
import './index.css';

const initialPosition = {
    x:8,
    y:3
}

const Hero = () =>{
    const [positionState, updatePositionState] = React.useState(initialPosition);
    const [direction, updateDirectionState] = React.useState('RIGHT');
    // const positionState = heroPositionState[0];
    // const updatePositionState = heroPositionState[1];
   
     useEventListener('keydown', (event:any) =>{
         if(event.key ==='ArrowLeft'){
             const newPosition ={
                 x:positionState.x -1,
                 y:positionState.y,
             };
             updatePositionState(newPosition);
             updateDirectionState('LEFT');
         }else if (event.key ==='ArrowRight'){
             updatePositionState({x:positionState.x + 1, y:positionState.y});
             updateDirectionState('RIGHT');
         }else if (event.key ==='ArrowDown'){
            updatePositionState({x:positionState.x,y:positionState.y - 1});
         }else if (event.key ==='ArrowUp'){ 
             updatePositionState({x:positionState.x ,y:positionState.y + 1});
         }
     })

    // setTimeout(() =>{
    //     const newPosition = {x: 14 , y: 15};
    //     updatePositionState(newPosition);
    // },2000)

    return(
        <div 
        style={{
            width:TILE_SIZE,
            height:TILE_SIZE + HEAD_OFFSET,
            backgroundImage:"url(./assets/HERO.png)",
            backgroundRepeat:'no-repeat', 
            backgroundPosition: `0px -${TILE_SIZE - HEAD_OFFSET}px`,
            animation:'hero-animation 1s steps(4) infinite',
            position:"absolute",
            bottom:TILE_SIZE * positionState.y, //manipulando o hero
            left:TILE_SIZE *positionState.x, //manipulando o hero
            transform: `scaleX(${direction === 'RIGHT' ? 1 : -1})`
        }}
        
/>
    );
}

export default Hero;