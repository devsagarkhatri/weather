import React, { Component } from 'react';
import { Container, Button} from 'react-bootstrap';
//import { getLocation } from './key.js';

class Store1 extends Component {
    constructor(props){
        super(props)        
        this.search = this.search.bind(this)
        this.state = { 
            loc:'weather',
            sunny: 'sun',
            rainy: 'rain',
            cloudy:'cloud',
            temp:'https://source.unsplash.com/1600x900/?',
            store:'',
            city:''
         }
    }
    state = { 
        loc:'clear',
        temp:'https://source.unsplash.com/1600x900/?',
        store:[]
     }
     async search(){
        // let item = window.prompt("Enter Location : ");
        let item = 'Delhi';
        this.setState({loc:item});         
        var key = '7926496c354685ac73197e6c1d532ac1';
        var URL = 'https://api.openweathermap.org/data/2.5/weather?q=' + item+ '&appid=' + key;        
        
        const result = await fetch(URL).then(function(res){
            try{        
                if (res.status === 200) {
                    let set = res.json();
                    console.log(set);
                    return { success: true, data: set };
                }            
                return { success: false, error: result.statusText };
              } 
              catch (ex) {
                return { success: false, error: ex.message };
              }
        });
        this.setState({store:result});
        console.log("state.store => ",this.state.store);    
     }

    componentDidMount(){
        this.search();
    }
    render() {    
        return ( 
            <Container className="app-container">                
                <Container className="main-container">                
                        <div className="top-container" style={{backgroundImage: `url(${this.state.temp+this.state.loc})`}}>
                        <div className="gradient">
                            <div className="title"><br/>Weather Forecast </div>
                            <div className="weather-container">
                                <div className="header">{''}</div><br/>
                                <div className="inner-container">
                                    <div className="image"><i className="wu wu-white wu-64 wu-mostlycloudy"></i></div><br/>
                                    <div className="current-weather">32 &deg;C </div>    
                                </div>    
                                <div className="footer">
                                    <font style={{textTransform: 'capitalize'}}>Current Search :{this.state.loc}</font>
                                    <br/><br/>
                                    <Button variant="light"  onClick={this.search}>Change Location</Button>
                                </div>
                            </div>                
                        </div>
                    </div>                                    
                </Container>            
            </Container>
            );
    }

} 
export default Store1;

