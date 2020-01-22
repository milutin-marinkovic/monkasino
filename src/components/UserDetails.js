import React from "react";
import "../styles/detailsStyle.css";
import UserDetailsFields from "./UserDetailsFields";

class UserDetails extends React.Component {
  /* Function for return button */
  goBack = e => {
    e.preventDefault();

    this.props.previousStep();
  };

  /* Function for submit button */
  toSubmit = e => {
    e.preventDefault();
    this.props.submitCompleteForm();
  };

  render() {
    const { values, handleChange, previousStep, submitCompleteForm } = this.props;

    const fieldsListed = this.props.fields.map((input, i) => {
      return (
        <UserDetailsFields
          key={i}
          params={input}
          previousStep={previousStep}
          handleChange={handleChange}
          submitCompleteForm={submitCompleteForm}
          values={values}
        />
      );
    });

    return (
      <div>
        <form onSubmit={this.toSubmit} className="ui form" noValidate>
          <h2 className="ui dividing header">{values.language.userHeader}</h2>
          {fieldsListed}
          <button onClick={this.goBack} className="ui black basic button">
            <i className="angle left icon" />
            {values.language.return}
          </button>
          <button type="submit" className="ui yellow button">
            {values.language.submit}
          </button>
        </form>
      </div>
    );
  }
}

export default UserDetails;
