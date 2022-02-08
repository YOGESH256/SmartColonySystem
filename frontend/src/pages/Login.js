import React, { useState } from "react";
import { Link } from "react-router-dom";
import {Form, Button} from "react-bootstrap"
import "../styles/Profile.css";
import Axios from "axios";

// export default function Form() {

//   // States for registration
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   // States for checking the errors
//   const [submitted, setSubmitted] = useState(false);
//   const [error, setError] = useState(false);

//   // Handling the name change
//   const handleName = (e) => {
//     setName(e.target.value);
//     setSubmitted(false);
//   };

//   // Handling the email change
//   const handleEmail = (e) => {
//     setEmail(e.target.value);
//     setSubmitted(false);
//   };

//   // Handling the password change
//   const handlePassword = (e) => {
//     setPassword(e.target.value);
//     setSubmitted(false);
//   };

//   // Handling the form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (name === '' || email === '' || password === '') {
//       setError(true);
//     } else {
//       setSubmitted(true);
//       setError(false);
//     }
//   };

//   // Showing success message
//   const successMessage = () => {
//     return (
//       <div
//         className="success"
//         style={{
//           display: submitted ? '' : 'none',
//         }}>
//         <h1>User {name} successfully registered!!</h1>
//       </div>
//     );
//   };

//   // Showing error message if error is true
//   const errorMessage = () => {
//     return (
//       <div
//         className="error"
//         style={{
//           display: error ? '' : 'none',
//         }}>
//         <h1>Please enter all the fields</h1>
//       </div>
//     );
//   };

//   return (
//     <div className="form">
//       <div>
//         <h1>User Registration</h1>
//       </div>

//       {/* Calling to the methods */}
//       <div className="messages">
//         {errorMessage()}
//         {successMessage()}
//       </div>

//       <form>
//         {/* Labels and inputs for form data */}
//         <label className="label">Name</label>
//         <input onChange={handleName} className="input"
//           value={name} type="text" />

//         <label className="label">Email</label>
//         <input onChange={handleEmail} className="input"
//           value={email} type="email" />

//         <label className="label">Password</label>
//         <input onChange={handlePassword} className="input"
//           value={password} type="password" />

//         <button onClick={handleSubmit} className="btn" type="submit">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// }

function LoginPage() {
  const [regUsername, setRegUsername] = useState("");
  const [regPassword, setRegPassword] = useState("");
  const [regEmail, setRegEmail] = useState("");

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  let tempUsername, tempEmail, tempPsw;
  const [data, setData] = useState(null);
  
  const register = async(e) => {
    e.preventDefault();
    setRegUsername(tempUsername);
    setRegEmail(tempEmail);
    setRegPassword(tempPsw);
    const data = {
      username: regUsername,
      email: regEmail,
      password: regPassword,
    };

    await Axios.post("http://localhost:4000/register" , data,{
      withCredentials: true
    })
    .then((res) => console.log(res)).catch(e => console.log(e.message));

  };
  const login = async(e) => {
    e.preventDefault();
    setLoginEmail(tempEmail);
    setLoginPassword(tempPsw);
    const data = {
      email: loginEmail,
      password: loginPassword,
    }

     let jk = await Axios.post("http://localhost:4000/login" , data ).catch(e => console.log(e.message));
     localStorage.setItem('User', JSON.stringify(jk.data));
  };
  const getUser = async() => {

    // await Axios.get("http://localhost:4000/user").then((res) => {
    //   setData(res.data);
    //   console.log(res.data);
    // }).catch(e => console.log(e.message));
    const ol =  JSON.parse(localStorage.getItem('User'))
    setData(ol);
  };

  // function validateForm() {
  //   return tempEmail.length > 0 && tempPsw.length > 0;
  // }
  const [y,sety] = useState(true)
  const change =()=> sety(!y);

  const Signup =()=>{

    return(
    <div className={y?"signup x":"signup" } >
      <Form onSubmit={register}>
      <h1>Register</h1>
        <Form.Group size="lg" controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            // value={regUsername}
            onChange={(e) => tempUsername=e.target.value }
          />
        </Form.Group>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            // value={regEmail}
            onChange={(e) => tempEmail=e.target.value }
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            // value={regPassword}
            onChange={(e) => tempPsw=e.target.value }
          />
        </Form.Group>
        {/* <Button block size="md" type="submit" disabled={!validateForm()}> */}
        <Button block size="md" type="submit" >
          Signup
        </Button>
        <div onClick={change}>Already have an account.</div>
      </Form>
      </div>
  )}
  const Signin =()=>{

    return(
    <div className={ y ?"signin":"signin x"}>
      <Form onSubmit={login}>
        <h1>Login</h1>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            // value={tempEmail}
            onChange={(e) => tempEmail=e.target.value}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            // value={tempPsw}
            onChange={(e) => tempPsw=e.target.value}
          />
        </Form.Group>
        {/* <Button block size="md" type="submit" disabled={!validateForm()}> */}
        <Button block size="md" type="submit" >
          Signin
        </Button>
        <div onClick={change}>New user? Register.</div>
      </Form>
      <div style={{display:"grid", justifyContent:"center", margin:"10px 0"}}>
        <Button onClick={getUser}>Get User</Button>
        <br />
        {data ? <div><h1>Welcome Back {data.username}</h1></div> : null}
      </div>
    </div>
  )}

  return (
    <div className="login-main">
      <div class="container-fluid">
        <Link to="" className="logo-container">
          Smart<font>Colony</font>
        </Link>
      </div>
      <Signin />
      <Signup />
    </div>
  );
}

export default LoginPage;
