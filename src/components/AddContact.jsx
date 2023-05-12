import React from "react";
import PropTypes from "prop-types";

class AddContact extends React.Component {
    state = {
        name: "",
        email: "",
        gen:"",
    };

    add = (e) => {
        e.preventDefault();
        if (this.state.name === "" || this.state.email === "" || this.state.gen ==="") {
            alert("All fields are mandatory!");
            return;
        }
        this.props.addContactHandler(this.state);
        this.setState({ name: "", email: "", gen:"" });
    };

    render() {
        return (
            <div className="ui main">
                <h2>Add Contact</h2>
                <form className="ui form" onSubmit={this.add}>
                    <div className="field">
                        <label>Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={this.state.name}
                            onChange={(e) => this.setState({ name: e.target.value })}
                        />
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input
                            type="text"
                            name="email"
                            placeholder="Email"
                            value={this.state.email}
                            onChange={(e) => this.setState({ email: e.target.value })}
                        />
                    </div>
                    <div className="field">
                        <label>Gen</label>
                        <input
                            type="text"
                            name="gen"
                            placeholder="Gen"
                            value={this.state.gen}
                            onChange={(e) => this.setState({ gen: e.target.value })}
                        />
                    </div>
                    <button className="ui button blue">Add</button>
                </form>
            </div>
        );
    }
}

AddContact.propTypes = {
    addContactHandler: PropTypes.func.isRequired,
};

export default AddContact;
