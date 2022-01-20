import React, {Component, useEffect,useState} from 'react';
import axios from 'axios';

import {Paper, TextField} from '@mui/material';
import Button from '@mui/material/Button';
// import SendIcon from '@mui/icons-material/Send';
function Post({stateChanger, ...rest}){
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    async function addPost  ()  {
        //call API w the input to add post
        // console.log(title, description)
        await axios.post('http://127.0.0.1:8000/POST/', {
            Post_Title: 'testing',
            Post_Description: '0',
            Post_image:null
            }, {
            headers: {
            'Content-Type': 'application/json'
            }
            })
            .then(response => {
            console.log(response)
            })
            .catch(error => {
            console.log(error)
            });
        // fetch('http://127.0.0.1:8000/POST/', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: {
        //         Post_Title: 'testing',
        //         Post_Description: '0',
        //         Post_image:""
        //     },
        //     })
        //     .catch((err) => console.log('error')) 

        // const body =  {Post_Title: 'testing',
        //              Post_Description: '0',
        //              Post_image:""}
        // const result =  axios.post(
        // 'http://127.0.0.1:8000/POST/',body
        // );
        stateChanger(title)
       
    };

    // useEffect(()=>{
    //     fetch('http://127.0.0.1:8000/POST/', {​
    //     method: 'POST',
    //     headers: {​
    //         'Content-Type': 'application/json',
    //     }​,
    //     body: JSON.stringify({​
    //         Post_Title: 'testing',
    //         Post_Description: '0',
    //         Post_image:null
    //     }​),
    //     }​
    //     .catch((err) => console.log('error')) 
    //     )
    // },[])


    //  useEffect(async () => {
    //      const body =  {Post_Title: 'testing',
    //              Post_Description: '0',
    //              Post_image:null}
    // const result = await axios.post(
    // 'http://127.0.0.1:8000/POST/',body
    // );
    // console.log('test'+result)

    // },[]);
    useEffect(()=>{
        fetch('http://127.0.0.1:8000/POST/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            Post_Title: 'testing',
            Post_Description: '0',
            Post_image:null
        }),
        })
        .catch((err) => console.log('error'))
        
    },[])



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