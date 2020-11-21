import React, { Component } from 'react';
import './../../node_modules/weather-underground-icons/dist/wu-icons-style.css';
import './weather.css';
class Weather extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data:this.props.data1,
         }
    }
    render() { 

        


        return ( 
            <div></div>
         );
    }
}
 
export default Weather;