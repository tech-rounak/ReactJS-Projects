import React, { Component } from 'react';
import { Route,Link,Switch,Redirect} from 'react-router-dom';
// import axios from 'axios';
import './Blog.css';
import Posts from '../Posts/Posts'
import NewPost from'../NewPost/NewPost'
import FullPost from '../FullPost/FullPost'
class Blog extends Component {
    render () {
       
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><Link to ="/">Home</Link></li>
                            <li><Link to ={{
                                pathname:"/new-post",/*absolute*/
                                // pathname:"this.props.match.url"+/new-post relative path
                                hash:"#submit",
                                search: '?quick-submit=true'
                            }}>New Post</Link></li>
                        </ul>
                    </nav>
                </header>

                <Route path = "/" exact component = {Posts}/>
                <Switch>  
                    <Route path = "/new-post" exact component = {NewPost}/>
                    <Route path = "/:id" exact component = {FullPost}/>
                    {/* <Redirect from ="/" to ="/posts" /> */}
                </Switch>
                </div>
        );
    }
}

export default Blog;