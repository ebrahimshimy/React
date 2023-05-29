import React, { Component } from 'react';

class SubscrComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      subscr: 'Guest'
    };
  }

  handleClick = () => {
    this.setState({
      isLoggedIn: true,
      subscr: 'You have subscribed successfully :)'
    });
  };

  render() {
   // const { isLoggedIn, subscription } = this.state; if you need Destructing

    return (
      <div>
        <p>Is Logged In: {this.state.isLoggedIn.toString()}</p>
        <p>Subscribtion info: {this.state.subscr}</p>
        <button onClick={this.handleClick}>Update Subs. status</button>
      </div>
    );
  }
}

export default SubscrComponent;