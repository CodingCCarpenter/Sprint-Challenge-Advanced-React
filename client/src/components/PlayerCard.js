import React from "react";
import styled from 'styled-components';

const PlayerCard = ({ name, country, searches }) => {
  return (
    <Div className='player-card'>
      <P data-testid="card-h1"> { name }</P>
      <P data-testid="first-p"> { country }</P>
      <P data-testid="second-p">Searches: { searches }</P>
    </Div>
  );
};

const Div = styled.div`
  diplay: flex;
  flex-direction: row;
`

const P = styled.p`
  width: 30%;
`

export default PlayerCard;