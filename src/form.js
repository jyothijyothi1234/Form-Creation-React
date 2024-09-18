import React, { useState } from "react";

function Attrib() {
  const [data, setData] = useState({ username: "", password: "" });

  const { username, password } = data;

  const OnHandler = (e) => {
    const {name , value} = e.target;
    setData({ ...data, [name]: [value] });
  };

  const OnForm = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <div style={{ marginTop: "200px" }}>
      <form onSubmit={OnForm}>
        <input
          type="text"
          name="username"
          onChange={OnHandler}
          value={username}
        />
        <br />
        <br />
        <input
          type="password"
          name="password"
          onChange={OnHandler}
          value={password}
        />
        <br />
        <br />
        <input type="submit" name="submit" />
      </form>
      <h3> value= {username}</h3>

      <br />
      <h3> value= {password}</h3>

      <br />
    </div>
  );
}

export default Attrib;
