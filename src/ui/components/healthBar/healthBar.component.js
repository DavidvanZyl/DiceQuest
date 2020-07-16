import './healthBar.component.scss';

import React from 'react';

const HealthBar = ({ health }) => {
  return (
    <div className="Health">
      <div className="Health__healthBar" style={{ width: `${health}%` }} />
      <p className="Health__healthValue">{health}</p>
    </div>
  );
};

export default HealthBar;
