import React from "react";
import Post from '../Components/NewPost'
import ListOfPost from '../Components/ListOfPost'
import Grid from '@mui/material/Grid';
function Home() {
  return (
    <div className="container main-content">
      <Grid container spacing={2}>

        <Grid item xs={3}>
          {/* user profile */}
          {/* <UserProfile/> */}

        </Grid>

        <Grid item xs={6}>
           {/* Add new post & all posts */}
          <Post />
          <ListOfPost/>
        </Grid>
        <Grid item xs={3}>
          {/* user profile */}
          {/* <UserProfile/> */}

        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
