import {combineReducers} from 'redux';
import CurrentWeatherReducer from "./CurrentWeatherReducer";
import ForecastReducer from "./ForecastReducer";

const rootReducer = combineReducers({
    CurrentWeatherReducer,
    ForecastReducer,
});

export default rootReducer;
