import React from "react";

const PlayerCard = ({ name, country, searches }) => {
  return (
    <div>
      <h1 data-testid="card-h1">{name}</h1>
      <p data-testid="first-p">{country}</p>
      <p data-testid="second-p">{searches}</p>
    </div>
  );
};

export default PlayerCard;