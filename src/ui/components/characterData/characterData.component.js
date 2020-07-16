import './characterData.component.scss';

import React from 'react';

import Dice from '../dice/dice.component';
import HealthBar from '../healthBar/healthBar.component';

const CharacterData = ({ attack, name, health, roll }) => {
  return (
    <div className="CharacterData">
      <span className="CharacterData__background" />
      <div className="CharacterData__main">
        <p className="CharacterData__main__name">{name}</p>
        <HealthBar health={health} />
        <div className="CharacterData__main__dice">
          <Dice roll={roll[0]} />
          <Dice roll={roll[1]} />
        </div>
      </div>
      {attack && (
        <button className="CharacterData__attackButton" onClick={attack}>
          Attack
        </button>
      )}
    </div>
  );
};

export default CharacterData;
