import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import AmenInside from "../components/Amencomp/AmenInside";
import AmenInside2 from "../components/Amencomp/AmenInside2";
import Image from "../components/Amencomp/Image";
// import './styles.css'
const Amenities = () => {
  const [step, setStep] = useState("true");
  const handleStop = (e) => {
    e.preventDefault();
    setStep(e.target.value);
  };
  const hi = (step) => {
    switch (step) {
      case "true":
        return <AmenInside />;
      case "false":
        return <AmenInside2 />;
    }
  };

  return (
    <>
      <Image />

      <div className="Amen_signup">
        <div className="Amen_mainContainer">
          <div className="Amen_stepIndicator">
            <div className="w-100 d-flex" style={{justifyContent:"center"}}>
              <Button
                variant="primary"
                size="lg"
                onClick={handleStop}
                value="true"
                className="Amen_btnContainer space-x-4"
              >
                Personal Amenities
              </Button>
              <hr style={{border: "1px solid red"}} />
              <Button
                variant="primary"
                size="lg"
                onClick={handleStop}
                value="false"
                className="AmenbtnContainer space-x-4"
              >
                Community Amenities.
              </Button>

              <hr />
            </div>
          </div>
          <div className="Amen_output">{hi(step)}</div>
        </div>
      </div>
    </>
  );
};

export default Amenities;
