import React from 'react';
import Hero from '../hero';
import { GAME_SIZE } from '../settings/constants';
import Minidemon from '../minidemon';
import Demon from '../demon';
import Chest from '../chest';
import Trap from '../trap';

const Board = () =>{
    return(
        <div>
            <Trap />
            <Chest />
            <Demon />
            <Minidemon />
            <Hero/>
        <img src="./assets/tileset.gif" alt="" width={GAME_SIZE} height={GAME_SIZE}/>
        </div>
    );
}

export default Board;