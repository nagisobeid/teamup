import './Login.css';
import react, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios'
import { useHistory } from "react-router-dom";



function Login() {

  let history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [incorrectUserData, setIncorrectUserData] = useState('');

  function validateForm(registerd) {
    let errors = {};
    let formIsValid = true;
    
    //Check for email
    if (registerd.email == '') {
      errors["email"] = "Email cannot be empty";
      formIsValid = false;
    }   

    //Check password1
    if (registerd.password == '') {
      errors["password"] = "Please enter a password";
      formIsValid = false;
    }
    if(registerd.password.length < 6){
      errors["password"] = "Password must contain at least 6 characters";
      formIsValid = false;
    }    

    setErrors(errors);
    return formIsValid;
  }

  //Handles form submission
  function submitForm(event) {
    event.preventDefault();

    const loggedIn = {
      email: email,
      password: password
    }

    if(validateForm(loggedIn)){

    axios.post('http://localhost:4000/app/login', loggedIn)
    .then(res => {
        if(res.data === false) {
          //incorrect user data
          setIncorrectUserData('incorrect username/password')
          setPassword('');
        } else {
          //login success
          console.log(res);
          let url = ('/');
          history.push(url)  // redirect
        }
    })
      //alert("Form submitted");
    }
  }
  //
  return (
    <>
    <div className="home-choice-div col-lg-4 offset-lg-4 col-sm-6 offset-sm-3 col-8 offset-2 shadow-lg">
      <form className="form" method="POST" onSubmit={e => submitForm(e)}>
        <div className="row mb-3">
          <div>
            <input placeholder="email" type="email" className="form-control" id="inputEmail" value={email} onChange={e => setEmail(e.target.value)}/>
            <p className="text-danger errors">{errors["email"]}</p>
          </div>
        </div>
        <div className="row mb-3">
          <div>
            <input placeholder="password" type="password" className="form-control" id="inputPassword" value={password} onChange={e => setPassword(e.target.value)}/>
            <p className="text-danger errors">{errors["password"]}</p>
            <p className="text-danger errors">{incorrectUserData}</p>
          </div>
        </div>
      
        <button type="submit" className="btn btn-primary col-12">Sign in</button>
        <p className="msg"><a>dont have an account? <Link to="./createaccount">Sign Up</Link></a></p> 
      </form>
    </div>
   </>
  );
}


export default Login