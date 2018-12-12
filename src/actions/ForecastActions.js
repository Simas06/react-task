export const FETCH_FORECAST = 'FETCH_FORECAST';
export const FETCHED_FORECAST = 'FETCHED_FORECAST';
export const PIN_FORECAST = 'PIN_FORECAST';
export const UNPIN_FORECAST = 'UNPIN_FORECAST';
export const REFRESH_FORECAST = 'REFRESH_FORECAST';
export const REFRESHED_FORECAST = 'REFRESHED_FORECAST';

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

export const pinForecastCity = () => {
    return {
        type: PIN_FORECAST
    }
};

export const unpinForecastCity = payload => {
    return {
        type: UNPIN_FORECAST,
        payload,
    }
};

export const refreshForecast = cityName => {
    return {
        type: REFRESH_FORECAST,
        cityName,
    }
};

export const refreshedForecast = payload => {
    return {
        type: REFRESHED_FORECAST,
        payload,
    }
};

