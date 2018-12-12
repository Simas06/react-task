import {put, call, select, takeLatest} from 'redux-saga/effects'
import axios from 'axios';
import {
    FETCH_CURRENT_WEATHER,
    REFRESH_CURRENT_WEATHER,
    fetchedCurrentWeather,
    refreshedCurrentWeatherCity,
} from "../actions/CurrentWeatherAction";
import {
    FETCH_FORECAST,
    REFRESH_FORECAST,
    fetchedForecast,
    refreshedForecast,
} from "../actions/ForecastActions";

const API_KEY = 'c503e3b2430718439ac6c0d68fe6b0a2';
const API_CURRENT_WEATHER = `https://api.openweathermap.org/data/2.5/weather?units=metric&appid=${API_KEY}&q=`;
const API_FORECAST = `https://api.openweathermap.org/data/2.5/forecast?units=metric&appid=${API_KEY}&q=`;

function* fetchCurrentCityWeather(action) {
    const request = axios.get(`${API_CURRENT_WEATHER}${action.payload.cityName}`);
    yield put(fetchedCurrentWeather(request));
}

function* refreshCurrentCityWeather(action) {
    const request = axios.get(`${API_CURRENT_WEATHER}${action.cityName}`);
    yield put(refreshedCurrentWeatherCity(request));
}

function* fetchForecast(action) {
    const request = axios.get(`${API_FORECAST}${action.payload.cityName}`);
    yield put(fetchedForecast(request));
}

function* refreshForecast(action) {
    const request = axios.get(`${API_FORECAST}${action.cityName}`);
    yield put(refreshedForecast(request));
}

function* ApiSaga() {
    yield takeLatest(FETCH_CURRENT_WEATHER, fetchCurrentCityWeather);
    yield takeLatest(REFRESH_CURRENT_WEATHER, refreshCurrentCityWeather);
    yield takeLatest(FETCH_FORECAST, fetchForecast);
    yield takeLatest(REFRESH_FORECAST, refreshForecast);
}

export default ApiSaga;
