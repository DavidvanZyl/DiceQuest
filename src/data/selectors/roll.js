import { createSelector } from 'reselect';

export const rollState = ({ rolls }) => rolls;

export const playerRoll = createSelector(rollState, (state) => state.player);

export const enemyRoll = createSelector(rollState, (state) => state.enemy);
