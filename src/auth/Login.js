import '../App.css';
import './auth.css';
import jwt_decode from "jwt-decode";
import {Link} from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function Login() {
  const history = useHistory();

  const [user,setUser]=useState({"email":"","password":""});

  function handleChange(e)
  {
    e.preventDefault();
    let val=e.target.value;
    let nm=e.target.name;
    setUser({...user,[nm]:val});
  }


  const loginHandler = async () => {
    try {
      const response = await axios.post(`/api/auth/login`, {
        email: user.email,
        password: user.password,
      });
      // saving the encodedToken in the localStorage
      localStorage.setItem("token", response.data.encodedToken);
      localStorage.setItem("user",JSON.stringify(jwt_decode(response.data.encodedToken)));
      history.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  const submitForm = () =>{
    console.log(user);
    let allValid=true;
    for(const key in user)
    {
      if(user[key]=="")
        allValid=false
    }

    if(allValid)
    {
      loginHandler();
    }
    else
    {
      console.log("Please fill out email and password.")
    }
  }

  return (
    <div className="auth-body">
        <section className="auth-container">
            <div className="container-head"><h2>Log In</h2></div>
            <form className="login-form" onSubmit={(e)=>e.preventDefault()}>
            <div className="form-item"><label>Email</label><input className="textbox" type="email" placeholder="user@gmail.com" name="email" defaultValue={user.email} onChange={(e)=>handleChange(e)} /></div>
            <div className="form-item"><label>Password</label><input className="textbox" type="password" placeholder="****" name="password" defaultValue={user.password } onChange={(e)=>handleChange(e)}/></div>
        </form>
        <div className="auth-footer">

            <button className="btn" onClick={submitForm}>Log In</button>

            <Link className="highlight" to="/register">Dont have an account? Register now!</Link>

            
        </div>
        </section></div>
  );
}

export default Login;
