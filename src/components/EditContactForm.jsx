/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import PropTypes from "prop-types";

const EditContactForm = (props) => {
    const [name, setName] = useState(props.contact.name);
    const [email, setEmail] = useState(props.contact.email);
    const [gen, setGen] = useState(props.contact.gen);

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleGenChange = (e) => {
        setGen(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform update functionality here using the updated name, email, and gen values
        console.log("Updated name:", name);
        console.log("Updated email:", email);
        console.log("Updated gen:", gen);
        // Reset the form fields
        setName("");
        setEmail("");
        setGen("");
        // Hide the edit form
        props.hideEditForm();
    };

    return (
        <form className="ui form" onSubmit={handleSubmit}>
            <div className="field">
                <label>Name</label>
                <input type="text" value={name} onChange={handleNameChange} />
            </div>
            <div className="field">
                <label>Email</label>
                <input type="text" value={email} onChange={handleEmailChange} />
            </div>
            <div className="field">
                <label>Gen</label>
                <input type="text" value={gen} onChange={handleGenChange} />
            </div>
            <button className="ui button blue" type="submit">Update</button>
        </form>
    );
};

EditContactForm.propTypes = {
    contact: PropTypes.shape({
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        gen: PropTypes.string.isRequired,
    }).isRequired,
    hideEditForm: PropTypes.func.isRequired,
};

export default EditContactForm;
