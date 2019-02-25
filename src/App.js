import React, { Component } from "react";

/**
 * Render Components
 */
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

/**
 * OpenWeatherMap Api Key
 */
const API_KEY = "a4a364cf40f8bad6d62b251943b55266";

class App extends Component {
    state = {
        weather: {
            temperature: undefined,
            location: {
                city: undefined,
                country: undefined
            },
            humidity: undefined,
            description: undefined
        },
        error: undefined
    };

    getWeather = async e => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        const api_call = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`
        );
        const data = await api_call.json();
        console.log(data);
        if (data.cod === "404") {
            this.setState({
                weather: {
                    temperature: undefined,
                    location: { city: undefined, country: undefined },
                    humidity: undefined,
                    description: undefined
                },
                error: data.message
            });
        } else {
            this.setState({
                weather: {
                    temperature: data.main.temp,
                    location: { city: data.name, country: data.sys.country },
                    humidity: data.main.humidity,
                    description: data.weather[0].description
                },
                error: undefined
            });
        }
    };

    render() {
        return (
            <div>
                <Titles />
                <Form getWeather={this.getWeather} />
                <Weather
                    weather={this.state.weather}
                    error={this.state.error}
                />
            </div>
        );
    }
}

export default App;
