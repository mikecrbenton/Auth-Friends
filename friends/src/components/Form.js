import React, { useState, useHistory, browserHistory } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

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
       
      <form onSubmit={submitHandler}>

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
        
      </form>
     
       
    );
}

export default Form;

