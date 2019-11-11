import React from "react";

const PlayerCard = ({ name, country, searches }) => {
  return (
    <div className='player-card'>
      <h1 data-testid="card-h1">Name: {name}</h1>
      <p data-testid="first-p">Country: {country}</p>
      <p data-testid="second-p">Searches: {searches}</p>
    </div>
  );
};

export default PlayerCard;