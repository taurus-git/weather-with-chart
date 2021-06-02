import React from "react";
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip
} from "recharts";

const Chart = forecastData => {
    let weatherData = [];

    let formatDate = date => {
        let dateObj = new Date(Date.parse(date));
        let day = dateObj.getDate();
        let month = dateObj.getMonth() + 1;
        let hours = dateObj.getHours();
        let minutes = dateObj.getMinutes();
        return `${day}.${month} at ${hours}:${minutes}`;
    }

    let data = forecastData.forecastData.data.list.map(day => {
        let temp = Math.round(day.main.temp);
        let dayName = formatDate(day.dt_txt);
        weatherData.push(
            {
                day: dayName,
                temp: temp
            }
        );
    })

    return (
        <>
            <AreaChart
                width={500}
                height={400}
                data={weatherData}
                layout={'vertical'}
                margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0
                }}
            >
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis type="number"/>
                <YAxis type="category" dataKey="day"/>
                <Tooltip/>
                <Area type="monotone" dataKey="temp" stroke="#8884d8" fill="#8884d8"/>
            </AreaChart>
        </>
    )
}

export default Chart;