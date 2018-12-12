import {
    FETCHED_CURRENT_WEATHER,
    PIN_CURRENT_WEATHER,
    UNPIN_CURRENT_WEATHER,
    REFRESHED_CURRENT_WEATHER
} from "../actions/CurrentWeatherAction";

const initialState = {
    fetchedCurrentWeather: {},
    pinnedCurrentWeather: {},
};

const CurrentWeatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHED_CURRENT_WEATHER:
            if (action.payload.response && action.payload.response.data.cod == '404') {
                return {
                    ...state,
                    fetchedCurrentWeather: {
                        error: true
                    }
                };
            }

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
                    error: false,
                }
            };
        case PIN_CURRENT_WEATHER:
            return {
                ...state,
                pinnedCurrentWeather: {
                    ...state.pinnedCurrentWeather,
                    [state.fetchedCurrentWeather.cityName]: state.fetchedCurrentWeather
                },
                fetchedCurrentWeather: {},
            };
        case UNPIN_CURRENT_WEATHER:
            delete state.pinnedCurrentWeather[action.payload];
            return {
                ...state,
                pinnedCurrentWeather: {
                    ...state.pinnedCurrentWeather
                }
            };
        case REFRESHED_CURRENT_WEATHER:
            return {
                ...state,
                pinnedCurrentWeather: {
                    ...state.pinnedCurrentWeather,
                    [action.payload.data.name]: {
                        humidity: action.payload.data.main.humidity,
                        temp: action.payload.data.main.temp,
                        tempMax: action.payload.data.main.temp_max,
                        tempMin: action.payload.data.main.temp_min,
                        cityName: action.payload.data.name,
                        clouds: action.payload.data.clouds.all,
                        weather: action.payload.data.weather,
                    }
                },
            };
        default:
            return state;
    }
};

export default CurrentWeatherReducer;
