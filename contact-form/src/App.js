import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Col, Container, Row } from 'react-bootstrap';

function App() {
  return (
   <>
     <Container>
      <Row>
        <Col md="4">
          Form
        </Col>
        <Col>
        Users
        </Col>
      </Row>

     </Container>
   </>
  );
}

export default App;
