import React from "react";
import ReactDOM from "react-dom";

import UserForm from "./components/UserForm";

import English from "./languages/english";
import Croatian from "./languages/croatian";
import Spanish from "./languages/spanish";
import French from "./languages/french"

import navbarImg from "./photos/navbar-logo.png";
import navbarBrand from "./photos/monKasino-text.png";
import logo from "./photos/monKasino.png";

import "./styles/main.css";

class App extends React.Component {
  state = {
    language: English
  };

  changeLangEn = () => {
    this.setState({
      language: English
    });
  };

  changeLangCro = () => {
    this.setState({
      language: Croatian
    })
  };

  changeLangEsp = () => {
    this.setState({
      language: Spanish
    })
  };

  changeLangFr = () => {
    this.setState({
      language: French
    })
  };

  render() {
    const { language } = this.state;
    const languageProp = {
      language
    };

    return (
        <div>
          <div className="ui yellow pointing inverted small menu">
            <div className="item">
              <img src={navbarImg} alt="navbar" />
            </div>
            <a className="item" href="/#">
              Casino
            </a>
            <a className="item" href="/#">
              Live Casino
            </a>
            <a className="item" href="/#">
              {this.state.language.news}
            </a>
            <img src={navbarBrand} alt="navbar" />
            <div className="right menu">
              <div className="ui simple dropdown item">
                {this.state.language.language} <i className="dropdown icon" />
                <div className="menu">
                  <a className="item" href="/#" onClick={this.changeLangEn}>
                    <i className="ukIcon" /> {this.state.language.english}
                  </a>
                  <a className="item" href="/#" onClick={this.changeLangCro}>
                    <i className="croIcon" /> {this.state.language.croatian}
                  </a>
                  <a className="item" href="/#" onClick={this.changeLangEsp}>
                    <i className="espIcon" /> {this.state.language.spanish}
                  </a>
                  <a className="item" href="/#" onClick={this.changeLangFr}>
                    <i className="frIcon" /> {this.state.language.french}
                  </a>
                </div>
              </div>
              <div className="item">
                <div className="ui black basic button">{this.state.language.signUp}</div>
              </div>
              <div className="item edge-images">
                <img src={navbarImg} alt="navbar" />
              </div>
            </div>
          </div>
          <div className="App ui">
            <div className="ui grid container form-wrapper">
              <div className="six wide column img-wrapper">
                <img src={logo} alt="logo" className="ui fluid image" />
              </div>
              <div className="ten wide column details-wrapper">
                <UserForm language={languageProp.language} />
              </div>
            </div>
          </div>
        </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));