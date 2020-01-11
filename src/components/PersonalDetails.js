import React from "react";
import "../styles/detailsStyle.css";

import English from "../languages/english";
import Croatian from "../languages/croatian";

class PersonalDetails extends React.Component {
  /* Continue function, when button is clicked */
  continue = e => {
    e.preventDefault();

    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;

    return (
      <div>
        <form className="ui form" noValidate>
          <h2 className="ui dividing header">{values.language.language === "en" ? English.personalHeader : Croatian.personalHeader}</h2>
          <div className="field">
            <label htmlFor="firstName">{values.language.language === "en" ? English.fname : Croatian.fName}</label>
            <input
              type="text"
              name="firstName"
              onChange={handleChange("firstName")}
              defaultValue={values.data.firstName}
            />
            <div className="input-error">{values.errors.fNameError}</div>
          </div>
          <div className="field">
            <label htmlFor="lastName">{values.language.language === "en" ? English.lName : Croatian.lName}</label>
            <input
              type="text"
              name="lastName"
              onChange={handleChange("lastName")}
              defaultValue={values.data.lastName}
            />
            <div className="input-error">{values.errors.lNameError}</div>
          </div>
          <div className="field">
            <label htmlFor="lastName">{values.language.language === "en" ? English.email : Croatian.email}</label>
            <input
              type="email"
              name="email"
              onChange={handleChange("email")}
              defaultValue={values.data.email}
            />
            <div className="input-error">{values.errors.emailError}</div>
          </div>
          <div>
            <div className="ui checkbox">
              <input type="checkbox" name="tos" id="tos" />
              <label htmlFor="tos">{values.language.language === "en" ? English.tos : Croatian.tos}</label>
              <div className="input-error">{values.errors.tosError}</div>
            </div>
          </div>
          <button onClick={this.continue} className="ui black basic button">
            {values.language.language === "en" ? English.continue : Croatian.continue}
            <i className="angle right icon" />
          </button>
        </form>
      </div>
    );
  }
}

export default PersonalDetails;
