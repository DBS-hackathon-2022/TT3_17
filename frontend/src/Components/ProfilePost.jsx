import React, { useState, useEffect } from "react";
import axios from 'axios';
import Post from "./Post";

import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText,
} from "@mui/material/Card";

function ProfilePost(props) {
  const[posts, setPosts] = useState([])

  useEffect(async () => {
    const result = await axios(
    'http://127.0.0.1:8000/POST',
    );
    console.log(result.data)
    setPosts(result.data);
    },[]);

      return posts?.length>0 && posts.map((post) => {
        return (
          <div style={{ padding: 5 }}>
            <Post key={post.Post_ID} post={post} profileOwner={props.profileOwner}/>{" "}
          </div>
        );
      });
    
}

export default ProfilePost;
