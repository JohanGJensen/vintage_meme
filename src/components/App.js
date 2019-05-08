import React, { Component } from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import { styles } from "./style/style.js";
import { Route, Switch, Redirect } from "react-router-dom";
//import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { saveMeme } from "./actions/actions.js";

//components
import Home from "./layout/Home";
import Gallery from "./layout/Gallery";
import Readme from "./layout/Readme";
import Header from "./layout/Header";
import Footer from "./layout/Footer";

//font awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faPlay,
  faPause,
  faDownload,
  faSave
} from "@fortawesome/free-solid-svg-icons";
library.add(faPlay, faPause, faDownload, faSave);

class App extends Component {
  componentDidMount() {
    const { memeGallery, saveMeme } = this.props;

    if (memeGallery > !-1) {
      console.log("data fetched through server");
    } else if (localStorage.getItem("memeGallery") !== null) {
      let value = localStorage.getItem("memeGallery");
      value = JSON.parse(value);
      value.map(meme => saveMeme(meme));
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <div className="main-container">
        <Header />
        <section className={classes.App}>
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/gallery" component={Gallery} />
            <Route path="/readme" component={Readme} />
            <Redirect to="/home" />
          </Switch>
        </section>
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  memeGallery: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  memeGallery: state.memeState.memeGallery
});

export default connect(
  mapStateToProps,
  { saveMeme }
)(injectSheet(styles)(App));
