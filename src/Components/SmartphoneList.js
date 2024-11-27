import React, { Component } from 'react';

class SmartphoneList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItems: [],
    };
  }

  handleCheckboxChange = (itemName) => {
    this.setState(
      (prevState) => {
        const selectedItems = prevState.selectedItems.includes(itemName)
          ? prevState.selectedItems.filter((name) => name !== itemName) // Uncheck
          : [...prevState.selectedItems, itemName]; // Check
        return { selectedItems };
      },
      () => {
        // Pass the updated count to the parent through the callback
        this.props.onSelectionChange(this.state.selectedItems.length);
      }
    );
  };

  render() {
    const { items } = this.props;
    const { selectedItems } = this.state;

    return (
      <div className="SmartphoneList">
        {items.map((item, index) => (
          <div key={index} className="SmartphoneItem">
            <input
              type="checkbox"
              checked={selectedItems.includes(item.name)}
              onChange={() => this.handleCheckboxChange(item.name)}
            />
            <label>
              {item.name} by {item.manufacturer}
            </label>
          </div>
        ))}
      </div>
    );
  }
}

export default SmartphoneList;
