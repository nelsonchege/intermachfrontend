import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Landing from './components/Landing/Landing';
import Signup from './components/Pages/Signup';
import Login from './components/Pages/Login';
import About from './components/Pages/About';
import CreateProfile from './components/Pages/CreateProfile';
import Home from './components/Home/Home';
import MyMatches from './components/Pages/MyMatches';
import MyAccount from './components/Pages/MyAccount';
function App() {
  return (
    <Router>
      <Switch>
      <Route exact path="/" >
            <Landing />
      </Route>
      <Route exact path="/About">
          <About />
      </Route>
      <Route exact path="/signup">
          <Signup />
      </Route>
      <Route exact path="/login">
          <Login />
      </Route>
      <Route exact path="/CreateProfile">
          <CreateProfile />
      </Route>
      <Route exact path="/Home">
          <Home />
      </Route>
      <Route exact path="/myAccount">
          <MyAccount />
      </Route>
      <Route exact path="/myMatches">
          <MyMatches />
      </Route>
      </Switch>
    </Router>
    
  );
}

export default App;
