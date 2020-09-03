import React, { useEffect, useState } from 'react';
import { axiosWithAuth } from "../utils/axiosWithAuth";
import styled from 'styled-components';

function Display( props ) {

const [ friendsList, setFriendsList ] = useState([]);

   // const getData = () => {
   //    axiosWithAuth().get('/api/data')
   //       .then( (res) => {
   //          console.log(res)
   //       })
   //       .catch( (err) => console.log(err) );
   // }

   useEffect( () => {
      axiosWithAuth().get('/api/friends')
         .then( (res) => {
            console.log(res.data)
            setFriendsList(...friendsList, res.data )
         })
         .catch( (err) => console.log(err) );
   },[])



   return (
      <FriendsList>
         { friendsList && friendsList.map( (friend) => 
            <Friend key={friend.id}>
               <p>{friend.name}</p>
               <p>{friend.age}</p>
               <p>{friend.email}</p> 
            </Friend>   
         )}
      </FriendsList>
   )
}

export default Display;

const FriendsList = styled.div`
   display: flex;
   justify-content: space-evenly;
   flex-wrap: wrap;
`;

const Friend = styled.div`
   border: 2px solid whitesmoke;
   padding: 1em;
   margin: .5em 0;
   box-shadow: 2px 2px 5px #000;

`;