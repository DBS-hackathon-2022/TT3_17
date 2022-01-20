import React, { useEffect, useState } from 'react';

import Post from "./Post"


function ListOfPost (props) {
   
  const[posts, setPosts] = useState(props.posts)

  console.log(props)
    useEffect(() => {
      setPosts(props.posts)
    }, [posts])

    return(
    posts?.length>0 && posts.map((post) =>
        {      
            return (<div style={{padding: 5}}><Post key={post.Post_ID} post={post}/> </div>);
        }
    )
    );
  
}

export default ListOfPost;
