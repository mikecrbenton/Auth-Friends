import React, { useState, useHistory, browserHistory } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import styled from 'styled-components';

function Form(props) {

  
  // LOCAL STATE FOR FORM 
  const [newFriend, setNewFriend] = useState(
     {
        id : "",
        name: "",
        age: "",
        email: ""
     }
  )
  // CHANGE------------
  const changeHandler = e => {
     e.persist();

     setNewFriend( {
       ...newFriend,
       [e.target.name] : e.target.value
     });
  };

  // SUBMIT------------
  const submitHandler = e => {
    e.preventDefault();
    
    axiosWithAuth()
      .post("/api/friends", newFriend )
      .then((res) => {
         console.log("COMING BACK FROM POST: ", res)
        window.localStorage.setItem("token", res.data.config.headers.authorizaton);
        // navigate the user to /protected (or whatever landing page)
        useHistory.push('/display');
      })
      .catch((err) => console.log(err));

    setNewFriend({
      id : "",
      name: "",
      age: "",
      email: ""
   });
  };
   
    return (
       
      <PostForm onSubmit={submitHandler}>

        <label htmlFor="name">
           Name
            <input
               type="text"
               name="name"
               onChange={changeHandler} // setState
               value={newFriend.name} //controlled input - view State
            />
        </label>

        <label htmlFor="age">
           Age   
            <input
               type="text"
               name="age"
               onChange={changeHandler} // setState
               value={newFriend.age} //controlled input - view State
            />
        </label>

        <label htmlFor="email">
           Email
            <input
               type="text"
               name="email"
               onChange={changeHandler} // setState
               value={newFriend.email} //controlled input-view State
            />
        </label>

        <button type="submit" onClick={props.getSmurf}>Add</button>
        
      </PostForm>
     
       
    );
}

export default Form;

const PostForm = styled.form`
   margin: 2em auto;
   display: flex;
   flex-direction: column;
   justify-content: center;
   width: 40%;
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
      margin: 1em;
   }
   button{
      background-color: #009B77;
      border: 1px solid #009B77;
      margin: 0 auto;
      color: whitesmoke;
      padding: .5em 2em;
      font-size: 1rem;
      box-shadow: 0px 0px 20px #121212;
      width: 25%;
   }
`;

