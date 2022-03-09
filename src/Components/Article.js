import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { Avatar } from '@material-ui/core';
import FullArticle from './FullArticle';
import { createDescription, stripHTML } from './StringUtils';
import { useHistory } from 'react-router-dom';
import Moment from 'react-moment';

const useStyles = makeStyles((theme) => ({
    card: {
      maxWidth: "100%"
    },
    media: {
      height: 240
    },
    cardActions: {
      display: "flex",
      margin: "0 10px",
      justifyContent: "space-between"
    },
    author: {
      display: "flex",
    }
  }));

const Article = (props) => {
  const history = useHistory();
  const classes = useStyles();

    function handleBlogClick() {
      history.push(`/${props.item.id}`);
      window.location.reload();
    }
    
    return (
        <div>
            <Card className={classes.card} onClick={handleBlogClick}>
              <CardActionArea>
                {
                  props.hideImg === true ? null :
                  <CardMedia
                    className={classes.media}
                    image={props.item.Hintergrundbild}
                    title={props.item.Titel}
                  />
                }

                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {props.item.Titel}
                  </Typography>
                  <Typography variant="body" color="textSecondary" component="p">
                    {createDescription(stripHTML(props.item.Content), 100)}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Avatar src={props.item.Profilbild}/>
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      {props.item.Autor}
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary" component="p">
                      <Moment format="DD MMM YYYY">{props.item.date}</Moment>
                    </Typography>
                  </Box>
                </Box>
              </CardActions>
            </Card>
        </div>
    )
}

export default Article
