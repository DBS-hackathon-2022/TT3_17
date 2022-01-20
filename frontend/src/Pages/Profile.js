import React, { useState } from "react";
//import Axios from "axios";
import Post from "../Components/NewPost";
import ProfilePost from "../Components/ProfilePost";
import Grid from "@mui/material/Grid";

function Profile() {
  return (
    <div className="container profile">
      <Grid container spacing={2}>
        <Grid item xs={3}>
          {/* user profile */}
          {/* <UserProfile/> */}
        </Grid>

        <Grid item xs={6}>
          {/* Add new post & all posts */}
          <Post />
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
