import React from "react";
import Car from "./Car";

/*function Person(props) {
  return (
    <>
      <p>
        Ja sam {props.ime} {props.prezime} i star sam {props.starost} godina
      </p>
      <Car tip='Luksuzno auto' marka='VW Passat'/>
      <Car tip='Luksuzno auto' marka='Porsche Macan'/>
      <Car tip='Luksuzno auto' marka='Dodge Viper'/>
    </>
  );
}*/

class Person extends React.Component {
  /* constructor() {
    super();
    //this.state = { ime: "Anel", prezime: "Ibrahimagić", starost: 23 };
  }*/

  render() {
    return (
      <>
        <p>
          Ja sam {this.props.ime} {this.props.prezime} i star sam{" "}
          {this.props.starost} godina
        </p>
        <Car tip="Luksuzno auto" marka="VW Passat" />
        <Car tip="Luksuzno auto" marka="Porsche Macan" />
        <Car tip="Luksuzno auto" marka="Dodge Viper" />
      </>
    );
  }
}

export default Person;
