import React, { Component, createContext } from "react";
import { auth } from "../firebase";

export const UserContext = createContext({ user: null });

auth.setPersistence('none');

class UserProvider extends Component {
  state = {
    user: null
  };

  componentDidMount = async () => {
    auth.onAuthStateChanged(async userAuth => {
      const user = await generateUserInfo(userAuth);
      this.setState({ user });
    });
  };
  render() {
    return (
      <UserContext.Provider value={this.state.user}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

function generateUserInfo(userAuth) {
    let user = {};
    if(userAuth) {
        user = {
            uid: userAuth.uid,
            email: userAuth.email
        }
    } else {
        user = null;
    }
    return user;
}

export default UserProvider;