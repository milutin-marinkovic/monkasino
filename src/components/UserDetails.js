import React from "react";
import "../styles/detailsStyle.css";

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
    const { values, handleChange } = this.props;

    return (
      <div>
        <form onSubmit={this.toSubmit} className="ui form" noValidate>
          <h2 className="ui dividing header">{values.language.userHeader}</h2>
          <div className="field">
            <label htmlFor="firstName">{values.language.username}</label>
            <div>
              <input
                type="text"
                name="firstName"
                onChange={handleChange("username")}
                defaultValue={values.data.username}
              />
              <div className="input-error">
                {values.errors.usernameError}
              </div>
            </div>
          </div>
          <div className="field">
            <label htmlFor="lastName">{values.language.password}</label>
            <div>
              <input
                type="password"
                name="lastName"
                onChange={handleChange("password")}
                defaultValue={values.data.password}
              />
              <div className="input-error">
                {values.errors.passwordError}
              </div>
            </div>
          </div>
          <div className="field">
            <label htmlFor="lastName">{values.language.confirmPassword}</label>
            <div>
              <input
                type="password"
                name="password-confirm"
                onChange={handleChange("password_confirm")}
                defaultValue={values.data.password_confirm}
              />
              <div className="input-error">
                {values.errors.pConfirmError}
              </div>
            </div>
          </div>
          <button onClick={this.goBack} className="ui black basic button">
            <i className="angle left icon" />
            {values.language.return}
          </button>
          <button type="submit" className="ui yellow button">{values.language.submit}</button>
        </form>
      </div>
    );
  }
}

export default UserDetails;
