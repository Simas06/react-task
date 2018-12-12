import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import ForecastCard from "./ForecastCard";

class Forecast extends Component {

    renderPinnedForecast() {
        return Object.keys(this.props.pinnedForecast).map((key) => {
            return (
                <ForecastCard key={key} pinned={true} forecast={this.props.pinnedForecast[key]}></ForecastCard>
            )
        });
    }

    renderCurrentForecast() {
        if (this.props.fetchedForecast.error) {
            alert("Wrong city name");
            return null;
        }

        if (!this.props.fetchedForecast.cityName) {
            return null;
        }

        return (
            <ForecastCard pinned={false} forecast={this.props.fetchedForecast}/>
        );
    }

    render() {
        return (
            <div>
                {this.renderCurrentForecast()}
                <br/><br/>
                {this.renderPinnedForecast()}
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({}, dispatch);
}


function mapStateToProps(state) {
    return {
        fetchedForecast: state.ForecastReducer.fetchedForecast,
        pinnedForecast: state.ForecastReducer.pinnedForecast
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Forecast);
