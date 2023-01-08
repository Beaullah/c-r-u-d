import 'bootstrap/dist/css/bootstrap.min.css';
import React , {Component} from 'react'
import './App.css';
import { Col, Container, Row } from 'react-bootstrap';
import Users from './Components/Users';
import AddUserForm from './Components/AddUserForm';


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
     <Container fluid style={{ marginTop: '2rem'}}>
      <Row>
        <Col md="4">
          <AddUserForm />
        </Col>
        <Col>
         <Users userData ={this.state.users}/>
        </Col>
      </Row>

     </Container>
   </>
  );
}
}

export default App;
