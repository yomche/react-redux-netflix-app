import React from 'react';

export default class YetAnotherClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Kate',
    };

    this.changeName = this.changeName.bind(this);
  }

  static getRandomNames() {
    const randomNames = ['everybody', 'YomChe', 'Gerald', 'V', 'Shepard', 'Garrus'];
    const randomizer = Math.floor(Math.random() * randomNames.length);
    return randomNames[randomizer];
  }

  changeName() {
    this.setState({
      name: YetAnotherClassComponent.getRandomNames(),
    });
  }

  render() {
    const { name } = this.state;
    return (
      <div className="App">
        <h1>
          Welcome to React,
          {name}
          !
        </h1>
        <button type="button" onClick={this.changeName}>Change name</button>
      </div>
    );
  }
}
