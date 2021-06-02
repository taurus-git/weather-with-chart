import React from "react";
import Chart from "../components/Chart";

const Forecast = ({forecast}) => {
    let forecastData = {};
    let warningMessage = "";

    if (typeof (forecast.forecast) === "object") {
        forecastData = forecast.forecast;
    } else if (typeof (forecast.forecast) === "string") {
        warningMessage = "Couldn't find this city";
    }

    return (
        <>
            {(forecastData && Object.keys(forecastData).length !== 0 && forecastData.constructor === Object) ?
                <Chart forecastData={forecastData}/> : <h4>{warningMessage}</h4>}
        </>
    )
}

export default Forecast;