import {FETCHED_CURRENT_WEATHER, FETCHED_FORECAST, PIN_CURRENT_WEATHER, UNPIN_CURRENT_WEATHER} from "../actions/ApiAction";

const initialState = {
    fetchedCurrentWeather: {},
    fetchedForecast: {},
    pinnedCurrentWeather: {},
    pinnedForecast: {},
};

const ApiReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHED_CURRENT_WEATHER:
            return {
                ...state,
                fetchedCurrentWeather: {
                    humidity: action.payload.data.main.humidity,
                    temp: action.payload.data.main.temp,
                    tempMax: action.payload.data.main.temp_max,
                    tempMin: action.payload.data.main.temp_min,
                    cityName: action.payload.data.name,
                    clouds: action.payload.data.clouds.all,
                    weather: action.payload.data.weather,
                }
            };
        case FETCHED_FORECAST:
            console.log('FETCHED_FORECAST');
            return state;
        case PIN_CURRENT_WEATHER:
            return {
                ...state,
                pinnedCurrentWeather: {
                    ...state.pinnedCurrentWeather,
                    [state.fetchedCurrentWeather.cityName]: state.fetchedCurrentWeather
                },
                fetchedCurrentWeather: {},
            }
        case UNPIN_CURRENT_WEATHER:
            delete state.pinnedCurrentWeather[action.payload];
            return {
                ...state,
                pinnedCurrentWeather: {
                    ...state.pinnedCurrentWeather
                }
            }
        default:
            return state;
    }
};

export default ApiReducer;
