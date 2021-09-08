import './CreateAccount.css';
import react, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios'

function CreateAccount() {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVerify, setPasswordVerify] = useState('');
  const [errors, setErrors] = useState({});
  const [userexists, setUserExists] = useState('');


  function validateForm(registerd) {
    let errors = {};
    let formIsValid = true;
    //Check for firstname
    if (registerd.firstName == '') {
      errors["firstname"] = "First name cannot be empty";
      formIsValid = false;
    }
    if(!registerd.firstName.match(/^[a-zA-Z]+$/)){
        errors["firstname"] = "First name must contain only letters";
        formIsValid = false;
    }
    
    //Check for last name
    if (registerd.lastName == '') {
      errors["lastname"] = "Last name cannot be empty";
      formIsValid = false;
    }
    if(!registerd.lastName.match(/^[a-zA-Z]+$/)){
        errors["lastname"] = "Last name must contain only letters";
        formIsValid = false;
    }  
    
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
    
    //Check if password1 and password2 match
    if (registerd.passwordVerify == '' || !(registerd.password === registerd.passwordVerify)) {
      errors["passwordverify"] = "Passwords must match";
      formIsValid = false;
    }       

    setErrors(errors);
    return formIsValid;
  }

  //Handles form submission
  function submitForm(event) {
    event.preventDefault();

    const registered = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      passwordVerify: passwordVerify
    }

    if(validateForm(registered)){
      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('');
      setPasswordVerify('');

    axios.post('http://localhost:4000/app/signup', registered)
    .then(res => {
        if(res === 'User exists') {
          console.log('hellllo')
          setUserExists('User exists')
        }
    })
      //alert("Form submitted");
    }else{
        alert("Form has errors.")
        console.log(errors);
        //alert(res);
    }
  }


  return (
    <>
    <div className="home-choice-div col-lg-4 offset-lg-4 col-sm-6 offset-sm-3 col-8 offset-2 shadow-lg">
      <form className="form" method="POST" onSubmit={e => submitForm(e)}>
      <div className="row mb-3">
          <div>
            <input placeholder="first name" type="text" name="firstName" className="form-control" id="inputFirstName" value={firstName} onChange={e => setFirstName(e.target.value)}/>
              <p className="text-danger errors">{errors["firstname"]}</p>
          </div>
        </div>
        <div className="row mb-3">
          <div>
            <input placeholder="last name" type="text" name="lastName" className="form-control" id="inputLastName" value={lastName} onChange={e => setLastName(e.target.value)}/>
            <p className="text-danger errors">{errors["lastname"]}</p>
          </div>
        </div>
        <div className="row mb-3">
          <div>
            <input placeholder="email" type="email" name="email" className="form-control" id="inputEmail" value={email} onChange={e => setEmail(e.target.value)}/>
            <p className="text-danger errors">{errors["email"]}</p>
          </div>
        </div>
        <div className="row mb-3">
          <div>
            <input placeholder="password" type="password" name="password" className="form-control" id="inputPassword" value={password} onChange={e => setPassword(e.target.value)}/>
            <p className="text-danger errors">{errors["password"]}</p>
          </div>
        </div>
        <div className="row mb-3">
          <div>
            <input placeholder="password" type="password" name="passwordVerify" className="form-control" id="inputPassword2" value={passwordVerify} onChange={e => setPasswordVerify(e.target.value)}/>
            <p className="text-danger errors">{errors["passwordverify"]}</p>
            <p className="text-danger errors">{userexists}</p>
          </div>
        </div>
      
        <button type="submit" className="btn btn-primary col-12">Sign Up</button>
        <p className="msg"><a>already have an account? <Link to="./login">login</Link></a></p>
      </form>
    </div>
   </>
  );
}


export default CreateAccount