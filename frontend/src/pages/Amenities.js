import React , {useState} from 'react'
import { Container, Row, Col , Button } from 'react-bootstrap'
import Header from  '../components/Amencomp/Header';
import AmenInside from  '../components/Amencomp/AmenInside';
import AmenInside2 from  '../components/Amencomp/AmenInside2';
import Image from  '../components/Amencomp/Image';
import {Link} from 'react-router-dom'
import './styles.css'
const Amenities = () => {


  const [step , setStep] = useState("true")

  const handleStop = (e) =>{
    e.preventDefault()

  setStep(e.target.value);

  }


  const hi  = (step) => {
    switch(step)
  {
    case 'true' :
            return (<AmenInside/>);
    case 'false' :
             return (<AmenInside2/>);

  }

  }




  return (
<>
<Header/>
<Image />

<div className = "signup">
    <div className = "mainContainer">

    <div className = "stepIndicator">




<div className = "w-100 d-flex ">


          <Button variant="primary" size="lg" onClick = {handleStop} value = "true" className = "btnContainer space-x-4"  >
    Personal Amenities
        </Button>
          <hr />

                    <Button variant="primary" size="lg" onClick = {handleStop} value = "false" className = "btnContainer space-x-4"  >
              Community Amenities.
                  </Button>



          <hr />
</div>






    </div>
    <div className = "output">

{hi(step)}








    </div>

    </div>
    </div>






</>
  )
}

export default Amenities
