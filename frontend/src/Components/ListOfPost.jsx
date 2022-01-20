import React, { useEffect, useState } from 'react';

import Post from "./Post"


function ListOfPost (props) {
   
  const[posts, setPosts] = useState(props.posts)
  const[state, setState]=useState('');

  console.log(props)
    useEffect(() => {
      setPosts(props.posts)
    }, [posts])

    useEffect(() => {
      
      //if delete button was press get POSTS API again & set post
      //setPosts(props.posts)

    }, [state])

    return(
    posts?.length>0 && posts.map((post) =>
        {      
            return (<div style={{padding: 5}}><Post key={post.Post_ID} post={post}  stateChanger={setState} /> </div>);
        }
    )
    );
  
}

export default ListOfPost;
