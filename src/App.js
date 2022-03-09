import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import ReadData from './Components/Data/ReadData';
import Grid from '@material-ui/core/Grid';
import DetailHeader from './Components/Details/DetailHeader';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FullArticle from './Components/FullArticle';
import Navbar from './Components/Navbar';
import EmbedYT from './Components/EmbedYT';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#fff"
  },
  hero: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1553367989-1f8a5d29ee08?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80')`,
    height: "500px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontSize: "4rem",
  },
  blogsContainer: {
    paddingTop: theme.spacing(3),
  },
  blogTitle: {
    fontWeight: 800,
    paddingBottom: theme.spacing(3),
  }
}));

function App() {
  const classes = useStyles();

  return (
      <div className="App">
        <Navbar />
        <br/><br/><br/>

        <Router>
          <Switch>
            <Route exact path="/" component={ReadData} />
            <Route exact path="/:blogID" component={FullArticle} />
          </Switch>
        </Router>
      </div>
  );
}

export default App;
