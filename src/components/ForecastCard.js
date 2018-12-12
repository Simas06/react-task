import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {
    pinForecastCity,
    unpinForecastCity,
    refreshForecast,
} from "../actions/ForecastActions";

class ForecastCard extends Component {

    getIconUrl(data) {
        if (data.weather) {
            return `/weather-icons/${data.weather[0].icon}.png`;
        }
    }

    getButtonText() {
        if (this.props.pinned) {
            return 'Unpin city'
        } else {
            return 'Pin city';
        }
    }

    handleForecastPin() {
        if (this.props.pinned) {
            this.props.unpinForecastCity(this.props.forecast.cityName);
        } else {
            this.props.pinForecastCity();
        }
    }

    refreshForecast() {
        this.props.refreshForecast(this.props.forecast.cityName);
    }

    renderRefreshButton() {
        if (this.props.pinned) {
            return (
                <button className="btn btn-outline-secondary mb-3 ml-3" onClick={this.refreshForecast.bind(this)}>Refresh</button>
            );
        }

        return null;
    }

    renderDayCards() {
        let lastDay = null;
        let daysCount = 0;
        return this.props.forecast.list.map((data, index) => {
            let weatherDay = new Date(data.dt_txt).getDate();

            if (daysCount > 4) {
                return null;
            }

            if (!lastDay) {
                lastDay = weatherDay;
            } else if (lastDay == weatherDay) {
                return null
            }
            lastDay = weatherDay;
            daysCount += 1;

            return (
                <div key={index} className="col-sm-2 p-0 m-3">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{data.dt_txt.split(' ')[0]}</h5>
                            <div>
                                <h1 className="inline">{data.main.temp}°C</h1>
                                <img className="mb-3" src={this.getIconUrl(data)}></img>
                            </div>
                            <div>
                                <h3 className="inline m-3">{data.main.temp_max}°C</h3>
                                <h3 className="inline text-secondary m-3">{data.main.temp_min}°C</h3>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
    }

    render() {
        if (!this.props.forecast.cityName) {
            return null;
        }

        return (
            <div className="row center">
                <div className="col-12">
                    <h1 className="inline">{this.props.forecast.cityName}</h1>
                    <button className="btn btn-outline-secondary mb-3 ml-3" onClick={this.handleForecastPin.bind(this)}>{this.getButtonText()}</button>
                    {this.renderRefreshButton()}
                </div>
                {this.renderDayCards()}
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        pinForecastCity,
        unpinForecastCity,
        refreshForecast,
    }, dispatch);
}

export default connect(null, mapDispatchToProps)(ForecastCard);
