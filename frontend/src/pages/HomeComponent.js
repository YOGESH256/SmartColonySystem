import { Container} from "react-bootstrap";
import { Link } from 'react-router-dom';

const HomeComponent = () => {
  
  return (
    <Container id="home">
      <div className="logo-container" id="home-header">
          Smart<font>Colony</font>
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
    </Container>
  );
};

export default HomeComponent;
