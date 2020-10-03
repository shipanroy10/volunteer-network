import React from 'react';
import { Button, Form } from 'react-bootstrap';

import './App.css';
import Information from './components/Form/Information';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NotFound from './components/NotFound/NotFound';
import Login from './components/Login/Login';

function App() {
  return (
    <div className="App">


      <Router>
      <Header></Header>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/information/:type">
            <Information></Information>
          </Route>
          <Route path="/">
            <Home></Home>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
   
   
   
    </div>
  );
}

export default App;
