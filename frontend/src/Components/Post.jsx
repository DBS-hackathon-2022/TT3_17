import React, { useState, useEffect } from "react";

import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardContent,
  Typography,
} from "@mui/material";

import {Paper, TextField, Alert} from '@mui/material';
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { IconMenu, IconButton, Button } from "@mui/material";
import CommentIcon from "@mui/icons-material/Comment";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
function Post(props, {stateChanger, ...rest}) {
    const [liked, setLiked] = useState(true);
    const [show, setShow] = useState(false)
    const[update, setUpdate] = useState(false)
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const[showAlert, setAlert] = useState(false)
    const[showDeleteAlert, setDeleteAlert] = useState(false)
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

    const deletePost = (id) => {
       console.log('delete')
        //call POST delete API
        setDeleteAlert(true)
    };

    const showUpdateCard = (id) => {
        setUpdate(!update)
        setTitle(props.post.Post_Title)
        setDescription(props.post.Post_Description)
    };

    useEffect(() => {
        setTimeout(() => {
          setAlert(false);
          setDeleteAlert(false)
        }, 8000);
      }, []);     

    const updatePost = (id) => {
        //call API w the input to add post
      
        console.log(title, description, id ) 
        console.log(update)
        setAlert(!showAlert)
        setUpdate(!update)
        stateChanger(title)
       
    };


    return (
    <>
        <div className="row" justifyContent="flex-start">
        {update?
         <Paper>
            <TextField placeholder={props.post.Post_Title}
                value={title}
                onChange={e => setTitle(e.target.value)}
                id="post" name="post" rows={1} fullWidth={true} style={{paddingBottom: 5}} />

            <TextField placeholder={props.post.Post_Description}
                value={description} 
                onChange={e => setDescription(e.target.value)}
                id="post" name="post" rows={2} fullWidth={true} multiline={true}/>
            <div style={{padding:10}} >

                <Button variant="contained" onClick={() => updatePost(props.post.Post_ID)}>
                    Update
                </Button>
            </div>
        </Paper>
        :
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

            {props.profileOwner? 
            <>
                <IconButton aria-label="delete" onClick={()=>deletePost(props.key)}>
                <DeleteIcon/>
                </IconButton>
                <IconButton aria-label="edit" onClick={()=>showUpdateCard(props.key)}>
                <EditIcon/>
                </IconButton>
            </>:<></>}
          </CardActions>
        </Card>
        }
      </div>
        
    {showAlert? 
        <Alert severity="success">
            Updated Post — <strong>Post has been successfully updated!</strong>
        </Alert>
    :<></>}

    {showDeleteAlert? 
        <Alert severity="error">
            Deleted Post — <strong>Post has been successfully delete!</strong>
        </Alert>:<></>}
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
