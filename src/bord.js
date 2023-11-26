
import React from 'react';

const Keyboard = ({ onClick }) => {
  const english = 'q,w,e,r,t,y,u,i,o,p,a,s,d,f,g,h,j,k,l,z,x,c,v,b,n,m, '.split(",");
  const hebrew = 'א,ב,ג,ד,ה,ו,ז,ח,ט,י,כ,ל,מ,נ,ס,ע,פ,צ,ק,ר,ש,ת,ם,ן,ץ,ף,ך, '.split(",");

  return (
    <div className="letters">
      {hebrew.map((value, index) => (
        <div className="buttons" key={index} onClick={() => onClick(value)}>
          <p>{value}</p>
        </div>
      ))}
      {english.map((value, index) => (
        <div className="buttons" key={index} onClick={() => onClick(value)}>
          <p>{value}</p>
        </div>
      ))}
    </div>
  );
};

export default Keyboard;