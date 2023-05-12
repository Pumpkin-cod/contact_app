/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
    // console.log(props);

    const deleteContactHandler = (id) => {
        props.getContactId(id);
    };

    const renderContactList = props.contacts.map((contact) => {
        return (
            
            <ContactCard
                contact={contact}
                clickHandler={deleteContactHandler}
                key={contact.id}
            />
        );
    });

    return <div className="contact-list ui celled list">{renderContactList}</div>;
};

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            email: PropTypes.string.isRequired,
        })
    ).isRequired,
    getContactId: PropTypes.func.isRequired,
};

export default ContactList;

