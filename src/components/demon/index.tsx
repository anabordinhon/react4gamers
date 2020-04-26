import React from 'react';
import { TILE_SIZE, DEMON_TILE_SIZE, EDirection } from '../settings/constants';
import './index.css';
import useEnemyMoviment from '../../hooks/useEnemyMoviment';

interface IProps{
  initialPosition: {x:number, y:number}
}

const Demon = (props : IProps) => {
  const moviment = useEnemyMoviment(props.initialPosition);


  return (
    <div
      style={{
        width: DEMON_TILE_SIZE,
        height: DEMON_TILE_SIZE,
        backgroundImage: "url(./assets/DEMON.png)",
        backgroundRepeat: 'no-repeat',
        animation: 'demon-animation 1s steps(4) infinite',
        position: "absolute",
        top: TILE_SIZE * moviment.position.y, //manipulando o hero
        left: TILE_SIZE * moviment.position.x, //manipulando o hero
        transform: `scaleX(${moviment.direction === EDirection.RIGHT ? 1 : -1})`,
        zIndex: 1
      }}

    />
  );
}

export default Demon;