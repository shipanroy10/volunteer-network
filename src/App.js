import React, { createContext, useState } from 'react';
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
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

import AboutTask from './components/AboutTask/AboutTask';
import Inventory from './components/Inventory/Inventory';
export const UserContext = createContext()
function App() {
  const [loggedInUser,setLoggedInUser] = useState({})
  return (
   <div>
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
      
    

      <Router>
      <Header></Header>
     
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/information/:type">
            <Information></Information>
          </PrivateRoute>
         <PrivateRoute path="/update">
        <Inventory></Inventory>
         </PrivateRoute>
          <Route path="/aboutTask">
            <AboutTask></AboutTask>
          </Route>
          <Route path="/">
            <Home></Home>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
   
     </UserContext.Provider>
   
     </div>
  );
}

export default App;
