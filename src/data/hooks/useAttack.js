import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { roll } from '../redux/roll/actions';
import * as healthSelectors from '../selectors/health';
import * as rollSelectors from '../selectors/roll';

export default function useAttack() {
  const dispatch = useDispatch();
  const playerHealth = useSelector(healthSelectors.playerHealth);
  const enemyHealth = useSelector(healthSelectors.enemyHealth);
  const playerRoll = useSelector(rollSelectors.playerRoll);
  const enemyRoll = useSelector(rollSelectors.enemyRoll);

  const attack = useCallback(
    (damage, victim) => {
      dispatch(roll());
    },
    [dispatch]
  );

  const dispatchAttack = () => {
    if (playerHealth > 0 && enemyHealth > 0) {
      attack();
    }
  };

  return {
    playerHealth,
    enemyHealth,
    dispatchAttack,
    playerRoll,
    enemyRoll,
  };
}
