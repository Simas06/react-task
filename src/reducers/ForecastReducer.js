import {
    FETCHED_FORECAST,
    PIN_FORECAST,
    UNPIN_FORECAST,
    REFRESHED_FORECAST
} from "../actions/ForecastActions";

const initialState = {
    fetchedForecast: {},
    pinnedForecast: {},
};

const ForecastReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHED_FORECAST:
            if (action.payload.response && action.payload.response.data.cod == '404') {
                return {
                    ...state,
                    fetchedForecast: {
                        error: true
                    }
                };
            }

            return {
                ...state,
                fetchedForecast: {
                    cityName: action.payload.data.city.name,
                    list: action.payload.data.list,
                }
            };
        case PIN_FORECAST:
            return {
                ...state,
                pinnedForecast: {
                    ...state.pinnedForecast,
                    [state.fetchedForecast.cityName]: state.fetchedForecast
                },
                fetchedForecast: {},
            };
        case UNPIN_FORECAST:
            delete state.pinnedForecast[action.payload];
            return {
                ...state,
                pinnedForecast: {
                    ...state.pinnedForecast
                }
            };
        case REFRESHED_FORECAST:
            return {
                ...state,
                pinnedForecast: {
                    ...state.pinnedForecast,
                    [action.payload.data.city.name]: {
                        cityName: action.payload.data.city.name,
                        list: action.payload.data.list,
                    }
                },
            };
        default:
            return state;
    }
};

export default ForecastReducer;
