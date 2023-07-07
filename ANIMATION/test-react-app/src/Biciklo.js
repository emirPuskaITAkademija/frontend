import React from "react";

/**
 * <li>1. Montiranje na UI (Mounting)
 * <li>2. Ažuriranje (Updating)
 * <li>3. Demontaža sa UI(Unmounting)
 */
class Biciklo extends React.Component {
  constructor() {
    super();
    this.state = {
      year: 2014,
    };
  }

  changeYear = () => {
    this.setState({ year: 2018 }); // setState prvo se izmjenio year -> ponovno se pozvala metoda render()
  };

  render() {
    return (
      <div>
        <p>
          Ovo biciklo je {this.props.info.boja} i marka bicikla je {this.props.info.marka}{" "}
          i proizveden je {this.state.year} godine
        </p>
        <button type="button" onClick={this.changeYear}>Change Year</button>
      </div>
    );
  }
}

export default Biciklo;
