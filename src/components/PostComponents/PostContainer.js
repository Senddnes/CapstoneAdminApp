import React from 'react'
import Post from './Post'
import {auth} from "../../firebase"

class PostContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: true
        }
        this.handleLoadNextPosts = this.handleLoadNextPosts.bind(this);
        this.handleRemovePost = this.handleRemovePost.bind(this);
    }

    componentDidMount() {
        this.setState({isLoading: true})
        if(this.props.profile) {
            const url = `https://us-central1-capconcept-72a90.cloudfunctions.net/adminApi/getUsersPosts/${this.props.uid}`
            getPosts(url).then(res => res.json()).then(data => {
                let postComponents = data.map(post => {
                    return (

                          <Post key={post.id} id={post.id} displayName={post.post.displayName} content={post.post.content} timestamp={post.post.timestamp} uid={post.post.uid} comments={post.post.comments} />

                    )
                })
                this.setState({
                    posts: postComponents,
                    isLoading: false
                })
            })

        } else {
            const url = 'https://us-central1-capconcept-72a90.cloudfunctions.net/adminApi/getPosts/start';
        getPosts(url).then(res => res.json()).then(data => {
            let postComponents = data.map(post => {
                        return (

                              <Post key={post.id} id={post.id} displayName={post.post.displayName} content={post.post.content} timestamp={post.post.timestamp} uid={post.post.uid} comments={post.post.comments} />

                        )
                    })
                    this.setState({
                        posts: postComponents,
                        isLoading: false,
                        lastPost: data[data.length-1].id
                    })
        })
        }
    }

    async handleRemovePost(id, uid) {
        let options = {
            method: 'DELETE',
            headers: {
                'auth': auth.currentUser.uid,
                'uid': uid
            }
        }
        const url = `https://us-central1-capconcept-72a90.cloudfunctions.net/adminApi/hidePost/${id}`
        await fetch(url, options).then(() => {
            //twiddle?
        })
    }

    async handleLoadNextPosts() {
        const url = `https://us-central1-capconcept-72a90.cloudfunctions.net/adminApi/getPosts/${this.state.lastPost}`
        getPosts(url).then(res => res.json()).then(data => {
            let newPostsRaw = data.map(post => {
                        return (
  
                              <Post key={post.id} id={post.id} displayName={post.post.displayName} content={post.post.content} likes={post.post.likes} uid={post.post.uid} />

                        )
                    })
                    let newPosts = [];
                    for(let i = 1; i<4; i++) {
                        newPosts.push(newPostsRaw[i])
                    }
                    let posts = this.state.posts.concat(newPosts)
                    
                    this.setState({
                        posts: posts,
                        lastPost: data[data.length-1].id
                    })
        })
    }


    render() {
        return (
            this.props.profile ?
            <div className="postContainer">
                {this.state.isLoading ? <h1>Loading...</h1> : this.state.posts}
            </div>
            :
            <div className="postContainer">
                {this.state.isLoading ? <h1>Loading...</h1> : this.state.posts}
                <button onClick={this.handleLoadNextPosts}>Load Next 3 Posts</button>
            </div>
            
        )
    }

}

async function getPosts(url) {
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            auth: auth.currentUser.uid
        }
    })
    return response; 
}


export default PostContainer