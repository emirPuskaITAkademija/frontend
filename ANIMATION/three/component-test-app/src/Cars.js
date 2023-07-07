import CarItem from "./CarItem";

function Cars(props) {
  const nizAuta = [
    {id:1, model:"Audi"},
    {id: 2, model:"BMW"}, 
    {id: 3, model: "Porsche"},
    {id: 4, model: "VW"}
  ];

  return(
    <>
    <h1>Omiljena auta</h1>
    <ol>
        {nizAuta.map(car => <CarItem key={car.id} markaAutomobila={car.model} />)}
    </ol>
    </>
  );
}

export default Cars;
