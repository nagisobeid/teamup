import './Home.css';
import Login from '../components/Login'
import CreateAccount from '../components/CreateAccount'
import react, {useState, useEffect} from 'react'
import logo from '../components/teamup.png';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {Link} from 'react-router-dom';

function Home() {
  return (
    <>
    <div className="container">
      <div className="row header-row">
        <div className="col">
          <img src={logo}/>
        </div>
        <div className="col">
          <Link className="link" to="./login">Login</Link>
          <Link className="link" to="./createaccount">Sign Up</Link>
        </div>
      </div>
    <div className="row second-row">
    <div class="col col-lg-12 search">
      <input type="text" class="form-control search shadow-lg" id="search" placeholder="search event"/>
      </div>
    </div>
    <div className="row main-row shadow-lg">
      <div class="col list-icons shadow-lg">
      <span class="dot"></span>
      <span class="dot"></span>
      <span class="dot"></span>
      <span class="dot"></span>
      <span class="dot"></span>
      <span class="dot"></span>
      <span class="dot"></span>
      <span class="dot"></span>
      <span class="dot"></span>
      <span class="dot"></span>
      <span class="dot"></span>
      <span class="dot"></span>
      <span class="dot"></span>
      <span class="dot"></span>
      </div>
    </div>
      <div className="category-container col-lg-3 col-sm-4 ">
      <div class="col col-lg-12 search">
        <input type="text" class="form-control search-city shadow-lg" id="search-city" placeholder="search city"/>
      </div>
      <div className="list-group shadow-lg">
        <button type="button" class="list-group-item list-group-item-action active" aria-current="true">
          Merced
        </button>
        <button type="button" class="list-group-item list-group-item-action">Clovis</button>
        <button type="button" class="list-group-item list-group-item-action">Reedley</button>
        <button type="button" class="list-group-item list-group-item-action">Fresno</button>
        <button type="button" class="list-group-item list-group-item-action">Sanger</button>
      </div>
      </div>
      </div>
   </>
  );
}


export default Home
