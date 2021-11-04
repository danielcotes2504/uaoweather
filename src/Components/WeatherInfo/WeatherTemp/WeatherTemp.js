import React from "react";
import WeatherIcons from "react-weathericons";
import {CLOUD, CLOUDY, SUN, RAIN, SNOW, WINDY} from "../../../Constants/Icons"
import PropTypes from "prop-types"
const icons={
    [CLOUD]:"cloud",
    [CLOUDY]:"cloudy",
    [SUN ]:"day-sunny",
    [RAIN] :"rain",
    [SNOW] : "snow",
    [WINDY]: "windy"
};

const getWeatherIcon = function(weatherState){
    const icon = icons[weatherState] ? icons[weatherState]:"day-rain";
    return (<WeatherIcons name={icon} size="2x"/>)
};

const WeatherTemp = function ({temp,icon}) {
    return (
        <div>
            {getWeatherIcon(icon)}
            <h5>{`${temp}°C`}</h5>
        </div>
        
    );
};

WeatherTemp.propTypes = {
    temp : PropTypes.number.isRequired
}



export default WeatherTemp;