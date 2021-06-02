import C from "../constants/constatnts";
import WeatherForecast from "../api/WeatherForecast";

export const getForecast = cityName => async dispatch => {
    let forecast = '';
    try {
        forecast = await WeatherForecast(cityName);
    } catch (err) {
        forecast = '';
    }

    dispatch({
        type: C.GET_FORECAST,
        forecast,
    })
}