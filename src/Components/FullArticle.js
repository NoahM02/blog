import { React, Component } from 'react';
import Typography from '@material-ui/core/Typography';
import classes from './Data/DataStyle.module.css';
// import classes from '../Components/FullArticle.css';
import DetailHeader from '../Components/Details/DetailHeader';
import Article from './Article';
import { db, auth } from "../firebase";
import Grid from "@material-ui/core/Grid";
import ReactHtmlParser from 'react-html-parser';
import DetailContent from './Details/DetailContent';
import EmbedYT from './EmbedYT';

class FullArticle extends Component {
    state = {
        otherPosts: [],
        currentItem: null,
    }

    handleClick = (id) => {
        this.props.history.push({ pathname: `/blog/${id}`});
    }

    unsubscribeBlogPosts = null

    componentDidMount() {
        const url = window.location.href;
        const id = url.substring(url.lastIndexOf('/') + 1);
        this.createSubscriptionsForItem(id);
    }

    createSubscriptionsForItem(id) {
        // this.setState({ currentItem: id });
        db.collection("Artikel")
        .get()
        .then((snapshot) => {
          const artikel = [];
          snapshot.forEach((doc) => {
            const data = doc.data();
            if (doc.id !== id){
                const article = {
                    ...data,
                    date: new Date(data.Datum.seconds * 1000),
                    id: doc.id
                }
                artikel.push(article);
            }
            else if (doc.id === id){
                const currentArt = {
                    ...data,
                    date: new Date(data.Datum.seconds * 1000),
                    // id: doc.id
                }
                this.setState({
                    currentItem: currentArt,
                })
            }
          });
          artikel.sort((a, b) => a.date.getTime() - b.date.getTime());
          this.setState({
            otherPosts: artikel,
          });
        })
        .catch((error) => console.log(error));
    }

    createOtherPostsFeed() {
        let blogItems = null;
        if (this.state.otherPosts != null) {
            blogItems = this.state.otherPosts.map((post) =>
                <div key={post.id} className={classes.BlogCardSpacing}>
                    <Article hideImg={true} item={post} onClick={this.handleClick} />
                </div>
            );
        }
        return blogItems;
    }
    render(){
        return this.state.currentItem != null ? (
            <div className={classes.Container}>
                <DetailHeader title={this.state.currentItem.Titel} image={this.state.currentItem.Hintergrundbild} />
                <Grid container spacing={0}>
                    <Grid item md={9} xs={12}>
                        <div className={classes.DetailSpacing}>
                            <DetailContent
                                title={this.state.currentItem.Titel}
                                date={this.state.currentItem.date}>
                                {ReactHtmlParser(this.state.currentItem.Content)}
                            </DetailContent>
                            <EmbedYT url={this.state.currentItem.Video}/>
                        </div>
                    </Grid>
                    <Grid item md={3} xs={12}>
                        <div className={classes.Divider} />
                        {this.createOtherPostsFeed()}
                    </Grid>
                </Grid>
                <div className={classes.Footer} />
            </div>
        ) : null;
    }
}

export default FullArticle
