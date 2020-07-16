import { createSelector } from 'reselect';

export const healthState = ({ health }) => health;

export const playerHealth = createSelector(
  healthState,
  (state) => state.player
);

export const enemyHealth = createSelector(healthState, (state) => state.enemy);
