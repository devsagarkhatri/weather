import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';
import TopSection from './components/top';
import BottomSection from './components/bottom';
import { getLocation} from './key.js';

class Store extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            data:[],
        }
    }
        
    componentDidMount() {
        
        this.setState({ data: getLocation()});
    };

    render() { 
        return ( 
            <Container className="app-container">                
                <Container className="main-container">
                    <Row className="top-section">
                      
                        {console.log(this.state.data)}
                        <TopSection data1={this.state.data} />
                        
                    </Row>
                    <Row className="bottom-section">
                        <BottomSection  data={this.state.data}/>
                    </Row>
                </Container>
            </Container>
         );
    }
}
 
export default Store;