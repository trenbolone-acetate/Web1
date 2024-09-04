import React from 'react';
import Button from './Button';

function NavigationControls({ onPreviousClick, onNextClick, isPreviousDisabled, isNextDisabled }) {
  return (
    <div className="NavigationControls">
      <Button 
        onClick={onPreviousClick} 
        disabled={isPreviousDisabled}
      >
        &lt;
      </Button>
      <Button 
        onClick={onNextClick} 
        disabled={isNextDisabled}
      >
        &gt;
      </Button>
    </div>
  );
}

export default NavigationControls;
