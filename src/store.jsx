import React, { Component } from 'react';
import { Container} from 'react-bootstrap';
import "./App.css";

class Store extends Component {    
        
  state = {
      loc: "",
      temp: "https://source.unsplash.com/1600x900/?",
      weatherType: "clouds",
      data: [],
      textData:[],
      forecastDays: 5,
      isLoaded: false,        
  };
    
  componentDidMount() {
    this.getLocation();
  }
  
  getLocation() {
    if (navigator.geolocation) {      
      return navigator.geolocation.watchPosition(this.showPosition);
    }
  }
  
  showPosition = async (position) => {
    // console.log("position=>>", position);
    var key = "43a74cbff04a4ab2afe144930211506";
    var URL = "https://api.weatherapi.com/v1/current.json?key=" + key + "&q=" + position.coords.latitude +","+ position.coords.longitude+ "&aqi=no";
    await fetch(URL).then((response) => response.json()).then((data) => {
      this.setState({
        data: data.current,
        isLoaded: true
      });
      this.setState({ textData: this.state.data.condition,loc:data.location['name'] });
      // console.log(data);
      this.getWeatherType();
    });
  }

  search() {
    let item = window.prompt("Enter Location : ");
    if(true){//item.match('/^[A-Za-z]+$/')
      this.setState({ loc: item,isLoaded:false }, () => {
        // console.log(this.state.loc);
        this.gotData();
      });        
      }      
  }
          
  gotData = async () => {
    if (!this.state.isLoaded) {
      var key = "43a74cbff04a4ab2afe144930211506";
      var URL = "https://api.weatherapi.com/v1/current.json?key=" + key + "&q=" + this.state.loc + "&aqi=no";
      await fetch(URL).then((response) => response.json()).then((data) => {            
        this.setState({
          data: data.current,            
          isLoaded: true
        });
        this.setState({ textData: this.state.data.condition });
        this.getWeatherType();
      })
      
    }      
  }

  getWeatherType = () => {

    var text = this.state.textData['text'];
    if (text !== undefined) {
      if (text.toLowerCase().includes("rain")) {
        this.setState({ weatherType: "rain" });
      }
      else if (text.toLowerCase().includes("cloud")) {
        this.setState({ weatherType: "cloud" });
      }
      else if (text.toLowerCase().includes("clear")) {
        this.setState({ weatherType: "clear" });
      }
      else if (text.toLowerCase().includes("sun")) {
        this.setState({ weatherType: "sun" });
      }
      else if (text.toLowerCase().includes("sun")) {
        this.setState({ weatherType: "sun" });
      }
      else if (text.toLowerCase().includes("thunder")) {
        this.setState({ weatherType: "thunder" });
      }
      else if (text.toLowerCase().includes("mist")) {
        this.setState({ weatherType: "mist" });
      }  
    }      
  }
  
    

  render() {
    
    var { temp_c } = this.state.data;
    var text = this.state.textData['text'] || '';
    // console.log(this.state.weatherType);
    return ( 
        <Container className="app-container">                
            <Container className="main-container">
                <div
                  className="top-container"
                  style={{
                    backgroundImage: `url(${this.state.temp + this.state.weatherType})`,
                    backgroundSize: "100% 100%",
                    
                  }}
                >
                  <div className="gradient" style={{background:"linear-gradient(180deg,rgba(255,255,255,1),rgba(255,255,255,.5) 70%,transparent)",minHeight:"100%"}}>
                    <div className="title">
                      <br />
                      <h1>Weather Forecast{" "}</h1>
                    </div>
                    <div className="weather-container">
                      <div className="header">{""}</div>
                      <br />
                      <div className="inner-container" style={{alignContent:"center",alignSelf:"center",alignItems:"center"}}>
                        <center><table border="0">
                          <tbody>
                            <tr>
                              <td rowSpan="1"><img src={this.state.textData['icon']} height="150" alt=""/></td>
                              <td style={{maxHeight:"20px"}}>
                                <h2>{temp_c} &deg;C{" "}</h2>
                                {text}
                              </td>
                            </tr>                            
                          </tbody>
                        </table>
                        </center>                                                
                      </div>
                      <div className="footer">                        
                        <font style={{ textTransform: "capitalize" }}>
                          Current Search : {this.state.loc}
                        </font>
                        <br/><br/>
                        <button onClick={(event)=>this.search()} style={{borderRadius:"15px",padding:"7px", background:"lightblue"}}>
                          Change Location
                        </button>
                      </div>
                    </div>
                    <br/><br/><br/>
                  </div>
                </div>
            </Container>
        </Container>
      );
  }
}
 
export default Store;