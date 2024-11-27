import React, { Component } from 'react';

class Button extends Component {
  render() {
    const { onClick, disabled, children } = this.props;

    return (
      <button onClick={onClick} disabled={disabled}>
        {children}
      </button>
    );
  }
}

export default Button;
