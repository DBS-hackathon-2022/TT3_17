import React, { Component } from "react";

import Post from "./Post";

import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText,
} from "@mui/material/Card";

class ProfilePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      posts: [
        {
          Post_ID: 1,
          Post_Title: "Relatable",
          Post_Description:
            "Walking up and down the aisles for what seems like hours.",
          Post_image:
            "https://preview.redd.it/jjvqtw9iapb81.gif?format=mp4&s=e333e78478df813b5b18ecd0905efc8b00ae210c",
        },
        {
          Post_ID: 2,
          Post_Title: "New Job",
          Post_Description: "Just finished my first week",
          Post_image:
            "https://preview.redd.it/op4nak4pvpb81.jpg?width=640&crop=smart&auto=webp&s=615dce736df9a82ae1e2136727e440a863a1ffbe",
        },
      ],
    };
  }
  render() {
    return this.state.posts.map((post) => {
      return (
        <div style={{ padding: 5 }}>
          <Post key={post.Post_ID} post={post} />{" "}
        </div>
      );
    });
  }
}

export default ProfilePost;
