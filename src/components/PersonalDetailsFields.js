import React from "react";
import "../styles/detailsStyle.css";

class PersonalDetailsFields extends React.Component {
  render() {
    const { values, handleChange } = this.props;
    const { className, htmlFor, label, type, name, error } = this.props.params;

    return (
      <div className={className} key={name}>
        <label htmlFor={htmlFor}>{values.language[label]}</label>
        <div>
          <input
            type={type}
            name={name}
            onChange={handleChange(name)}
            defaultValue={values.data[name]}
          />
          <div className="input-error">{values.errors[error]}</div>
        </div>
      </div>
    );
  }
}

export default PersonalDetailsFields;
