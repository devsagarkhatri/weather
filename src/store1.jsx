import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';
import TopSection from './components/top';
import BottomSection from './components/bottom';
import { get,getLocation, fetchWeather} from './key.js';
import { useState } from 'react';

const Store1=()=> {
    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});
    const search1 = async (e) => {
        var loc = window.prompt("Enter Location : ");
            if (loc!='') { 
                const data = await fetchWeather(loc);
                setWeather(data);
                console.log(loc);
            }
    }
    const search = async (e) => {        
        const data = await fetchWeather(query)
        setWeather(data);
        setQuery('');    
    }
    return ( 
        <Container className="app-container">                
            <Container className="main-container">

                <Row className="top-section">                    
                    {/* <TopSection data1={''} query1={search}/> */}
                    <div className="top-container"><br />                
                        <div className="gradient">
                            <div className="title">
                                Weather Forecast
                            </div>
                            <div className="weather-container">
                                <div className="header">{''}</div><br></br>
                                <div className="inner-container">
                                    <div className="image"><i className="wu wu-white wu-64 wu-mostlycloudy"></i></div>
                                    <div className="current-weather">32 &deg;C </div>    
                                </div>    
                                <div className="footer">Sunny</div>
                                <a onClick={search1}>Change Location</a>
                            </div>                
                        </div>
                    </div>                    
                </Row>

                <Row className="bottom-section">

                    <BottomSection data={''} />
                    
                </Row>
            </Container>
        </Container>
        );
}

 
export default Store1;