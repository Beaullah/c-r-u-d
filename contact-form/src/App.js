import 'bootstrap/dist/css/bootstrap.min.css';
import React , {Component} from 'react'
import './App.css';
import { Col, Container, Row } from 'react-bootstrap';
import Users from './Components/Users';


class App extends Component {
  constructor(props){
    super(props);
    this.state = { 
      users: [
      {
        name: "ama",
        email: "tgb@gmail.com",
        gen: 20
      },
      {
        name: "kofi",
        email: "kljhh@gmail.com",
        gen: 20
      },
      {
        name: "yaw",
        email: "ujj@gmail.com",
        gen: 20
      },
    ]
    }
  }
  render(){
  return (
   <>
     <Container fluid>
      <Row>
        <Col md="4">
          Form
        </Col>
        <Col>
         <Users userData ={this.state.user}/>
        </Col>
      </Row>

     </Container>
   </>
  );
}
}

export default App;
