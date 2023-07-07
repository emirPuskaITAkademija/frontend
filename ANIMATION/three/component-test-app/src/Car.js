import React from "react";

class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: "crvena" };
  }

  changeCarColor = () => {
    this.setState({ color: "plava" });
  };

  render() {
    return (
      <>
        <h2>Moj auto je ekstremno brz. Boja mog auta je {this.state.color} </h2>
        <h3>Model mog auta je {this.props.model}</h3>
        <button type="button" onClick={this.changeCarColor}>Change Car Color</button>
      </>
    );
  }
}

export default Car;
