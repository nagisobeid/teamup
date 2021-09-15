import './NavStatus.css';
import react, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Login from './Login'
import { useHistory } from "react-router-dom";
import React from 'react';
import { FA } from '@fortawesome/fontawesome-free/js/all'


function LoginSignup(props) {
    return (
        <>
        <Link className="link" to="./login">Login</Link>
        <Link className="link" to="./createaccount">Sign Up</Link>
        </>
    );
  }
  
  function UserLoggedIn(props) {
    return (
        <>
        <i className="fas fa-user link"></i>
        </>
    );
  }


class NavStatus extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isLoggedIn: true};
        //this.setState({isLoggedIn: true});
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let status;
        if (isLoggedIn) {
          status = <UserLoggedIn/>;
        } else {
          status = <LoginSignup/>;
        }
    
        return (
            status
        );
      }
}




export default NavStatus;