import React from 'react'
import './Styles.css';
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container, NavDropdown , Carousel } from 'react-bootstrap'

const AmenInside = () => {
  return (
<>

<div className = "container">
<h3>Communities </h3>
<div className = "row">
<div className = "col">
<ul className="list-group">
  <li className="list-group-item">Cras justo odio</li>
  <li className="list-group-item">Dapibus ac facilisis in</li>
  <li className="list-group-item">Morbi leo risus</li>
  <li className="list-group-item">Porta ac consectetur ac</li>
  <li className="list-group-item">Vestibulum at eros</li>
</ul>
</div>
<div className = "col">
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://resource.rentcafe.com/image/upload/q_auto,f_auto,c_limit,w_550,h_400/s3/2/7295/ross_sevensprings_communityroom1_9189-11x8.jpg"
      alt="First slide"
    />
    <Carousel.Caption>

      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://resource.rentcafe.com/image/upload/q_auto,f_auto,c_limit,w_550,h_400/s3/2/7295/ross_sevensprings_communityroom1_9189-11x8.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>

      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://resource.rentcafe.com/image/upload/q_auto,f_auto,c_limit,w_550,h_400/s3/2/7295/ross_sevensprings_communityroom1_9189-11x8.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>

      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
</div>
</div>
</>
  )
}

export default AmenInside
