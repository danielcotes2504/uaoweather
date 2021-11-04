import React from "react";
import WeatherTemp from "./WeatherTemp/WeatherTemp";
import WeatherExtra from "./WeatherExtra/WeatherExtra";


const WeatherInfo = function ({data}) {
  const {temp,humidity,icon,wind}=data;
  return (
    <div>
      <WeatherTemp temp={temp} icon={icon} />
      <WeatherExtra humidity={32} wind={10} />
    </div>
  );
};

export default WeatherInfo;
