import React, {useContext} from "react";
import { Router, Link } from "@reach/router";
import SignIn from "./SignIn";
import HomePage from "./HomePage";
import Posts from "./Posts";
import PasswordReset from "./PasswordReset";
import { UserContext } from "../providers/UserProvider";
import Users from './Users'

function Application() {
    const user = useContext(UserContext);
  return (
    user ?
        <Router>
          <HomePage path='/'/>
          <Posts path='/posts'/>
          <Users path='/users'/>
        </Router>
      :
        <Router>
            <SignIn path="/" />
            <PasswordReset path = 'passwordReset' />
        </Router>
  );
}

export default Application;