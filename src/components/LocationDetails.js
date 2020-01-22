import React from "react";
import LocationDetailsFields from "./LocationDetailsFields";
import "../styles/detailsStyle.css";

class LocationDetails extends React.Component {
    /* Function for return button */
    goBack = e => {
        e.preventDefault();

        this.props.previousStep();
    };

    /* Function for continue button */
    validateLocation = e => {
        e.preventDefault();

        this.props.nextStep();
    };

    render() {
        const { values, handleChange } = this.props;

        const fieldsListed = this.props.fields.map((input, i) => {
            return (
                <LocationDetailsFields
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
                        {values.language.locationHeader}
                    </h2>
                    {fieldsListed}
                    <button onClick={this.goBack} className="ui black basic button">
                        <i className="angle left icon" />
                        {values.language.return}
                    </button>
                    <button onClick={this.validateLocation} className="ui black basic button">
                        {values.language.continue}
                        <i className="angle right icon" />
                    </button>
                </form>
            </div>
        );
    }
}

export default LocationDetails;
