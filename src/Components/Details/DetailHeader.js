import { Card, CardContent, Typography, CardMedia } from '@material-ui/core';
import PropTypes from 'prop-types';
// import classes from '../Details/DetailHeader.css';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    DetailHeader: {
        marginTop: "24px",
        marginBottom: "24px",
        width: "80%",
        position: "absolute",
        left: "50%",
        transform: "translate(-50%, 0)",
    },
    Overlay: {
        padding: "80px",
        backgroundColor: "rgba(0, 0, 0, 0.3)"
    },
    Header: {
        width: "100%",
        color: "#f0f0f0",
    }
  }));

const DetailHeader = (props) => {
    const classes = useStyles();
    // <Card className={classes.DetailHeader}>
    //     <CardMedia image={props.image} title={'Thumbnail'}>
    //         <div className={classes.Overlay}>
    //             <CardContent className={classes.CardContent}>
    //                 <Typography variant="h3" className={classes.Header}>
    //                     {props.title}
    //                 </Typography>
    //             </CardContent>
    //         </div>
    //     </CardMedia>
    // </Card>

    return (
        <div>
            <Card className={classes.DetailHeader}>
                <CardMedia image={props.image} title={'Thumbnail'}>
                    <div className={classes.Overlay}>
                        <CardContent className={classes.CardContent}>
                            <Typography variant="h3" className={classes.Header}>
                                {props.title}
                            </Typography>
                        </CardContent>
                    </div>
                </CardMedia>
            </Card>
        </div>
    )
}

DetailHeader.propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
}

export default DetailHeader;