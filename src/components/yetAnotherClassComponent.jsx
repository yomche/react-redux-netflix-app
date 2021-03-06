import React from 'react';

// !!class component with state!!

export class YetAnotherClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Kate',
    };

    this.changeName = this.changeName.bind(this);
  }
  
  getRandomNames() {
    const randomNames = ['everybody', 'YomChe', 'Gerald', 'V', 'Shepard', 'Garrus'];
    const randomizer = Math.floor(Math.random() * randomNames.length);
    return randomNames[randomizer];
  }

  changeName() {
    this.setState({
      name: this.getRandomNames(),
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Welcome to React, {this.state.name}!</h1>
        <button onClick={this.changeName}>{'Change name'}</button>
      </div>
    );
  }
}
