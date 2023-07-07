import { useState } from "react";

function UserForm() {
  const [user, setUser] = useState({});
  

  const handleUserSubmitAction = (e) => {
    e.preventDefault();
    let userPrikaz = "";
    for(let userPropName in user){
        userPrikaz = userPrikaz+", "+userPropName+":"+user[userPropName];
    }
    alert(userPrikaz);
  };

  const handleInputChange = (e) => {
    const propertyName = e.target.name;
    const propertyValue = e.target.value;
    //surname Bogdanović
    setUser((previousProperties) => ({
      ...previousProperties,
      [propertyName]: propertyValue,
    }));

  };

  const loginText = "REGISTER";

  return (
    <form onSubmit={handleUserSubmitAction}>
      <input
        name="name"
        type="text"
        placeholder="Enter name.."
        onChange={handleInputChange}
      />
      <br />
      <input
        name="surname"
        type="text"
        placeholder="Enter surname..."
        onChange={handleInputChange}
      />
      <br />
      <input
        name="username"
        type="text"
        placeholder="Enter username..."
        onChange={handleInputChange}
      />
      <br />
      <input
        type="password"
        name="password"
        placeholder="Enter password..."
        onChange={handleInputChange}
      />
      <br></br>
      <select name="gender" value={user.gender} onChange={handleInputChange}>
        <option value="FEMALE">Female</option>
        <option value="MALE">Male</option>
        <option value="UNDEFINED">Undefined</option>
      </select>
      <br />
      <textarea name="description" value={user.description} onChange={handleInputChange}/>
      <br />
      <input type="submit" value={loginText} />
    </form>
  );
}

export default UserForm;
