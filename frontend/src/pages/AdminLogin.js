import React, { useState  } from "react";
import { useHistory } from 'react-router-dom';
import { Link } from "react-router-dom";
import {Button} from "react-bootstrap"
import "../styles/Profile.css";
import Axios from "axios";

function LoginPage() {

  const history = useHistory()



  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [data, setData] = useState(null);
  const [y,sety] = useState(true)
  const change =()=> sety(!y);
  const register = async() => {

const data = {
    username: registerUsername,
    email: registerEmail,
    password: registerPassword,
  };

  await Axios.post("http://localhost:4000/register" , data ,{
  withCredentials: true
} ).then((res) => console.log(res)).catch(e => console.log(e.message));


  };
  const login = async() => {

    const data = {
      email: loginEmail,
      password: loginPassword,
    }

     let jk = await Axios.post("http://localhost:4000/login" , data ).catch(e => console.log(e.message));

     if(jk.data.role === 'admin')
     {
       localStorage.setItem('AdminUser', JSON.stringify(jk.data));
       history.push('/admin')
     }


  };
  const getUser = async() => {

    // await Axios.get("http://localhost:4000/user").then((res) => {
    //   setData(res.data);
    //   console.log(res.data);
    // }).catch(e => console.log(e.message));

const ol =  JSON.parse(localStorage.getItem('AdminUser'))
setData(ol);

  };

  return (
    <div className="login-main">
      <div class="container-fluid">
        <Link to="" className="logo-container">
          Smart<font>Colony</font>
        </Link>
      </div>
      <div className={ y ?"signup x":"signup"}>
        <div style={{display:"grid", justifyContent:"center", margin:"10px 0"}}>
          <h1>Register</h1>
          <label className="label">Username</label>
          <input className="space"
            placeholder="username"
            onChange={(e) => setRegisterUsername(e.target.value)}
          />
          <label className="label">Email</label>
          <input className="space"
            placeholder="email"
            onChange={(e) => setRegisterEmail(e.target.value)}
          />
          <label className="label">Password</label>
          <input className="space"
            placeholder="password"
            onChange={(e) => setRegisterPassword(e.target.value)}
          />
          <Button className="space" onClick={register}>Submit</Button>
          <div onClick={change}>Already have an account.</div>
        </div>
      </div>
      <div className={ y ?"signin":"signin x"}>
        <div style={{display:"grid", justifyContent:"center", margin:"10px 0"}}>
          <h1>Login</h1>
          <label className="label">Email</label>
          <input className="space"
            placeholder="email"
            onChange={(e) => setLoginEmail(e.target.value)}
          />
          <label className="label">Password</label>
          <input className="space"
            placeholder="password"
            onChange={(e) => setLoginPassword(e.target.value)}
          />
          <Button className="space" onClick={login} style={{margin:"10px"}}>Submit</Button>

        </div>
        <div style={{display: "grid"}}>
            <Button onClick={getUser} style={{}}>Get User</Button>
            {data ? <h1>Welcome Back {data.username}</h1> : null}
        </div>
      </div>


    </div>
  );
}

export default LoginPage;
