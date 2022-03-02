import React, { useState } from 'react';
import { SliderData } from '../Utils/SliderData.js';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

const Carousel = ({ slides }) => {

    return (
        <div className="car">
            <input type="radio" name="position" />
            <input type="radio" name="position" />
            <input type="radio" name="position" />
            <input type="radio" name="position" />
            <input type="radio" name="position" />
            {/* {SliderData.map((slide, index) => {
                return (
                    <main id="carousel">
                        <div class="item" src={slide.image} alt='travel image'></div>
                    </main>
                );
            })} */}
            <main id="carousel">
                <div class="item"></div>
                <div class="item"></div>
                <div class="item"></div>
                <div class="item"></div>
                <div class="item"></div>
            </main>
        </div>

    );
};


export default Carousel;
