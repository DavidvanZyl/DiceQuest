import './Main.scss';

import React from 'react';

import useAttack from '../../../data/hooks/useAttack';
import CharacterData from '../../components/characterData/characterData.component';
import Artix from './../../../images/Artix.png';
import Vampire from './../../../images/Vampire.png';

const Main = (props) => {
  const {
    playerHealth,
    enemyHealth,
    dispatchAttack,
    playerRoll,
    enemyRoll,
  } = useAttack();

  return (
    <div className="Main">
      <div className="Main__characterImages">
        <img src={Artix} alt="Hero" />
        <img src={Vampire} alt="Enemy" />
      </div>
      <div className="Main__characterStats">
        <CharacterData
          name={"Player1"}
          attack={dispatchAttack}
          roll={playerRoll}
          health={playerHealth}
        />
        <CharacterData name={"Enemy"} roll={enemyRoll} health={enemyHealth} />
      </div>
    </div>
  );
};

export default Main;
