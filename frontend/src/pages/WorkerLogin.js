import React, { useState } from "react";
// import "../styles/Login.css";
import Axios from "axios";
import { useHistory } from 'react-router-dom';


function Login() {


  const history = useHistory()

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
     let jk = await Axios.post("http://localhost:4000/workerlogin" , data ).catch(e => console.log(e.message));

console.log(jk);
    // await Axios.post("http://localhost:4000/workerlogin" , data ).then((res) => console.log(res)).catch(e => console.log(e.message));

    if(jk.data.role === 'worker')
    {
      localStorage.setItem('Worker', JSON.stringify(jk.data));
      history.push('/service')
    }


  };
  const getUser = async() => {

    // await Axios.get("http://localhost:4000/worker").then((res) => {
    //   setData(res.data);
    //   console.log(res.data);
    // }).catch(e => console.log(e.message));

    const ol =  JSON.parse(localStorage.getItem('Worker'))
    console.log(ol);
    setData(ol);


  };


  return (
    <div className="container">


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
