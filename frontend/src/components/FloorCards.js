import { Col, Card, Button } from "react-bootstrap";
import { route } from "react-router-dom";
// import "../styles/FloorPlan.css";
const FloorCard = (props) => {
  return (
    <Card md={4} sm={6} xs={12}
      className="mb-5 floor-card"
      border="light"
      style={{ width: "18rem" }}
    >
      <Card.Header>
        <h2 style={{ marginBottom: "12px" }}>{props.type}</h2>
        <br />
        <h3 style={{ marginBottom: "8px" }}>{props.subtype}&nbsp;&nbsp;{props.bed}&nbsp;&nbsp;{props.size}</h3>
      </Card.Header>
      <div className="img-container">
        <Card.Img variant="" src={props.imageUrl} />
      </div>
      <Card.Body>
        <div
          style={{
            height: "3.42rem",
            backgroundColor: "#f8f9fa",
            border: "1px solid #dee2e6",
            padding: "8px",
            margin: "0 0 8px 0",
            alignItems: "center",
          }}
        >
          <p
            style={{
              margin: "0 0 4px 0",
              fontSize: "1.2rem",
              fontWeight: "700 !important",
            }}
          >
            ${props.price}
            <small className="text-muted">/mo</small>
          </p>
        </div>
      </Card.Body>
    </Card>
  );
};

export default FloorCard;
