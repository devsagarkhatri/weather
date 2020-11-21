import axios from 'axios';

let weather = require('openweather-apis');
let data=[];
const API_KEY= "7926496c354685ac73197e6c1d532ac1";
const BASE_URL= "https://api.openweathermap.org/data/2.5/forecast?";


export const fetchWeather = async (query) => {
    const {data} = await axios.get(BASE_URL, {
        q: query,
        units: 'metric',
        key:API_KEY,
    });
    return data;
}

// export function getLocation() {
//     if (navigator.geolocation) {
//         navigator.geolocation.watchPosition(showPosition);
//     } 
// }

// export function showPosition(position) {
//     weather.setCoordinate(position.coords.latitude, position.coords.longitude);

//     // weather.setCoordinate( 25.3176, 82.9739);
//     weather.setUnits('metric');
//     weather.setAPPID(API_KEY);
//     weather.getAllWeather(function (err, data) {
//         // data = name1;           
        
//     });
//     return data;
// }

// export function get() {
//     console.log(data);
//     return data;
// }
