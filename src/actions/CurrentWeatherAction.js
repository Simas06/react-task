export const FETCH_CURRENT_WEATHER = 'FETCH_CURRENT_WEATHER';
export const FETCHED_CURRENT_WEATHER = 'FETCHED_CURRENT_WEATHER';
export const PIN_CURRENT_WEATHER = 'PIN_CURRENT_WEATHER';
export const UNPIN_CURRENT_WEATHER = 'UNPIN_CURRENT_WEATHER';
export const REFRESH_CURRENT_WEATHER = 'REFRESH_CURRENT_WEATHER';
export const REFRESHED_CURRENT_WEATHER = 'REFRESHED_CURRENT_WEATHER';

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

export const refreshCurrentWeatherCity = cityName => {
    return {
        type: REFRESH_CURRENT_WEATHER,
        cityName,
    }
};

export const refreshedCurrentWeatherCity = payload => {
    return {
        type: REFRESHED_CURRENT_WEATHER,
        payload,
    }
};

