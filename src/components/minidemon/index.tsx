import React from 'react';
import { TILE_SIZE, HEAD_OFFSET, EDirection } from '../settings/constants';
import './index.css';
import useEnemyMoviment from '../../hooks/useEnemyMoviment';

// const moviment ={
//   position: { x:5, y:5},
//   direction: EDirection.RIGHT,
// };

interface IProps{
  initialPosition: {x:number, y:number}
};

const Minidemon = (props : IProps) => {

  const moviment = useEnemyMoviment(props.initialPosition);

  return (
    <div
      style={{
        width: TILE_SIZE,
        height: TILE_SIZE + HEAD_OFFSET,
        backgroundImage: "url(./assets/MINI-DEMON.png)",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: `0px -${TILE_SIZE - HEAD_OFFSET}px`,
        animation: 'mini-demon-animation 1s steps(4) infinite',
        position: 'absolute',
        top: TILE_SIZE * moviment.position.y, //manipulando o hero
        left: TILE_SIZE * moviment.position.x, //manipulando o hero
        transform: `scaleX(${moviment.direction === EDirection.RIGHT ? 1 : -1})`,
        zIndex: 1
      }}

    />
  );
}

export default Minidemon;