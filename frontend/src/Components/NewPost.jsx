import React, {Component, useEffect,useState} from 'react';


import {Paper, TextField} from '@mui/material';
import Button from '@mui/material/Button';
// import SendIcon from '@mui/icons-material/Send';
function Post({stateChanger, ...rest}){
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const addPost = () => {
        //call API w the input to add post
        console.log(title, description) 
        stateChanger(title)
       
    };

    return(
        <div className="row">
            <Paper>
                <TextField placeholder="Post Title"
                    value={title} 
                    onInput={e => setTitle(e.target.value)}
                    id="post" name="post" rows={1} fullWidth={true} style={{paddingBottom: 5}} />

                <TextField placeholder="Describe what you are feeling"
                    value={description} 
                    onInput={e => setDescription(e.target.value)}
                    id="post" name="post" rows={2} fullWidth={true} multiline={true}/>
                <div style={{padding:10}} >

                    <Button variant="contained" onClick={() => addPost()}>
                        POST
                    </Button>
                </div>
            </Paper>
        </div>
    )
    

}

export default Post;