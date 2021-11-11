import React, { useEffect, useState } from "react";
import "./App.css";
import Forecast from "./components/Forecast";
import Weather from "./components/Weather";

import {oneForecastPerDay} from './utils/index.js';

const App = () => {
  const appiKey = process.env.REACT_APP_MY_API_ID;

  const [city, setCity] = useState('istanbul');
  const [weather, setWeather] = useState(null);

  //stahuji předpověď počasí na aktuální den
  const fetchWeather = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${appiKey}`)
    .then(response => response.json())
    .then(json => setWeather(json))
  }
  useEffect(() => {
    fetchWeather();
  }, [city])

  //stahuji předpověď počasí na 5 dní
  const [forecast, setForecast] = useState(null);
  const fetchFiveDaysWeather = () => {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${appiKey}`)
    .then(response => response.json())
    // .then(json => setForecast(json)) // výpis předpovědi na 5 dní po 3 hodinách
    .then(json => setForecast(oneForecastPerDay(json.list, 8))) // výpis předpovědi na 5 dní, jedenkrát každý den
  }
  useEffect(() => {
    fetchFiveDaysWeather();
  }, [weather])

  return (
    <div className="App">
      <div className="container">
        <h1>My Weather App</h1>
        <div className="button-group">
          <button className="button" onClick={({target}) => setCity(target.value)} value="Prague">Prague</button>
          <button className="button" onClick={({target}) => setCity(target.value)} value="Istanbul">Istanbul</button>
          <button className="button" onClick={({target}) => setCity(target.value)} value="Stockholm">Stockholm</button>
        </div>

         <div className="weather">
            <Weather weather = {weather}/>
          
            <div className="weather__forecast" id="predpoved">
            <Forecast forecast = {forecast} />
            </div>
        
        </div>
      </div>
    </div>
  );
};

export default App;
