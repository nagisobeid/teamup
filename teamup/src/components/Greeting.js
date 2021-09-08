import './Greeting.css';
import Login from '../components/Login'
import CreateAccount from '../components/CreateAccount'
import react, {useState, useEffect} from 'react'
import video1 from '../components/video.mp4';
import bg from '../components/rhimg.jpg';

function LoginGreeting(props) {
    return <Login/>
}

function CreateAccountGreeting(props) {
    return <CreateAccount/>
}

function Greeting() {
  return (
    <>
    <img src={bg} alt="" />
    <Login/>
    <CreateAccount/>
   </>
  );
}


export default Home
