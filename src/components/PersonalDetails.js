import React from "react";
import "../styles/detailsStyle.css";
import PersonalDetailsFields from "./PersonalDetailsFields";

class PersonalDetails extends React.Component {
  /* Continue function, when button is clicked */
  continue = e => {
    e.preventDefault();

    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;

    const fieldsListed = this.props.fields.map((input, i) => {
      return (
          <PersonalDetailsFields
            key={i}
            params={input}
            handleChange={handleChange}
            values={values}
          />
      );
    });

    return (
      <div>
        <form className="ui form" noValidate>
          <h2 className="ui dividing header">
            {values.language.personalHeader}
          </h2>
          {fieldsListed}
          <div className="ui checkbox">
            <input type="checkbox" name="tos" id="tos" />
            <label htmlFor="tos">{values.language.tos}</label>
            <div className="input-error">{values.errors.tosError}</div>
          </div>
          <button onClick={this.continue} className="ui black basic button">
            {values.language.continue}
            <i className="angle right icon" />
          </button>
        </form>
      </div>
    );
  }
}

export default PersonalDetails;
