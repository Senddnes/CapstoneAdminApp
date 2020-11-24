import React, {useContext} from "react";
import { UserContext } from "../providers/UserProvider";
import {auth} from "../firebase";
import Navbar from './Navbar/Navbar';
import PostContainer from './PostComponents/PostContainer'

const Posts = () => {
  return (
    <div>
        <Navbar />
        <h1>Posts</h1>
        <PostContainer />
        <button onClick = {() => {auth.signOut()}}>Sign out</button>
    </div>
  ) 
};


export default Posts;