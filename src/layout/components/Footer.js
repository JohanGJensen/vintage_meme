import React, { Component } from "react";
import injectSheet from "react-jss";
import { footerStyle } from "../../style/style";
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    const { classes } = this.props;

    return (
      <footer className={classes.Footer}>
        <nav>
          <ul className={classes.List}>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
            <li>
              <Link to="/readme">Readme</Link>
            </li>
          </ul>
        </nav>
      </footer>
    );
  }
}

export default injectSheet(footerStyle)(Footer);
