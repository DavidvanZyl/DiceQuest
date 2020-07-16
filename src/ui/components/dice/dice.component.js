import './dice.component.scss';

import React from 'react';

const toWord = ["one", "two", "three", "four", "five", "six"];

const Dice = ({ roll }) => {
  return (
    <div className={`Dice ${toWord[roll - 1]}`}>
      <div className="Dice__dotSet">
        <span className={`Dice__dot ${toWord[0]}`}> </span>
        <span className={`Dice__dot ${toWord[1]}`}> </span>
        <span className={`Dice__dot ${toWord[2]}`}> </span>
      </div>
      <span className={`Dice__dot center`}> </span>
      <div className="Dice__dotSet">
        <span className={`Dice__dot ${toWord[3]}`}> </span>
        <span className={`Dice__dot ${toWord[4]}`}> </span>
        <span className={`Dice__dot ${toWord[5]}`}> </span>
      </div>
    </div>
  );
};

export default Dice;
