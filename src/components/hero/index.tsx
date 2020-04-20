import React from 'react';
import { TILE_SIZE, HEAD_OFFSET, EDirection } from '../settings/constants';
import './index.css';
import useHeroMoviment from '../../hooks/useHeroMoviment';

const initialPosition = {
  x: 8,
  y: 3
}

const Hero = () => {

  const { position, direction } = useHeroMoviment(initialPosition);

  return (
    <div
      style={{
        width: TILE_SIZE,
        height: TILE_SIZE + HEAD_OFFSET,
        backgroundImage: "url(./assets/HERO.png)",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: `0px -${TILE_SIZE - HEAD_OFFSET}px`,
        animation: 'hero-animation 1s steps(4) infinite',
        position: "absolute",
        bottom: TILE_SIZE * position.y, //manipulando o hero
        left: TILE_SIZE * position.x, //manipulando o hero
        transform: `scaleX(${direction === EDirection.RIGHT ? 1 : -1})`,
        zIndex: 1
      }}
    />
  );
}

export default Hero;