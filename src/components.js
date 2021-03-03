import React from "react";

//!!arrow function component!!

export let ArrowFuncComponent = () => <h1> Hello World! </h1>;

// !!function component!!

export function FuncComponent(props) {
  return <h1>Greetings, {props.name}! </h1>;
}
export default FuncComponent;

// !!class component!!

export class ClassComponent extends React.Component {
  render() {
    return <h1>Greetings, CodeSandbox!</h1>;
  }
}

// !!class component via PureComponent!!

export class AnotherClassComponent extends React.PureComponent {
  render() {
    return <h1>Coodbye, CodePen :(</h1>;
  }
}

// !!class component with state!!

export class YetAnotherClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Kate"
    };

    this.changeName = this.changeName.bind(this);
  }

  changeName = () => {
    this.setState({
      name: "everybody"
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Welcome to React, {this.state.name}!</h1>
        <button onClick={this.changeName}>{"Change name"}</button>
      </div>
    );
  }
}
