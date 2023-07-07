function Animal(props) {
  //const tipZivotinje = props.tipZivotinje;
  const playSound = (tipZivotinje, event) => {
    if (tipZivotinje === "dog") {
      alert("Aw Aw Aw    " + event.type);
    } else if (tipZivotinje === "cat") {
      alert("Mjau Mjau Mjau"+ event.type);
    } else {
      alert("No Sound Animal");
    }
  };

  return (
    <button onClick={(e) => playSound(props.tipZivotinje, e)}>Play Sound</button>
  );
}

export default Animal;
