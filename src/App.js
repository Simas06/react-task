import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {fetchCurrentWeather, fetchForecast} from "./actions/ApiAction";
import CurrentWeather from "./components/CurrentWeather";

import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    
    this.cityName = React.createRef();
  }

  fetchWeatherInformation() {
    this.props.fetchCurrentWeather({cityName: this.cityName.current.value});
  }

  fetchForeCastInformation() {
    this.props.fetchForecast({cityName: this.cityName.current.value})
  }

  render() {
  
  console.log(this.props.testConditoon);
    return (
      <div className="App">
        <div className="container">
            <input className="form-control mt-5" ref={this.cityName} />
        <button className="btn btn-primary m-2" onClick={this.fetchWeatherInformation.bind(this)} > 
          Current weather
        </button>
        <button className="btn btn-primary m-2" onClick={this.fetchForeCastInformation.bind(this)}>
          5 days forecast
        </button>
        <CurrentWeather></CurrentWeather>

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