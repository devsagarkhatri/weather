// import axios from 'axios';
// import { useCallback } from 'react';

let weather = require('openweather-apis');

const API_KEY= "7926496c354685ac73197e6c1d532ac1";

export async function weatherBalloon( cityID ) {
    var key = '7926496c354685ac73197e6c1d532ac1';
    var URL = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityID+ '&appid=' + key;
    console.log(URL);
    try {
        const result = await fetch(URL);
    
        if (result.status === 200) {
          return { success: true, data: await result.json() };
        }
    
        return { success: false, error: result.statusText };
      } catch (ex) {
        return { success: false, error: ex.message };
      }
    //  const result = await fetch(URL)  
    // .then(function(resp) { return resp.json() }) // Convert data to json
    // .then(function(data) {
        
    //     console.log(data);
    //     console.log(typeof(data));
    //     return [data];
    // })
    // .catch(function() {
    //   // catch any errors
    // });
    
  }


export function getLocation() {
    if (navigator.geolocation) {
        return navigator.geolocation.watchPosition(showPosition);        
    } 
}

export function showPosition(position) {
    weather.setCoordinate(position.coords.latitude, position.coords.longitude);
    weather.setUnits('metric');
    weather.setAPPID(API_KEY);
    weather.getAllWeather(function (err, data) {          
        console.log(data);
        return data.json();
        
        
    });
    
}

