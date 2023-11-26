
import React, { useState } from 'react';
import Keybord from './keybord';
import Screen from './screen';

const Panel = ({ onTextChange }) => {
  const colors = ["black", "red"];
  const [inputText, setInputText] = useState('');
  const [textColor, setTextColor] = useState(colors[0]);

  const handleKeyPress = (value) => {
    if (value === "delete") {
      setInputText((prevInput) => prevInput.slice(0, -1));
    } else if (value === "clear") {
      setInputText("");
    } else {
      setInputText((prevInput) => prevInput + value);
    }
  };

  const changeColor = () => {
    const newIndex = textColor === colors[0] ? 1 : 0;
    setTextColor(colors[newIndex]);
  }

  return (
    <div>
      <Keybord onClick={handleKeyPress} onColor={changeColor} cuurentColor={textColor} />
      <Screen inputText={inputText} color={textColor} />
    </div>
  );
};

export default Panel;