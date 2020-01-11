import React from "react";
import ReactDOM from "react-dom";

import UserForm from "./components/UserForm";

import English from "./languages/english";
import Croatian from "./languages/croatian"

import navbarImg from "./photos/navbar-logo.png";
import navbarBrand from "./photos/monKasino-text.png";
import logo from "./photos/monKasino.png";

import "./styles/main.css";

class App extends React.Component {
  state = {
    language: "en"
  };

  changeLangEn = () => {
    this.setState({
      language: "en"
    })
  };

  changeLangCro = () => {
    this.setState({
      language: "cro"
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
              {this.state.language === "en" ? English.news : Croatian.news}
            </a>
            <img src={navbarBrand} alt="navbar" />
            <div className="right menu">
              <div className="ui simple dropdown item">
                {this.state.language === "en" ? English.language : Croatian.language} <i className="dropdown icon" />
                <div className="menu">
                  <a className="item" href="/#" onClick={this.changeLangEn}>
                    <i className="ukIcon" /> {this.state.language === "en" ? English.english : Croatian.english}
                  </a>
                  <a className="item" href="/#" onClick={this.changeLangCro}>
                    <i className="croIcon" /> {this.state.language === "en" ? English.croatian : Croatian.croatian}
                  </a>
                </div>
              </div>
              <div className="item">
                <div className="ui black basic button">{this.state.language === "en" ? English.signUp : Croatian.signUp}</div>
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
                <UserForm language={languageProp} />
              </div>
            </div>
          </div>
        </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));