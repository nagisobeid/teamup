import './Login.css';
import react, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';

function Login() {
  return (
    <>
    <div className="home-choice-div col-lg-4 offset-lg-4 col-sm-6 offset-sm-3 col-8 offset-2 shadow-lg">
      <form className="form">
        <div className="row mb-3">
          <div>
            <input placeholder="email" type="email" className="form-control" id="inputEmail"/>
          </div>
        </div>
        <div className="row mb-3">
          <div>
            <input placeholder="password" type="password" className="form-control" id="inputPassword"/>
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