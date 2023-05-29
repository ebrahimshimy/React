import React, { Component } from 'react';

class QuantityComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1
    };
  }

  handleIncr = () => {
    const { quantity } = this.state;
    this.setState({ quantity: quantity + 1 });
  };

  handleDecr = () => {
    const { quantity } = this.state;
    if (quantity > 1) {
      this.setState({ quantity: quantity - 1 });
    }
  };

  render() {
    const { quantity } = this.state;

    return (
      <div>
        <button onClick={this.handleDecr}>-</button>
        <span>{quantity}</span>
        <button onClick={this.handleIncr}>+</button>
      </div>
    );
  }
}

export default QuantityComponent;