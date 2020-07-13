import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import Error from './pages/Error';
import SingleRoom from './pages/SingleRoom';
import { Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar'
function App() {
  return <>
  <Navbar/>
  <Switch>
  <Route path="/" exact component={Home}/>
  <Route path="/rooms" exact component={Rooms}/>
  <Route path="/rooms/:slug" exact component={SingleRoom}/>
  <Route component={Error}/>
  </Switch>
      
  </>;
}

export default App;
