import React from "react";
import YoutubeEmbed from "../components/YoutubeEmbed";
import Testimonial from "../components/Testimonial";
import { Reviews } from "../Utils/Reviews";
import '../styles/videoTour.css';
import Navbar from '../components/Navbar';

export default function videoTour() {
    return (
        <div className="videoTour">
        <Navbar />
            <p>Video Tour</p>
            <div className="sections">
                <h1>Hi-Rise 2 Bedroom 2 Bath</h1>
                <YoutubeEmbed embedId="rokGy0huYEA" />
            </div>
            <div className="sections">
                <h1>Midrise-Studio</h1>
                <YoutubeEmbed embedId="rokGy0huYEA" />
            </div>
            <div className="sections">
                <h1>Mid-Rise 1 Bedroom</h1>
                <YoutubeEmbed embedId="rokGy0huYEA" />
            </div>
            <div className="sections">
                <h1>Garden 1 Bedroom 1 Bath</h1>
                <YoutubeEmbed embedId="rokGy0huYEA" />
            </div>
            <div className="sections">
                <h1>Garden 2 Bedroom Den</h1>
                <YoutubeEmbed embedId="rokGy0huYEA" />
            </div>
            <div className="testimonials"><Testimonial slides={Reviews} /></div>
        </div>
    );
}
