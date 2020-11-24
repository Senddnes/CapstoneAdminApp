import React, {useContext} from "react";
import { UserContext } from "../providers/UserProvider";
import {auth} from "../firebase";
import Navbar from './Navbar/Navbar';
import UserSearch from './UserComponents/UserSearch'

const Users = () => {
  let user = useContext(UserContext);
  return (
        <div>
            <Navbar />
            <h1>Users</h1>
            <UserSearch />
            <button onClick = {() => {auth.signOut()}}>Sign out</button>
        </div>
  ) 
};


export default Users;