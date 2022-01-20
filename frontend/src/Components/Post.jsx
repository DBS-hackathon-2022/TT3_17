import React, { Component } from 'react';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardContent, Typography} from '@mui/material';
import {FlatButton} from '@mui/material';
import {Divider} from '@mui/material';
import {IconMenu, IconButton, MenuItem} from '@mui/material';


class Post extends Component {
  constructor(props) {
    super(props);
  }
  render() {
   
      return (
        <div className="row" justifyContent="flex-start">
          <Card className="post-card animated fadeInUp" >
            <CardHeader
                title={this.props.post.Post_Title}
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {this.props.post.Post_Description}
                </Typography>
            </CardContent>
            <CardMedia style={{paddingBottom:12}}>
              <img src={this.props.post.Post_image} alt="" height="250" />
            </CardMedia> 

            <Divider>

            </Divider>
          
          </Card>
        </div>
      );
    }
  }

  export default Post;
