import React, { Component } from 'react';
import NavigationControls from '../NavigationControls';
import { smartphoneListData } from '../../data';
import Card from '../Card';

class CardView extends Component {
  handleNextClick = () => {
    if (this.props.index < smartphoneListData.length - 1) {
      this.props.onSelectionChange(this.props.index + 1);
    }
  };

  handlePreviousClick = () => {
    if (this.props.index > 0) {
      this.props.onSelectionChange(this.props.index - 1);
    }
  };

  render() {
    const { smartphone, index } = this.props;

    return (
      <div className="CardView">
        <NavigationControls
          onPreviousClick={this.handlePreviousClick}
          onNextClick={this.handleNextClick}
          isPreviousDisabled={index === 0}
          isNextDisabled={index === smartphoneListData.length - 1}
        />
        <Card smartphone={{ ...smartphone, index: index, total: smartphoneListData.length }} />
      </div>
    );
  }
}

export default CardView;
