import { useState } from 'react';
import axios from 'axios';
import '../App.css';
import './auth.css';
import { useHistory } from "react-router-dom";


function Register() {

  const history = useHistory();
  const [user,setUser]=useState({"email":"","name":"","password":"","passwordC":""});
  const [valid,setValid]=useState({"email":true,"name":true,"password":true,"passwordC":true});
  const [showPw,setShowPw]=useState(false);

  function handleChange(e)
  {
    e.preventDefault();
    let val=e.target.value;
    let nm=e.target.name;
    setUser({...user,[nm]:val});
  }

  const signupHandler = async () => {
    try {
      const response = await axios.post(`/api/auth/signup`, {
        name:user.name,
        email: user.email,
        password: user.password,
      });
      // saving the encodedToken in the localStorage
      localStorage.setItem("token", response.data.encodedToken);
      history.push('/login');
    } catch (error) {
      console.log(error);
    }
  };

  function submitForm()
  {
    let allValid=true;
    for(const key in valid)
    {
      if(valid[key]==false)
      {
        allValid=false;
      }
    }
    for(const key in user)
    {
      if(user[key]=="")
      {
        allValid=false;
      }
    }

    if(allValid)
    {
      signupHandler();
    }
    else
    console.log("Cant register with garbage data!");
  }
   
  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let isValid = re.test(email);
    setValid({...valid,"email":isValid});
  }

  const validateName = (name) => {
    
    let isValid = name.length >= 3? true:false;
    setValid({...valid,"name":isValid});
  }
  const validatePw = (pw) => {
    let isValid = pw.length >= 6? true:false;
    console.log(pw)
    setValid({...valid,"password":isValid});
  }
  const validatePwc = (pw) => {
    let isValid = pw == user.password? true:false;
    setValid({...valid,"passwordC":isValid});
  }


  function validate(e)
  {
    var nm=e.target.name;
    var val=e.target.value;
    switch(nm)
    {
      case "email": validateEmail(val);
                    break;
      case "name": validateName(val);
                    break;
      case "password": validatePw(val);
                    break;
      case "passwordC": validatePwc(val);
                    break;

    }
  }

  return (
    <div className="auth-body">
        <section className="auth-container">
            <div className="container-head"><h2>Register</h2></div>
            <form className="login-form" onSubmit={(e)=>e.preventDefault()}>
            <div className="form-item"><label>Email</label><input className="textbox" type="email" placeholder="user@gmail.com" name="email" defaultValue={user.email} onChange={e=>handleChange(e)} onBlur={e=>validate(e)}/>
            { valid.email?(<p></p>):(<p className="form-err">Please enter a valid email ID</p>)}
            </div>
            <div className="form-item"><label>Name</label><input className="textbox" type="text" placeholder="John Doe" name="name" defaultValue={user.name} onChange={e=>handleChange(e)} onBlur={e=>validate(e)}/>
            { valid.name?(<p></p>):(<p className="form-err">Name should have atleast 3 characters</p>)}
            </div>
            <div className="form-item"><label>Password</label><input className="textbox" type={showPw?"text":"password"} placeholder="****" name="password" defaultValue={user.password} onChange={e=>handleChange(e)} onBlur={e=>validate(e)}/>
            { valid.password?(<p></p>):(<p className="form-err">Password should contain more than 6 characters.</p>)}
            
            <button className='input-btn' onClick={()=>setShowPw(!showPw)}>{showPw?(<i className="fa fa-eye"></i>):(<i className="fa fa-eye-slash"></i>)}</button>
            </div>
            <div className="form-item"><label>Confirm Password</label><input className="textbox" type={showPw?"text":"password"} placeholder="****" name="passwordC" defaultValue={user.passwordC} onChange={e=>handleChange(e)} onBlur={e=>validate(e)}/>
            { valid.passwordC?(<p></p>):(<p className="form-err">Passwords don't match</p>)}
            <button className='input-btn' onClick={()=>setShowPw(!showPw)}>{showPw?(<i className="fa fa-eye"></i>):(<i className="fa fa-eye-slash"></i>)}</button>
            
            </div>
        </form>
        <div className="auth-footer">

            <button className="btn" onClick={submitForm}>Register</button>
        </div>
        </section>
    </div>
  );
}

export default Register;
