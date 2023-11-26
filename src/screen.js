// screen.js
import React from 'react';

const Screen = ({ inputText,color }) => {
  return (
    <div className="input-display">
      <p style={{color:color}}>{inputText}</p>
    </div>
  );
};

export default Screen;