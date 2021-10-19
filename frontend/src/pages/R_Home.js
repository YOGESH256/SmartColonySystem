import React from 'react';
import Carousel from '../components/Carousel';
import Testimonial from '../components/Testimonial';
import { Reviews } from '../Utils/Reviews';
import { SliderData } from '../Utils/SliderData';
import flat from '../images/Building.PNG';

const R_Home = () => {
    return (
        <div>R Home
            <div className="R_home_carausel"><Carousel slides={SliderData} /></div>
            <div className="R_home_floorPlans">
                <h1>FLOOR PLANS</h1>
                <h2>APARTMENTS THAT ARE TAILORED TO YOU</h2>
                <p>Looking for an apartment that aligns with your unique style? Look no further! Our apartments
                    were designed with you in mind! We know how important it is to come home to a relaxing
                    and welcoming atmosphere! Check out our
                    available apartments with detailed information about the units, amenities and more.
                </p>
                <button className="R_home_button">View Floor Plans</button>
            </div>
            <div className="R_home_ammenities">
                <h1>SOMETHING FOR EVERYONE</h1>
                <div class="row">
                    <div class="column">
                        <img src={flat} alt="flat1" />
                    </div>
                    <div class="column">
                        <img src={flat} alt="flat2" />
                    </div>
                    <div class="column">
                        <img src={flat} alt="flat3" />
                    </div>
                </div>
                <button className="R_home_button">View All Our Ammenities</button>
            </div>
            <div className="R_home_testimonial">
                <div className="R_home_review">
                    <div className="R_home_comments"><Testimonial slides={Reviews} /></div>
                </div>
            </div>
        </div>
    )
}

export default R_Home;
