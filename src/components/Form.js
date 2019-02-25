import React, { Component } from "react";

class Form extends Component {
    state = {};
    render() {
        return (
            <form onSubmit={this.props.getWeather}>
                <input type="text" name="city" placeholder="City..." required />
                <input
                    type="text"
                    name="country"
                    placeholder="Country..."
                    required
                />
                <button type="submit">Get Weather</button>
            </form>
        );
    }
}

export default Form;
