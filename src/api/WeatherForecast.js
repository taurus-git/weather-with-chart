import axios from "axios";

let WeatherForecast = async (city) => {
    const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

    let weatherData = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${API_KEY}`
    )
    return weatherData;
}

export default WeatherForecast;