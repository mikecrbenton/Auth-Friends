import { Link, Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { axiosWithAuth } from "./utils/axiosWithAuth";
import styled from 'styled-components';
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
    <MainContainer className="App">
      
      <ul>
          <li>
            <Link 
               to="/login"
               style={{ textDecoration: 'none', color: 'whitesmoke', fontSize: '1.5rem' }}
               >Login</Link>
          </li>
          <li>
            <Link 
               to="/display"
               style={{ textDecoration: 'none', color: 'whitesmoke', fontSize: '1.5rem'}}
               >Display</Link>
          </li>
          <li>
            <Link 
               to="/form"
               style={{ textDecoration: 'none', color: 'whitesmoke', fontSize: '1.5rem'}}
               >Form</Link>
          </li>
      </ul>

      <Switch>
         <PrivateRoute exact path="/display" component={Display} />
         <PrivateRoute exact path="/form" component={Form} />
         <Route path="/login" component={Login} />
      </Switch>
   
    </MainContainer>
  </Router>
  );
}

export default App;

const MainContainer = styled.div`

  ul{
     display: flex;
     justify-content: center;

      li{
            list-style-type: none;
            margin: 1em ;
      }
   }
`;


