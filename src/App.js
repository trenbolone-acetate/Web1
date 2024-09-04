import React, { useState } from 'react';
import { smartphoneList } from './data';
import Card from './Components/Card';
import NavigationControls from './Components/NavigationControls';
import './App.css';

function App() {
  const [index, setIndex] = useState(0);

  function handleNextClick() {
    setIndex(index + 1);
  }

  function handlePreviousClick() {
    setIndex(index - 1);
  }

  const smartphone = smartphoneList[index];

  return (
    <div className="App">
      <NavigationControls 
        onPreviousClick={handlePreviousClick} 
        onNextClick={handleNextClick} 
        isPreviousDisabled={index === 0}
        isNextDisabled={index === smartphoneList.length - 1}
      />
      <Card 
        smartphone={{ ...smartphone, index: index, total: smartphoneList.length }}
      />
    </div>
  );
}

export default App;
