import React, { useEffect, useState } from 'react';
import { axiosWithAuth } from "../utils/axiosWithAuth";

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
      <div>
         { friendsList && friendsList.map( (friend) => 
            <div key={friend.id}>
               <p>{friend.name}</p>
               <p>{friend.age}</p>
               <p>{friend.email}</p> 
            </div>   
         )}
      </div>
   )
}

export default Display;

/*
import React from 'react'
import { connect } from 'react-redux';
import styled from 'styled-components'

function SmurfList(props) {

   //console.log("IN SMURFLIST ", props.smurfArray);

      return (
         <SmurfListStyling>
            { props.smurfArray.map( (smurf) => 
                  <SmurfCard key={smurf.id}>
                     <p>{smurf.name}</p>
                     <p>{smurf.age}</p>
                     <p>{smurf.height}</p> 
                  </SmurfCard>   
            )}
         </SmurfListStyling>
      )
}

const mapStateToProps = (state) => {
   return {
      smurfArray: state.smurfArray
   }
}

export default connect( mapStateToProps, {} )(SmurfList);
*/