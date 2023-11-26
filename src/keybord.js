// keybord.js

import React, { useState } from 'react';

const Keybord = ({ onClick, onColor,cuurentColor }) => {
  const english = 'q,w,e,r,t,y,u,i,o,p,a,s,d,f,g,h,j,k,l,z,x,c,v,b,n,m'.split(",");
  const hebrew = 'א,ב,ג,ד,ה,ו,ז,ח,ט,י,כ,ל,מ,נ,ס,ע,פ,צ,ק,ר,ש,ת,ם,ן,ץ,ף,ך'.split(",");
  const [language, setLanguage] = useState(false);



  const handleKeyPress = (value) => {
    onClick(value);
  };

  const handleLanguageChange = () => {
    setLanguage(!language);
  };

  return (
    <div className="keyboard">

    <button onClick={onColor}>
    {cuurentColor === "black" ? "red" : "black"}
    </button>
    
 <button onClick={handleLanguageChange}>
        {language === false ? 'Hebrew' : 'English'}
      </button>
      {language&&hebrew.map((value, index) => (
        <div className="key-button" key={index} onClick={() => handleKeyPress(value)}>
          <p>{value}</p>
        </div>
      ))}
      {!language && english.map((value, index) => (
        <div className="key-button" key={index} onClick={() => handleKeyPress(value)}>
          <p>{value}</p>
        </div>
      ))}
      {/* Add a space button */}
      <div className="key-button" onClick={() => handleKeyPress(" ")}>
        <p>Space</p>
      </div>
      {/* Add a delete button */}
      <div className="key-button" onClick={() => handleKeyPress("delete")}>
        <p>Delete</p>
      </div>
      {/*Add a clear button*/}
      <div className="key-button" onClick={() => handleKeyPress("clear")}>
        <p>Clear</p>
      </div>
    </div>
  );
};

export default Keybord;