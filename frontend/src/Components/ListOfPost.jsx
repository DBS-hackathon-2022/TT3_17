import React, { Component } from "react";

import Post from "./Post";

class ListOfPost extends Component {
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
        {
          Post_ID: 3,
          Post_Title: "New Friend",
          Post_Description: "Happy times",
          Post_image:
            "https://preview.redd.it/21ghjyhnjmb81.gif?width=960&format=mp4&s=69ae3f05ee59793703165d1b726159dcc1205f1f",
        },
        {
          Post_ID: 4,
          Post_Title: "Gameboy",
          Post_Description: "Hello old friend",
          Post_image: "https://i.redd.it/in0kdzuienb81.jpg",
        },
        {
          Post_ID: 5,
          Post_Title: "Dinosaur",
          Post_Description: "Sweet dreams about your loved ones",
          Post_image:
            "https://preview.redd.it/rwtgu96btqb81.jpg?width=960&crop=smart&auto=webp&s=13b18d9fb9355b81349568a124955458f0f8d2e3",
        },
        {
          Post_ID: 6,
          Post_Title: "Sked penguin",
          Post_Description: "SpoOOooOOoky",
          Post_image:
            "https://preview.redd.it/qcq4ktmgzqb81.jpg?width=960&crop=smart&auto=webp&s=52f3cd201555bf09534b903246df9cd0dd995264",
        },
        {
          Post_ID: 7,
          Post_Title: "Studying",
          Post_Description: "Is this what its supposed to feel like?",
          Post_image: "https://i.redd.it/600fjw70hqb81.jpg",
        },
        {
          Post_ID: 8,
          Post_Title: "Mother",
          Post_Description: "My mom sees no difference here",
          Post_image:
            "https://preview.redd.it/7m3h2v230qb81.jpg?width=640&crop=smart&auto=webp&s=9a6617330a192b1801c1af857233b28608d48b19",
        },
        {
          Post_ID: 9,
          Post_Title: "Buddy",
          Post_Description: "You and me, we are friends now!",
          Post_image:
            "https://preview.redd.it/iwxtvicntqb81.gif?width=640&format=mp4&s=6cebc45c632020c2629dbf39be4492d55e6dce35",
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

export default ListOfPost;
