import React, { Component } from 'react';
import Button from './Button';

class NavigationControls extends Component{
  render(){
    const { onPreviousClick, onNextClick, isPreviousDisabled, isNextDisabled } = this.props;

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
}

export default NavigationControls;
