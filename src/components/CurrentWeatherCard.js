import React, { Component } from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {
    pinCurrentWeatherCity,
    unpinCurrentWeatherCity,
    refreshCurrentWeatherCity
} from "../actions/CurrentWeatherAction";

class CurrentWeather extends Component {

    handleCityPin() {
        if (this.props.pinned) {
            this.props.unpinCurrentWeatherCity(this.props.weatherInfo.cityName);
        } else {
            this.props.pinCurrentWeatherCity();
        }
    }

    getIconUrl() {
        if (this.props.weatherInfo.weather) {
            return `/weather-icons/${this.props.weatherInfo.weather[0].icon}.png`;
        }
    }

    getButtonText() {
        if (this.props.pinned) {
            return 'Unpin city'
        } else {
            return 'Pin city';
        }
    }

    refreshCurrentWeather() {
        this.props.refreshCurrentWeatherCity(this.props.weatherInfo.cityName);
    }

    renderRefreshButton() {
        if (this.props.pinned) {
            return (
                <button className="btn btn-outline-secondary left mt-3" onClick={this.refreshCurrentWeather.bind(this)}>Refresh</button>
            );
        }

        return null;
    }

    render() {
        if (!this.props.weatherInfo.cityName) {
            return null;
        }

        return (
            <div className="col-sm-3 center">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{this.props.weatherInfo.cityName}</h5>
                        <div>
                            <h1 className="inline">{this.props.weatherInfo.temp}°C</h1>
                            <img className="mb-3" src={this.getIconUrl()}></img>
                        </div>
                        <div>
                            <h3 className="inline m-3">{this.props.weatherInfo.tempMax}°C</h3>
                            <h3 className="inline text-secondary m-3">{this.props.weatherInfo.tempMin}°C</h3>
                        </div>
                        <button className="btn btn-outline-secondary right mt-3" onClick={this.handleCityPin.bind(this)}>{this.getButtonText()}</button>
                        {this.renderRefreshButton()}
                    </div>
                </div>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        pinCurrentWeatherCity,
        unpinCurrentWeatherCity,
        refreshCurrentWeatherCity,
    }, dispatch);
}

export default connect(null, mapDispatchToProps)(CurrentWeather);
