import React, {useContext} from "react";
import { UserContext } from "../providers/UserProvider";
import {auth} from "../firebase";
import Navbar from './Navbar/Navbar';
import UserProfile from './UserComponents/UserProfile'
import PostContainer from './PostComponents/PostContainer'

const Profile = (props) => {
  let user = useContext(UserContext);
  return (
        <div>
            <Navbar />
            <h1>Profile</h1>
            <UserProfile uid={props.uid}/>
            <PostContainer profile={true} uid={props.uid}/>
            <button onClick = {() => {auth.signOut()}}>Sign out</button>
        </div>
  ) 
};


export default Profile;