import React from "react";

import PersonalDetails from "./PersonalDetails";
import UserDetails from "./UserDetails";
import Confirmation from "./Confirmation";

import loaderImg from "../photos/loader.jpg";
import "../styles/loader.css";

class UserForm extends React.Component {
  state = {
    step: 1,
    loading: false,
    data: {
      firstName: "",
      lastName: "",
      email: "",
      username: "",
      password: "",
      password_confirm: ""
    },
    errors: {
      fNameError: "",
      lNameError: "",
      emailError: "",
      tosError: "",
      usernameError: "",
      passwordError: "",
      pConfirmError: ""
    }
  };

  static getDerivedStateFromProps(props, state) {
    if (props.language !== state.language) {
      return { ...state, language: props.language };
    }
    return null;
  }

  /* Form validation of the first step */
  validateFirstForm = () => {
    let valid = true;
    if (
      this.state.data.firstName.length < 2 ||
      this.state.data.firstName.length > 25 ||
      this.state.data.firstName.match(/\d/)
    ) {
      this.setState(prevState => ({
        errors: {
          ...prevState.errors,
          fNameError:
            this.state.language.fNameErr
        }
      }));
      valid = false;
    }
    if (
      this.state.data.lastName.length < 2 ||
      this.state.data.lastName.length > 25 ||
      this.state.data.lastName.match(/\d/)
    ) {
      this.setState(prevState => ({
        errors: {
          ...prevState.errors,
          lNameError:
            this.state.language.lNameErr
        }
      }));
      valid = false;
    }
    if (!this.state.data.email.includes("@")) {
      this.setState(prevState => ({
        errors: {
          ...prevState.errors,
          emailError:
            this.state.language.emailErr
        }
      }));
      valid = false;
    }

    if (!document.getElementById("tos").checked) {
      this.setState(prevState => ({
        errors: {
          ...prevState.errors,
          tosError:
            this.state.language.tosErr
        }
      }));
      valid = false;
    }
    return valid;
  };

  /* Form validation of the second step */
  validateSecondForm = () => {
    let passwordRegex = /^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/;
    let valid = true;

    if (
      this.state.data.username.length < 4 ||
      this.state.data.username.length > 20
    ) {
      this.setState(prevState => ({
        errors: {
          ...prevState.errors,
          usernameError:
            this.state.language.usernameErr
        }
      }));
      valid = false;
    }

    if (!passwordRegex.test(this.state.data.password)) {
      this.setState(prevState => ({
        errors: {
          ...prevState.errors,
          passwordError:
            this.state.language.passwordErr
        }
      }));
      valid = false;
    }

    if (this.state.data.password !== this.state.data.password_confirm) {
      this.setState(prevState => ({
        errors: {
          ...prevState.errors,
          pConfirmError:
            this.state.language.passwordConfirmErr
        }
      }));
      valid = false;
    }

    return valid;
  };

  /* Form submit */
  submitCompleteForm = () => {
    this.setState(prevState => ({
      loading: true,
      errors: {
        ...prevState.errors,
        usernameError: "",
        passwordError: "",
        pConfirmError: ""
      }
    }));

    const fields = [
      {
        code: "fName",
        valueStr: this.state.data.firstName,
        dataType: "string"
      },
      { code: "lName", valueStr: this.state.data.lastName, dataType: "string" },
      {
        code: "username",
        valueStr: this.state.data.username,
        dataType: "string"
      },
      { code: "email", valueStr: this.state.data.email, dataType: "string" },
      {
        code: "password",
        valueStr: this.state.data.password,
        dataType: "string"
      },
      {
        code: "password_confirm",
        valueStr: this.state.data.password_confirm,
        dataType: "string"
      }
    ];

    if (this.validateSecondForm()) {
      const { step } = this.state;
      this.setState({
        step: step + 1
      });

      setTimeout(() => {
        const { step } = this.state;

        this.setState({
          step: step + 1
        });
        return fields;
      }, 4000);
    }
  };

  /* Proceed to next step */
  nextStep = () => {
    const { step } = this.state;

    this.setState(prevState => ({
      errors: {
        ...prevState.errors,
        fNameError: "",
        lNameError: "",
        emailError: "",
        tosError: ""
      }
    }));

    if (this.validateFirstForm()) {
      this.setState({
        step: step + 1
      });
    }
  };

  /* Return to previous step */
  previousStep = () => {
    const { step } = this.state;

    this.setState({
      step: step - 1
    });
  };

  /* Field change handler */
  handleChange = input => e => {
    let value = e.target.value;
    this.setState(prevState => ({
      data: {
        ...prevState.data,
        [input]: value
      }
    }));
  };

  render() {
    const { step } = this.state;
    const { data, errors, loading, language } = this.state;
    const values = {
      data,
      errors,
      loading,
      language
    };

    /* Switching cases based on step value from state */

    switch (step) {
      case 1:
        return (
          <PersonalDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );

      case 2:
        return (
          <UserDetails
            previousStep={this.previousStep}
            handleChange={this.handleChange}
            submitCompleteForm={this.submitCompleteForm}
            values={values}
          />
        );

      case 3:
        return (
          <div className="loader-wrapper">
            <img className="loaderImg" src={loaderImg} alt="loader" />
          </div>
        );

      case 4:
        return <Confirmation values={values} />;
    }
  }
}

export default UserForm;
