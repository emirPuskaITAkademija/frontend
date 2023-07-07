import { useState } from "react";

function CustomForm() {
  const [name, setName] = useState(""); //inicijalna vrijednost varijable

  const handleSubmit = (event) =>{
    event.preventDefault();
    alert(`Uneseno ime koje sam dobila ja funkcija je ${name}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Unesite ime:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input type="submit"/>
      </label>
    </form>
  );
}

export default CustomForm;
