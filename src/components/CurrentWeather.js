import React, { Component } from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {pinCurrentWeatherCity} from "../actions/ApiAction";
import CurrentWeatherCard from './CurrentWeatherCard';

class CurrentWeather extends Component {

    getIconUrl() {
        if (this.props.fetchedCurrentWeather.weather) {
            return `/weather-icons/${this.props.fetchedCurrentWeather.weather[0].icon}.png`;
        }
    }

    renderPinnedWeatherCards() {
        return Object.keys(this.props.pinnedCurrentWeather).map((key) => {
            return (
                <CurrentWeatherCard key={key} pinned={true} weatherInfo={this.props.pinnedCurrentWeather[key]}></CurrentWeatherCard>
            )
        });
    }

    renderCurrentWeather() {
        if (!this.props.fetchedCurrentWeather.cityName) {
            return null;
        }

        return (
            <CurrentWeatherCard pinned={false} weatherInfo={this.props.fetchedCurrentWeather}></CurrentWeatherCard>
        );
    }
    
    render() {
    
        return (
            <div>
                <div className="row">
                    {this.renderCurrentWeather()}
                </div>
                <br></br> 
                <div className="row">
                    {this.renderPinnedWeatherCards()}
                </div>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        pinCurrentWeatherCity
    }, dispatch);
}


function mapStateToProps(state) {
    return {
        fetchedCurrentWeather: state.ApiReducer.fetchedCurrentWeather,
        pinnedCurrentWeather: state.ApiReducer.pinnedCurrentWeather,
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrentWeather);
