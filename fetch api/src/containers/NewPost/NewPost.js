import React, { Component } from 'react';
import axios from 'axios';
import './NewPost.css';

class NewPost extends Component {
    state = {
        title: '',
        content: '',
        author: 'Max'
    }
    postDatahandler = ()=>{
        const data={
            title:this.state.title,
            author:this.state.author,
            body:this.state.content
        }
    const url='https://jsonplaceholder.typicode.com/posts';
    axios.post(url,data)
    .then(response=>{
        console.log(response)
    }).catch(err=>{
        console.log(err);
    });

    }
    render () {
        return (
            <div className="NewPost">
                <h1>Add a Post</h1>
                <label>Title</label>
                <input type="text" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />
                <label>Content</label>
                <textarea rows="4" value={this.state.content} onChange={(event) => this.setState({content: event.target.value})} />
                <label>Author</label>
                <select value={this.state.author} onChange={(event) => this.setState({author: event.target.value})}>
                    <option value="Max">Max</option>
                    <option value="Manu">Manu</option>
                </select>
                <button onClick={this.postDatahandler}>Add Post</button>
            </div>
        );
    }
}

export default NewPost;