import React, {Component} from 'react';


import {Paper, TextField} from '@mui/material';
import Button from '@mui/material/Button';
// import SendIcon from '@mui/icons-material/Send';
class Post extends Component{

    render(){
        return(
            <div className="row">
                <Paper>
                    <TextField placeholder="Describe what you are feeling"
                    id="post" name="post" rows={2} fullWidth={true} multiline={true}/>
                    <div style={{padding:10}} >
                        {/* <IconButton><SendIcon/></IconButton> */}
                        <Button variant="contained">
                            POST
                        </Button>
                    </div>
                </Paper>
            </div>
        )
    }

}

export default Post;