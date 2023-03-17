import './styleExample.scss';
import React from 'react';

const StyleExample = () => {
  return (
    <div className="styles">
      <div className="styles__primary">
        I'm a div that uses all the variables above.
      </div>
      <div className="styles__secondary">
        Me too, but I use the secondary color.
      </div>
    </div>
  );
};

export default StyleExample;
