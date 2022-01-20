import React, { Component } from "react";

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

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: true,
    };
  }
  render() {
    return (
      <div className="row" justifyContent="flex-start">
        <Card className="post-card animated fadeInUp">
          <CardHeader title={this.props.post.Post_Title} />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {this.props.post.Post_Description}
            </Typography>
          </CardContent>
          <CardMedia style={{ paddingBottom: 12 }}>
            <img src={this.props.post.Post_image} alt="" height="250" />
          </CardMedia>

          <CardActions style={{ justifyContent: "flex-end" }}>
            {/* <Button icon={<CommentIcon/>}/> */}
            <IconButton aria-label="comment">
              <CommentIcon />
            </IconButton>

            <IconButton aria-label="favorite">
              {this.state.liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
            </IconButton>
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default Post;
