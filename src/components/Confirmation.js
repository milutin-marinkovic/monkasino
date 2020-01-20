import React from "react";

import "../styles/confirmation.css";

class Confirmation extends React.Component {
  render() {
    const { values } = this.props;

    return (
      <div className="message-wrapper">
        <h2>{values.language.regSuccess}</h2>
        <p>{values.language.regConfirm}</p>
        <p>{values.data.email}</p>
      </div>
    );
  }
}

export default Confirmation;
