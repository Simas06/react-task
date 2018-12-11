import { escapeExpression } from "handlebars";

export const TEST = 'TEST';
export const FETCH_MOVIES = 'FETCH_MOVIES';
export const FETCH_CURRENT_WEATHER = 'FETCH_CURRENT_WEATHER';
export const FETCHED_CURRENT_WEATHER = 'FETCHED_CURRENT_WEATHER';
export const FETCH_FORECAST = 'FETCH_FORECAST';
export const FETCHED_FORECAST = 'FETCHED_FORECAST';
export const PIN_CURRENT_WEATHER = 'PIN_CURRENT_WEATHER';
export const UNPIN_CURRENT_WEATHER = 'UNPIN_CURRENT_WEATHER';

export const fetchCurrentWeather = payload => {
    return {
        type: FETCH_CURRENT_WEATHER,
        payload,
    }
};

export const fetchedCurrentWeather = payload => {
    return {
        type: FETCHED_CURRENT_WEATHER,
        payload,
    }
};

export const fetchForecast = payload => {
    return {
        type: FETCH_FORECAST,
        payload,
    }
};

export const fetchedForecast = payload => {
    return {
        type: FETCHED_FORECAST,
        payload,
    }
};

export const pinCurrentWeatherCity = () => {
    return {
        type: PIN_CURRENT_WEATHER
    }
};

export const unpinCurrentWeatherCity = payload => {
    return {
        type: UNPIN_CURRENT_WEATHER,
        payload,
    }
};

