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
    <div id="home-main">
      <div>
      <div className="logo-container" id="home-header">
          Smart<font>Colony</font>
      </div>
      <div style={{display: "flex", justifyContent: "right"}}>
        <Link to="/admin" style={{margin: "10px"}}><Button> Admin </Button></Link>
        <Link to="/login" style={{margin: "10px"}}><Button> Signin </Button></Link>
      </div>
      </div>
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
    </div>
  );
};

export default HomeComponent;
