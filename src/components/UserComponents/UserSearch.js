import React from 'react'
import {auth} from "../../firebase"
import User from './User'

class UserSearch extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
            search: null
        }
        this.searchSpace = this.searchSpace.bind(this);
        this.render = this.render.bind(this)
        
    }

    componentDidMount() {
        this.setState({isLoading: true})
        const url = 'https://us-central1-capconcept-72a90.cloudfunctions.net/adminApi/getUsers';
        getUsers(url).then(res => res.json()).then(data => {
            let userComponents = data;
                    this.setState({
                        users: userComponents,
                        isLoading: false
                    })
        })
    }

    searchSpace(event) {
        let keyword = event.target.value;
        this.setState({search:keyword})
    }



    render() {
        let filteredUsers = [];
        if(!this.state.isLoading) {
        filteredUsers = this.state.users.filter((data)=>{
            if(this.state.search == null)
                return data
            else if(data.displayName.toLowerCase().includes(this.state.search.toLowerCase()) || data.email.toLowerCase().includes(this.state.search.toLowerCase())){
                return data
            }
          }).map(user => {
              let disabled = 'false'
              if(user.disabled) {
                disabled = 'true'
                  }
            return (
                <User key={user.uid} uid={user.uid} email={user.email} displayName={user.displayName} signUpDate={user.signUpDate} disabled={disabled} />
            )
        })
    }
        const elementStyle ={
            border:'solid',
            borderRadius:'10px',
            left:'10vh',
            height:'3vh',
            width:'20vh',
            marginTop:'25px',
            marginBottom:'25px'
          }
        return (
            <div className="userSearch">
                <h3>Search:</h3>
                <input type="text" placeholder="Enter item to be searched" style={elementStyle} onChange={(e)=>this.searchSpace(e)} />
                {this.state.isLoading ? <h1>Loading...</h1> : filteredUsers}
            </div>
            
        )
    }

}

async function getUsers(url) {
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            auth: auth.currentUser.uid
        }
    })
    return response; 
}



export default UserSearch