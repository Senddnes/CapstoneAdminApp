import React from 'react'
import {auth} from "../../firebase"


class Comment extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            removed: this.props.removed
        }
        this.handleRemoveComment = this.handleRemoveComment.bind(this)
    }

    async handleRemoveComment() {
        let options = {
            method: 'DELETE',
            headers: {
                'auth': auth.currentUser.uid
            }
        }
        const url = `https://us-central1-capconcept-72a90.cloudfunctions.net/adminApi/hideComment/${this.props.postId}/${this.props.id}`
        await fetch(url, options).then(() => {
            this.setState({
                removed: true
            })
        })
    }

    render() {
        
        return (
            this.state.removed ?
            <div>
                <h2>Comment Removed</h2>
            </div>
            :
                 <div className='comment'>
                    <div className='userHbox'>
                        <h1>Comment</h1>
                        <h3>{this.props.displayName}</h3>
                    </div>
                    <p>{this.props.content}</p>
                    <small>{this.props.timestamp}</small>
                    <div className='userHbox'>
                        <button onClick={this.handleRemoveComment}>Remove Comment</button>
                    </div>
                </div>
        )
    }
}

export default Comment
