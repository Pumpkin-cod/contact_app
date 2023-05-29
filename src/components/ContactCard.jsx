/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import PropTypes from "prop-types";
import user from "../assets/user.png";
import EditContactForm from "../components/EditContactForm";
import "../ContactCard.css"; // Import custom CSS file for ContactCard styling

const ContactCard = (props) => {
    const { id, name, email, gen } = props.contact;
    const [showEditForm, setShowEditForm] = useState(false);

    const handleDeleteClick = () => {
        props.clickHandler(id);
    };

    const handleEditClick = () => {
        setShowEditForm(true);
    };

    const hideEditForm = () => {
        setShowEditForm(false);
    };

    return (
        <div className="contact-card">
            <img className="avatar" src={user} alt="user" />
            <div className="content">
                <div className="header">{name}</div>
                <div className="email">{email}</div>
                <div className="gen">{gen}</div>
            </div>
            <i
                className="trash alternate outline icon delete-icon"
                onClick={handleDeleteClick}
            ></i>

            <i
                className="edit alternate outline icon edit-icon"
                onClick={handleEditClick}
            ></i>
            {showEditForm && (
                <EditContactForm
                    contact={props.contact}
                    hideEditForm={hideEditForm}
                />
            )}
        </div>
    );
};

ContactCard.propTypes = {
    contact: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        gen: PropTypes.string.isRequired,
    }).isRequired,
    clickHandler: PropTypes.func.isRequired,
};

export default ContactCard;

