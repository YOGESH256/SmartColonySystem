import { Col } from "react-bootstrap";
import "../styles/FloorPlan.css";
const FloorCard = (props) => {
  return (
    <Col md={4} sm={6} xs={12} className="mb-5">
      <div className="card">
        {props.type}
        <div className="details">
          {/* <ul class="list-unstyled element-divider list-inline mb-0 text-md"> */}
          <ul >
            <li class="list-inline-item">{props.subtype} </li>
            <li class="list-inline-item">{props.bed} BHK</li>
            <li class="list-inline-item">{props.size} Sq.ft</li>
          </ul>
        </div>
        <div className="card-image">
          <img src={props.imageUrl} alt="Council-img" />
        </div>
        <div style={{borderBlockColor:"#000", borderBlock:"solid"}}>
          ${props.price}
        </div>
      </div>
    </Col>
  );
}

export default FloorCard;
