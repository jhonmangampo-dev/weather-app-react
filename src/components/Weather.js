import React, { Component } from "react";

class Weather extends Component {
    state = {};
    render() {
        return (
            <div>
                {this.props.weather.location.city &&
                    this.props.weather.location.country && (
                        <p>
                            Location: {this.props.weather.location.city},{" "}
                            {this.props.weather.location.country}
                        </p>
                    )}
                {this.props.weather.temperature && (
                    <p>Temperature: {this.props.weather.temperature}</p>
                )}
                {this.props.weather.humidity && (
                    <p>Humidity: {this.props.weather.humidity}</p>
                )}
                {this.props.weather.description && (
                    <p>Description: {this.props.weather.description}</p>
                )}
                {this.props.error && <p>{this.props.error}</p>}
            </div>
        );
    }
}

export default Weather;
