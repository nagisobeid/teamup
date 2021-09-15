
import './App.css';
import Home from './components/Home'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Login from './components/Login'
import CreateAccount from './components/CreateAccount'
import bg from './components/rhimg.jpg';


function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/login" component={Login}/>
          <Route path="/createaccount" component={CreateAccount}/>
        </Switch>
        
      </Router>
    </>
  )
}

export default App;
