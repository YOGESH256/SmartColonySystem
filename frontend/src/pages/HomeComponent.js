import { Container, Row} from "react-bootstrap";
import { Link } from 'react-router-dom';
import styled from 'styled-components'; 

const HomeComponent = () => {
  const Button = styled.button`
  background-color: black;
  color: white;
  font-size: 20px;
  padding: 10px 60px;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
`;

  return (
    <Container id="home">
      <Row>
      <div className="logo-container" id="home-header">
          Smart<font>Colony</font>
      </div>
      <div>
      <Link to="/admin"><Button> Admin </Button></Link>
      </div>
      </Row>
        <div className="cover">
        <Link to="/service" className="parent" id="section-services">
            <div className="child" >
            <h1>Services</h1>
            </div>
          </Link>
          <Link to="/rental" className="parent" id="section-rental">
            <div className="child" >
            <h1>Rental</h1>
            </div>
          </Link>
        </div>
    </Container>
  );
};

export default HomeComponent;
