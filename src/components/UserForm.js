import React from "react";

/* COMPONENTS */
import PersonalDetails from "./PersonalDetails";
import LocationDetails from "./LocationDetails";
import UserDetails from "./UserDetails";
import Confirmation from "./Confirmation";

/* JSON FILES */
import personalDetailsJSON from "../fields/personalDetails";
import locationDetailsJSON from "../fields/locationDetails"
import userDetailsJSON from "../fields/userDetails";

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
      address: "",
      city: "",
      country: "",
      username: "",
      password: "",
      password_confirm: ""
    },
    errors: {
      fNameError: "",
      lNameError: "",
      emailError: "",
      tosError: "",
      addressError: "",
      cityError: "",
      countryError: "",
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
          fNameError: this.state.language.fNameErr
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
          lNameError: this.state.language.lNameErr
        }
      }));
      valid = false;
    }
    if (!this.state.data.email.includes("@")) {
      this.setState(prevState => ({
        errors: {
          ...prevState.errors,
          emailError: this.state.language.emailErr
        }
      }));
      valid = false;
    }

    if (!document.getElementById("tos").checked) {
      this.setState(prevState => ({
        errors: {
          ...prevState.errors,
          tosError: this.state.language.tosErr
        }
      }));
      valid = false;
    }
    return valid;
  };

  /* Form validation of the second step */
  validateLocationForm = () => {
    let valid = true;
    if (!this.state.data.address) {
      this.setState(prevState => ({
        errors: {
          ...prevState.errors,
          addressError: this.state.language.addressErr
        }
      }));
      valid = false;
    }
    if (!this.state.data.city) {
      this.setState(prevState => ({
        errors: {
          ...prevState.errors,
          cityError: this.state.language.cityErr
        }
      }));
      valid = false;
    }
    if (!this.state.data.country) {
      this.setState(prevState => ({
        errors: {
          ...prevState.errors,
          countryError: this.state.language.countryErr
        }
      }));
      valid = false;
    }

    return valid;
  };

  /* Validate third step */
  validateUserForm = () => {
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

    const fieldsAPI = [
      {
        code: "fName",
        valueStr: this.state.data.firstName,
        dataType: "string"
      },
      { code: "lName", valueStr: this.state.data.lastName, dataType: "string" },
      {
        code: "address",
        valueStr: this.state.data.address,
        dataType: "string"
      },
      {
        code: "city",
        valueStr: this.state.data.city,
        dataType: "string"
      },
      {
        code: "country",
        valueStr: this.state.data.country,
        dataType: "string"
      },
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

    if (this.validateUserForm()) {
      const { step } = this.state;
      this.setState({
        step: step + 1
      });

      setTimeout(() => {
        const { step } = this.state;

        this.setState({
          step: step + 1
        });
        return fieldsAPI;
      }, 4000);
    }
  };

  /* Proceed to Location Details */
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

  /* Proceed to User Details */
  nextStepLocation = () => {
    const { step } = this.state;

    this.setState(prevState => ({
      errors: {
        ...prevState.errors,
        addressError: "",
        cityError: "",
        countryError: "",
      }
    }));

    if (this.validateLocationForm()) {
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
            previousStep={this.previousStep}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
            fields={personalDetailsJSON}
          />
        );

      case 2:
        return (
          <LocationDetails
            previousStep={this.previousStep}
            nextStep={this.nextStepLocation}
            handleChange={this.handleChange}
            values={values}
            fields={locationDetailsJSON}
          />
        );

      case 3:
        return (
          <UserDetails
            previousStep={this.previousStep}
            handleChange={this.handleChange}
            submitCompleteForm={this.submitCompleteForm}
            values={values}
            fields={userDetailsJSON}
          />
        );

      case 4:
        return (
          <div className="loader-wrapper">
            <img className="loaderImg" src={loaderImg} alt="loader" />
          </div>
        );

      case 5:
        return <Confirmation values={values} />;

      default:
        return null;
    }
  }
}

export default UserForm;
