import React from "react";
// import axios from 'axios'
import { axiosWithAuth } from "../utils/axiosWithAuth";
import styled from 'styled-components';

class Login extends React.Component {

  state = {
    credentials: {
      username: "",
      password: ""
    }
  };

  handleChange = (e) => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = (e) => {
    e.preventDefault();
    // Make a POST request and send the credentials object to the api

    axiosWithAuth()        // sending to api
      .post("/api/login", this.state.credentials)
      .then((res) => {             // protected route looking for "token"
        window.localStorage.setItem("token", res.data.payload);
        // redirect
        this.props.history.push("/display");
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <LoginForm onSubmit={this.login}>
          
        <label htmlFor="username">
           Username 
          <input
            type="text"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
         </label>

         <label htmlFor="password">
           Password
          <input
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          </label>
          <button>Log in</button>

        </LoginForm>
      </div>
    );
  }
}

export default Login;

const LoginForm = styled.form`
   margin: 2em auto;
   display: flex;
   flex-direction: column;
   justify-content: center;
   width: 70%;
   padding: 3em;
   border: 3px solid whitesmoke;
   box-shadow: 0px 0px 20px #121212;

   input{
      background-color: #2d2d37;
      border: none;
      border: 2px solid whitesmoke;
      color: whitesmoke;
      font-family: lato; 
      font-size: 1rem;
      font-weight: 900;
      padding: .5em .3em;
      margin: 1em 0 1em .5em;
   }
   button{
      background-color: #009B77;
      border: 1px solid #009B77;
      width: 50%;
      margin: 1em auto;
      color: whitesmoke;
      padding: .5em 2em;
      font-size: 1rem;
      box-shadow: 0px 0px 20px #121212;
   }
`;