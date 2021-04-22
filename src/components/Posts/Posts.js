import React from 'react'
import Post from './Post/Post'
import useStyle from './styles';
const Posts = () => {
    const classes = useStyle();
    return (
        <React.Fragment>
        <h1> POSTS </h1>
        <Post/>
        <Post/>
        </React.Fragment>
    )
}

export default Posts;
