import React, { useState } from 'react';
import { SliderData } from '../Utils/SliderData.js';
import '../styles/Carousel.css'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

// const Carousel = ({ slides }) => {
//     const [current, setCurrent] = useState(0);
//     const length = slides.length;

//     const nextSlide = () => {
//         setCurrent(current === length - 1 ? 0 : current + 1);
//     };

//     const prevSlide = () => {
//         setCurrent(current === 0 ? length - 1 : current - 1);
//     };

//     if (!Array.isArray(slides) || slides.length <= 0) {
//         return null;
//     }

//     return (
//         <section className='slider'>
//             <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
//             {SliderData.map((slide, index) => {
//                 return (
//                     <div
//                         className={index === current ? 'slide active' : 'slide'}
//                         key={index}
//                     >
//                         {index === current && (
//                             <img src={slide.image} alt='travel image' className='image'
//                                 style={
//                                     {
//                                         height: "500px",
//                                         width: "1000px",
//                                         marginLeft: "200px",
//                                     }
//                                 } />
//                         )}
//                     </div>
//                 );
//             })}
//             <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
//         </section>
//     );
// };


const Carousel = ({ slides }) => {

    return (
        <div className="car">
            <input type="radio" name="position" checked />
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
