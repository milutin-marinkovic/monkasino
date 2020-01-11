import React from "react";

import "../styles/confirmation.css";

import English from "../languages/english";
import Croatian from "../languages/croatian";

class Confirmation extends React.Component {
  render() {
    const { values } = this.props;

    return (
      <div className="message-wrapper">
        <h2>{values.language.language === "en" ? English.regSuccess : Croatian.regSuccess}</h2>
        <p>{values.language.language === "en" ? English.regConfirm : Croatian.regConfirm}</p>
        <p>{values.data.email}</p>
      </div>
    );
  }
}

export default Confirmation;
