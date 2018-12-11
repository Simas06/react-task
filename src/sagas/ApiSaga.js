import {put, call, select, takeLatest} from 'redux-saga/effects'
import axios from 'axios';
import {
    FETCH_MOVIES,
    FETCH_CURRENT_WEATHER,
    FETCHED_CURRENT_WEATHER,
    FETCH_FORECAST,
    fetchedCurrentWeather
} from "../actions/ApiAction";

const API_KEY = 'c503e3b2430718439ac6c0d68fe6b0a2';
const API_CURRENT_WEATHER = `https://api.openweathermap.org/data/2.5/weather?units=metric&appid=${API_KEY}&q=`;
const API_FORECAST = `https://api.openweathermap.org/data/2.5/forecast?units=metric&appid=${API_KEY}&q=`;

//https://samples.openweathermap.org/data/2.5/forecast?q=Vilnius,DE&appid=b6907d289e10d714a6e88b30761fae22
function* fetchCurrentCityWeather(action) {
    // const state = yield select(); 
    const request = axios.get(`${API_CURRENT_WEATHER}${action.payload.cityName}`);
    yield put(fetchedCurrentWeather(request));
}

function* fetchForecast(action) {
    console.log(`${API_FORECAST}${action.payload.cityName}`);
}

function* fetchMovies(action) {

    const API_KEY = 'c503e3b2430718439ac6c0d68fe6b0a2';
        console.log('Fetch movies');
}

function* ApiSaga() {
    yield takeLatest(FETCH_MOVIES, fetchMovies);
    yield takeLatest(FETCH_CURRENT_WEATHER, fetchCurrentCityWeather);
    yield takeLatest(FETCH_FORECAST, fetchForecast);
}

export default ApiSaga;
