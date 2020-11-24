import React, {useContext} from "react";
import { UserContext } from "../providers/UserProvider";
import {auth} from "../firebase";
import Navbar from './Navbar/Navbar';

const HomePage = () => {
  let user = useContext(UserContext);
  return (
    <div>
      <Navbar />
      <h1>Home</h1>
      <button onClick = {() => {auth.signOut()}}>Sign out</button>
    </div>
  ) 
};


export default HomePage;