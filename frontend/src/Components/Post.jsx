import React, { useState } from "react";

import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardContent,
  Typography,
} from "@mui/material";

import { Divider } from "@mui/material";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { IconMenu, IconButton, Button } from "@mui/material";
import CommentIcon from "@mui/icons-material/Comment";

function Post(props) {
    const [liked, setLiked] = useState(true);
    const [show, setShow] = useState(false)
    const [comments, setComments] = useState([
        {
          "Comment_ID": 1,
          "User_ID": 4,
          "Post_ID": 19,
          "Comment": "leo odio porttitor id consequat in consequat ut nulla sed accumsan felis ut at dolor quis odio"
        },
        {
          "Comment_ID": 2,
          "User_ID": 10,
          "Post_ID": 9,
          "Comment": "amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien"
        },
        {
          "Comment_ID": 3,
          "User_ID": 10,
          "Post_ID": 10,
          "Comment": "montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis"
        },]);
    const viewComments = (id) => {
        setShow(!show)
        //call POST COMMENT API w ID
        //with the api response setComments()
    };
    return (
    <>
      <div className="row" justifyContent="flex-start">
        <Card className="post-card animated fadeInUp">
          <CardHeader title={props.post.Post_Title} />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {props.post.Post_Description}
            </Typography>
          </CardContent>
          <CardMedia style={{ paddingBottom: 12 }}>
            <img src={props.post.Post_image} alt="" height="250" />
          </CardMedia>

          <CardActions style={{ justifyContent: "flex-end" }}>
            {/* <Button icon={<CommentIcon/>}/> */}
            <IconButton aria-label="comment" onClick={()=>viewComments(props.key)}>
              <CommentIcon />
            </IconButton>

            <IconButton aria-label="favorite">
              {liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
            </IconButton>
          </CardActions>
        </Card>
      </div>

       {show? 
       
        <div style={{padding: 20, backgroundColor:"#b3e6ff"}}>
             <Typography variant="h4" >
                   Comments
            </Typography>
            {comments?.length>0 && comments.map((comment)=>{
                return(
                <Card className="post-card animated fadeInUp">
                <CardHeader title={comment.User_ID} />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                    {comment.Comment}
                    </Typography>
                </CardContent>
                
                </Card>
                )
           })} 
        </div>
        
        :<></>}
    </>
      
    );

}

export default Post;
