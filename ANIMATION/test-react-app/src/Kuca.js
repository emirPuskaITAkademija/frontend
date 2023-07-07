import Osoba from "./Osoba";

function Kuca(props) {
  return (
    <>
      <h2>Ja živim u kući koja ima {props.brojSoba} soba</h2>
      <Osoba tipOsobe="Otac" ime="Damir" />
      <Osoba tipOsobe="Majka" ime="Dunja" />
      <Osoba tipOsobe="Sestra" ime="Elma" />
    </>
  );
}

export default Kuca;