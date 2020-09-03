import { Link, Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { axiosWithAuth } from "./utils/axiosWithAuth";
import React, { useState } from 'react';
import './App.css';

import PrivateRoute from "./components/PrivateRoute";
import Login from './components/Login'
import Display from './components/Display'
import Form from './components/Form'

function App() {

   // const [ friendsList, setFriendsList ] = useState([]);

   // const getData = () => {
   //    axiosWithAuth().get('/api/data')
   //       .then( (res) => {
   //          console.log(res)
   //          setFriendsList(...friendsList, res.data )
   //       })
   //       .catch( (err) => console.log(err) );
   // }

  return (
   <Router>
    <div className="App">
      
      <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/display">Display</Link>
          </li>
          <li>
            <Link to="/form">Form</Link>
          </li>
      </ul>

      <Switch>
         <PrivateRoute exact path="/display" component={Display} />
         <PrivateRoute exact path="/form" component={Form} />
         <Route path="/login" component={Login} />
         <Route component={Login} />
      </Switch>
   
    </div>
  </Router>
  );
}

export default App;
