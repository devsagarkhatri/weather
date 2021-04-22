import React, { Component } from 'react';
import './top.css';
// import Weather from './weather';

class TopSection extends Component {
    
    render() { 
        // const { data } = this.props;
        var getData = () => {
            var loc = window.prompt("Enter Location : ");
            if (loc!=='') { 
                this.props.query1(loc);
            }
            
        }
        return ( 
            <div className="bottom-container">
                <div className="gradient">                 
                
                    <div className="top-containe"><br />
                        
                        <div className="gradient">
                            <div className="title">
                                Weather Forecast
                            </div>
                            <div className="weather-container">
                                
                                <div className="inner-container">
                                    <div className="image"><i className="wu wu-white wu-64 wu-mostlycloudy"></i></div>
                                    <div className="current-weather">32 &deg;C </div>    
                                </div>    
                                <div className="footer">Sunny</div>
                                <a href={"#"} onClick={getData}>Change Location</a>
                        </div>                
                        </div>
                    </div>
                </div>
        </div>
         );
    }
}
 
export default TopSection;