import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {fetchCurrentWeather} from "./actions/CurrentWeatherAction";
import {fetchForecast} from "./actions/ForecastActions";
import CurrentWeather from "./components/CurrentWeather";

import './App.css';
import Forecast from "./components/Forecast";

class App extends Component {

    constructor(props) {
        super(props);

        this.cityName = React.createRef();
    }

    fetchWeatherInformation() {
        if (this.cityName.current.value) {
            this.props.fetchCurrentWeather({cityName: this.cityName.current.value});
        }
    }

    fetchForeCastInformation() {
        if (this.cityName.current.value) {
            this.props.fetchForecast({cityName: this.cityName.current.value})
        }
    }

    render() {
        return (
            <div className="App">
                <div className="container">
                    <input className="form-control mt-5" ref={this.cityName}/>
                    <button className="btn btn-primary m-2" onClick={this.fetchWeatherInformation.bind(this)}>
                        Current weather
                    </button>
                    <button className="btn btn-primary m-2" onClick={this.fetchForeCastInformation.bind(this)}>
                        5 days forecast
                    </button>
                    <CurrentWeather/>
                    <Forecast/>
                </div>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        fetchCurrentWeather,
        fetchForecast
    }, dispatch);
}

export default connect(null, mapDispatchToProps)(App);
