import React from "react";
import Article from "../Article";
import { db, auth } from "../../firebase";
import Grid from "@material-ui/core/Grid";
import { createDescription, stripHTML } from "../StringUtils";
import Fade from "@material-ui/core/Fade";
import classes from './DataStyle.module.css';

class Main extends React.Component {
  state = { Artikel: [] };

  componentDidMount() {
    db.collection("Artikel")
      .get()
      .then((snapshot) => {
        const artikel = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          const item = {
            ...data,
            date: new Date(data.Datum.seconds * 1000),
            id: doc.id
          }
          artikel.push(item);
        });
        this.setState({
          Artikel: artikel,
        });
      })
      .catch((error) => console.log(error));
  }

  createBlogFeed() {
    const sortedPosts = this.state.Artikel.sort((a, b) => b.date.getTime() - a.date.getTime())
    const blogItems = sortedPosts.map((artikel) => {
        const p = {
          ...artikel,
        };

        return (
            <Grid item xs={12} sm={6} md={4} key={p.id}>
              <Article item={p} />
            </Grid>
        );
      });

    return blogItems;
  }

  render() {
    return (
      <div>
        <br></br>
        {
            <Fade in timeout={{ enter: 1000 }}>
                <div className={classes.Container}>
                <Grid container spacing={3}>
                    {this.createBlogFeed()}
                </Grid>
                <div className={classes.Footer} />
                </div>
            </Fade>
        }
      </div>
    );
  }
}

export default Main;
