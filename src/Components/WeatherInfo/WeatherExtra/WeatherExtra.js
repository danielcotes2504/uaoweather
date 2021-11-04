import React from "react";

const WeatherExtra = function ({humidity,wind}) {
    return (
        <div>
            <h5>{`${wind} m/s`}</h5>
            <h5>{`${humidity}% hm`}</h5>
        </div>
    )
}

export default WeatherExtra;