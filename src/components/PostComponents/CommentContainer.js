import React from 'react'
import Comment from './Comment'
import {auth} from "../../firebase"

class CommentContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: true
        }
    }

    componentDidMount() {
        this.setState({isLoading: true})
        const url = `https://us-central1-capconcept-72a90.cloudfunctions.net/adminApi/getComments/${this.props.id}`;
        getComments(url).then(res => res.json()).then(data => {
            let commentComponents = data.map(comment => {
                        return (
                            <Comment key={comment.id} id={comment.id} content={comment.comment.content} displayName={comment.comment.displayName} timestamp={comment.comment.timestamp} postId={this.props.id} removed={comment.comment.removed} uid={comment.comment.uid} />
                        )
                    })
                    this.setState({
                        comments: commentComponents,
                        isLoading: false
                    })
        })
    }


    render() {
        return (
            <div className="commentContainer">
                {this.state.isLoading ? <h1>Loading...</h1> : this.state.comments}
            </div>
            
        )
    }

}

async function getComments(url) {
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            auth: auth.currentUser.uid
        }
    })
    return response; 
}


export default CommentContainer