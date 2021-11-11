import React from "react";
import './style.css';

import {convertDateStamp} from '../../utils/index.js';

const Forecast = ({forecast}) => {
    return (
        <>
        {forecast && forecast.map ((item, i) => 
                <div className="forecast" key={i}>
                    <div className="forecast__day">{convertDateStamp(forecast[i].dt)}</div>
                    <div className="forecast__icon">
                    <img
                        src={`https://openweathermap.org/img/wn/${forecast[i].weather[0].icon}@2x.png`}
                        style={{ height: "100%" }}
                        alt="current weather icon"
                    />
                    </div>
                    <div className="forecast__temp">{Math.round(forecast[i].main.temp)} °C</div>
                </div>) }
        </>
    )
}

export default Forecast;