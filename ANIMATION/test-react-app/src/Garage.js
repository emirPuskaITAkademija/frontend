import React from "react";
import Biciklo from "./Biciklo";

class Garage extends React.Component {
  render() {
    const bicycleInfo = {
        boja: "crveno", 
        marka:"BMX"
    };

    return (
      <h1>
        <Biciklo info={bicycleInfo} />
      </h1>
    );
  }
}

export default Garage;
