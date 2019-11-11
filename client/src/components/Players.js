import React from 'react';
import PlayerCard from './PlayerCard.js';

const Players = ({ players }) => {
    return(
        <div data-testid='players'>
            {players.map((player) => {
                return (
                    <PlayerCard
                        key= { player.id }
                        name= { player.name }
                        country= { player.country }
                        searches={ player.searches }
                    />
                );
            })}
        </div>
    );
};

export default Players