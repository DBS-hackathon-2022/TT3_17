import React, { useState, useEffect } from "react";
//import Axios from "axios";
import Post from "../Components/NewPost";
import ProfilePost from "../Components/ProfilePost";
import Grid from "@mui/material/Grid";

function Profile() {
  const [posts, setPosts] = useState("");

  useEffect(() => {
    console.log(posts); //if post button was pressed, call posts API
  }, [posts]);

  return (
    <div className="container profile">
      <Grid container spacing={2}>
        <Grid item xs={3}>
          {/* user profile */}
          {/* <UserProfile/> */}
        </Grid>

        <Grid item xs={6}>
          {/* Add new post & all posts */}
          <Post stateChanger={setPosts} />
          <ProfilePost />
        </Grid>

        <Grid item xs={3}>
          {/* user profile */}
          {/* <UserProfile/> */}
        </Grid>
      </Grid>
    </div>
  );
}

//4 tables

export default Profile;
