import React, { useState } from "react";
// import "../styles/Login.css";
import Axios from "axios";

function Login() {
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [data, setData] = useState(null);

  const register = async() => {

const data = {
    username: registerUsername,
    email: registerEmail,
    password: registerPassword,
  };

  await Axios.post("http://localhost:4000/workerregister" , data ).then((res) => console.log(res)).catch(e => console.log(e.message));


  };
  const login = async() => {

    const data = {
      email: loginEmail,
      password: loginPassword,
    }

    await Axios.post("http://localhost:4000/workerlogin" , data ).then((res) => console.log(res)).catch(e => console.log(e.message));


  };
  const getUser = async() => {

    await Axios.get("http://localhost:4000/worker").then((res) => {
      setData(res.data);
      console.log(res.data);
    }).catch(e => console.log(e.message));


  };


  return (
    <div className="container">
      <div>
        <h1>Register</h1>
        <input
          placeholder="username"
          onChange={(e) => setRegisterUsername(e.target.value)}
        />
        <input
          placeholder="password"
          onChange={(e) => setRegisterPassword(e.target.value)}
        />
        <input
          placeholder="email"
          onChange={(e) => setRegisterEmail(e.target.value)}
        />
        <button onClick={register}>Submit</button>
      </div>

      <div>
        <h1>Login</h1>
        <input
          placeholder="email"
          onChange={(e) => setLoginEmail(e.target.value)}
        />
        <input
          placeholder="password"
          onChange={(e) => setLoginPassword(e.target.value)}
        />
        <button onClick={login}>Submit</button>
      </div>

      <div>
        <h1>Get User</h1>
        <button onClick={getUser}>Submit</button>
        {data ? <h1>Welcome Back {data.username}</h1> : null}
      </div>
    </div>
  );
}

export default Login;
