import React from "react";
import react_logo from "../../logo.svg";

class FooterComponent extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-description1">
          <span className="footer-name-text">Andrew Li | </span>©{" "}
          <span className="footer-name-text">{new Date().getFullYear()}.</span>
        </div>
        <div className="footer-description2">
          Built with{" "}
          <a
            href="https://facebook.github.io/react/"
            target="_blank"
            className="footer-link-description"
          >
            React
          </a>{" "}
          <img src={react_logo} className="footer-logo" alt="React Logo" />
        </div>
      </div>
    );
  }
}

export default FooterComponent;
