import { useState } from "react";

function ComplexForm() {
  //username, age
  //person.setUsername("")
  //person.setAge(23)
  const [person, setPerson] = useState({});

  //2 inputa 
  //event -> username inputu
  // event -> age inputu
  // -> ime inputa da bih mogao pristupiti value od inputa
  const handlePersonChange = (event) => {
    const name = event.target.name;//username ili age
    const value = event.target.value; // username ili age 
    console.log(name + " <<  " + value);
    setPerson((previousValues) => ({
      ...previousValues,
      [name]: value,//age 24
    }));
  };

  const handlePersonSubmit = (event) => {
    event.preventDefault();
    alert(person["username"]+"  -> " + person["age"]);
  };

  return (
    <form onSubmit={handlePersonSubmit}>
      <label>
        Unesite vaše ime:
        <input type="text" name="username" onChange={handlePersonChange} />
      </label>
      <br />
      <label>
        Unesite vašu starosnu dob:
        <input type="number" name="age" onChange={handlePersonChange} />
      </label>
      <br />
      <input type="submit" />
    </form>
  );
}

export default ComplexForm;
