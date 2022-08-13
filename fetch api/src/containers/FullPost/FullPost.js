import React, { Component } from 'react';
import axios from 'axios';
import './FullPost.css';

class FullPost extends Component {
    state={
        posts:null,
        justDeleted:false
    }
    // shouldComponentUpdate(){   
    // //   console.log('[FullPost.js] shouldComponentUpdate');  
    // //   console.log(this.state.posts) 
    //   return !this.state.justDeleted;
    // }
    componentDidMount(){
        console.log(this.props);
        // console.log('[FullPost.js] ComponentDidUpdate');
        if(this.props.match.params.id){
            if((this.state.posts && this.props.id !== this.state.posts.id) || !this.state.posts){
                
                const url='https://jsonplaceholder.typicode.com/posts/' + this.props.match.params.id;

                axios.get(url)
                .then(response=>{
                    // console.log(response)
                    this.setState({posts:response.data,justDeleted:false})
                        // console.log(response)
                });
            }
        }
        else if(this.state.justDeleted){
            // let tmpDeleted = !this.state.justDeleted
             this.setState({justDeleted : false})
        }

    }
    // deleteFullPostHandler =()=> {
    //     this.setState({posts:null,justDeleted:true})
        
    // }
    render () {
        let post = <p style={{textAlign:'center'}}>Please select a Post!</p>;
        if(this.state.justDeleted){
            post = <p style={{textAlign:'center'}}>Please select a Post!</p>;
        }
        if(this.props.id && !this.state.justDeleted){
            post = <p>Loading..</p>
        }
        if(this.state.posts){
            post = (
                <div className="FullPost">
                    <h1>{this.state.posts.title}</h1>
                    <p>{this.state.posts.body}</p>
                    <div className="Edit">
                        <button className="Delete" >Delete</button>
                    </div>
                </div>

            );
        }
        return post;
    }
}

export default FullPost;