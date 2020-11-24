import React from 'react'
import {auth} from "../../firebase"

class User extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            disabled: props.disabled
        }
        this.handleDisable = this.handleDisable.bind(this)
    }



    render() {

        return (
                <div>
                    <ul>
                        <li style={{position: 'relative', left: '10vh' }}>
                            <span style={{paddingRight: '10px'}}>uid: {this.props.uid}</span>
                            <span style={{paddingRight: '10px'}}>displayName: {this.props.displayName}</span>
                            <span style={{paddingRight: '10px'}}>email: {this.props.email}</span>
                            <span style={{paddingRight: '10px'}}>signUpDate: {this.props.signUpDate}</span>
                            <span style={{paddingRight: '10px'}}>disabled: {this.state.disabled}</span>
                            <span style={{paddingRight: '10px'}}><button onClick={(e) => this.handleDisable(e)}>Disable this user</button></span>
                        </li>
                    </ul>
                </div>
        )
    }

    handleDisable(event) {
        let uid = this.props.uid
        console.log(uid)
        let url = `https://us-central1-capconcept-72a90.cloudfunctions.net/adminApi/disableUser/${uid}`
        fetch(url, {
            method: 'POST',
            headers: {
                auth: auth.currentUser.uid
            }
        }).then(res => {
            this.setState({
                disabled: 'true'
            })
        })
    }
}

export default User
