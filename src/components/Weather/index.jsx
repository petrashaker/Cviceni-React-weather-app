import React from "react";
import './style.css';

import {convertTimeStamp} from '../../utils/index.js';

const Weather = ({weather}) => {
    return (
        <>
        { weather &&
            <div className={weather.main.temp < 10 ? "weather__current weather__current--cold" : "weather__current"}>
              <h2 className="weather__city" id="mesto">
              {weather.name}, {weather.sys.country}
              </h2>
              <div className="weather__inner weather__inner--center">
                <div className="weather__section weather__section--temp">
                  <span className="weather__temp-value" id="teplota">
                    {Math.round(weather.main.temp)}
                  </span>
                  <span className="weather__temp-unit">°C</span>
                </div>
                <div
                  className="weather__section weather__section--icon"
                  id="ikona"
                >
                  <img
                    src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                    alt="current weather icon"
                  />                  
                  <div className="weather__description" id="popis">
                  {weather.weather[0].description}
                  </div>
                </div>
              </div>
              <div className="weather__inner">
                <div className="weather__section">
                  <h3 className="weather__title">Wind</h3>
                  <div className="weather__value">
                    <span id="wind">{weather.wind.speed}</span> km/h
                  </div>
                </div>
                <div className="weather__section">
                  <h3 className="weather__title">Humidity</h3>
                  <div className="weather__value">
                    <span id="humidity">{weather.main.humidity}</span> %
                  </div>
                </div>
              </div>
              <div className="weather__inner">
                <div className="weather__section">
                  <h3 className="weather__title">Sunrise</h3>
                  <div className="weather__value">
                    <span id="sunrise">{convertTimeStamp(weather.sys.sunrise, weather.timezone)}</span>
                  </div>
                </div>
                <div className="weather__section">
                  <h3 className="weather__title">Sunset</h3>
                  <div className="weather__value">
                    <span id="sunset">{convertTimeStamp(weather.sys.sunset, weather.timezone)}</span>
                  </div>
                </div>
              </div>
            </div> }
        </>
    )
}

export default Weather;