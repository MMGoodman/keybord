
// import React, { useState } from 'react';
// import Keyboard from './Keyboard';
// import LanguageDisplay from ''

// const LanguageManager = () => {
//   const [inputText, setInputText] = useState('');
//   const [language, setLanguage] = useState(false);

//   const handleTextChange = (text) => {
//     setInputText(text);
//   };

//   const changeLanguage = () => {
//     setLanguage(!language);
//   };

//   const handleLetterClick = (letter) => {
//     setInputText((prevInput) => prevInput + letter);
//   };

//   return (
//     <div>
//       <button onClick={changeLanguage}>
//         {language === false ? 'Hebrew' : 'English'}
//       </button>
//       <Keyboard onClick={handleLetterClick} />
//       <LanguageDisplay inputText={inputText} />
//     </div>
//   );
// };

// export default LanguageManager;