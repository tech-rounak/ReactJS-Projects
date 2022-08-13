import React, {Component}from 'react';
import axios from 'axios'
import Post from '../../components/Post/Post'
import './Posts.css';
import {Link} from 'react-router-dom';
class Posts extends Component{ 
        state  = {
            posts:[]
        } 
        componentDidMount(){
            console.log(this.props)
            axios.get('https://jsonplaceholder.typicode.com/posts').then(response=>{
            const posts = response.data.slice(0,4);
            const updatePosts= posts.map(post=>{
                return {
                    ...post, 
                    author:'Rounak'
                }
            })
            this.setState({posts:updatePosts})
                // console.log(response)
        })
        .catch(error=>{
            console.log(error);
            //    this.setState({error:true});
            })
            
        }
        postSelectedHandler = (id)=>{
            this.setState({selectedPostId:id})
        }
    render(){
        let renderPost = <p style ={{textAlign:'center'}}>Something went Wrong</p>

        if(!this.state.error){
            renderPost = this.state.posts.map(post =>{
            return( 
            <Link to={'/'+post.id} key={post.id}>
            <Post 
                title = {post.title} 
                author = {post.author}
                clicked = {()=>this.postSelectedHandler(post.id)}/>
            </Link>
            );
            });
    
        }
        return (
            <section className='Posts'>
                {renderPost}
            </section>
        );
    }
}
export default Posts;