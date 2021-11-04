import React,{Component} from'react';
import Title from '../Title/Title'
import WeatherInfo from '../WeatherInfo/WeatherInfo'
import "./WeatherCity.css"
import {CLOUD, CLOUDY, SUN, RAIN, SNOW, WINDY} from "../../Constants/Icons"
const axios= require('axios').default;

const data={
    temp:31,
    icon: SNOW,
    humidity: "25",
    wind: "10"
}

const data2={
    temp:31,
    icon: SNOW,
    humidity: "25",
    wind: "10"
}
//const url ="https://run.mocky.io/v3/0c3e6285-a101-48c1-8a66-5ae1739fa04c";
const url = "http://api.openweathermap.org/data/2.5/weather?q=London&appid=8300664084a1f5f8ac96117a0a7eb989"
class WeatherCity extends Component {

    constructor(){
        super();
        this.state={
            city:"Cali",
            data:data
        }
    }
 /*   handleUpdateClick = () =>{
        console.log("Actualiza!!");
        fetch(url).then(resolve =>{
         return resolve.json();
        }).then(data =>{
        console.log(data)
        })
    }
    handleUpdateClick=() => {
        console.log("Actualiza!!");
        this.setState({
            city:"Palmira"
        })
    };*/

    getData = response_Data =>{
        const {humidity,temp} = response_Data.main;
        const {speed} = response_Data.wind;
        const weatherState = SNOW;

        const new_temp = Math.round((temp - 32) * 5/9);
        const data = {
            humidity,
            temp:new_temp,
            wind: speed,
            icon: weatherState
        }

        return data;
    }
    handleUpdateClick = () =>{
        console.log("Actualiza!!");
        axios.get(url).then(data =>{
            console.log(data.data)
            const newData = this.getData(data.data);
            this.setState({
                city: "Palmira",
                data: newData,
            })
        
        }).catch(err =>{console.log(err)})
    }
    
   render(){
    const {city,data}=this.state;
    return (
        <div className="weatherCity">
            <Title label={city} />
            <WeatherInfo data={data} />
            <button onClick={this.handleUpdateClick}>Actualizar</button>
        </div>
    );
   } 
}

export default WeatherCity;