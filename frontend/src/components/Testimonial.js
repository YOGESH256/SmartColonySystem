import React, { useState } from 'react';
import { Reviews } from '../Utils/Reviews';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

const Testimonial = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <section className='slider'>
            <div className="heading">
                <h1 style={
                    {
                        textAlign: "center",
                        fontSize: "50px",
                        color: "rgba(0, 0, 0, 0.89)"
                    }
                }>Testimonial</h1>
                <p style={
                    {
                        textAlign: "center",
                        fontSize: "35px",
                        color: "#008CBA"
                    }
                }>OUR RESIDENTS LOVE IT HERE</p>
            </div>
            <div className="Arrow">
                <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide}
                    style={
                        {
                            float: "left",
                            margin: "7% 1%",
                        }
                    } />

                <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide}
                    style={
                        {
                            float: "right",
                            margin: "7% 1%",
                        }
                    } />
            </div>
            {
                Reviews.map((slide, index) => {
                    return (
                        <>
                            <div
                                className={index === current ? 'slide active' : 'slide'}
                                key={index}
                                style={
                                    {
                                        paddingLeft: "2%",
                                        paddingRight: "2%",
                                        maxheight: "50px",
                                        maxwidth: "150px",
                                    }
                                }
                            >
                                {index === current && (
                                    <>
                                        <h2 style={{
                                                    textAlign: "center",
                                                    color: "black",
                                                    fontFamily: ["Montserrat","Montserrat Local Fallback","sans-serif"],
                                                    fontSize: "1rem",
                                                    fontWeight: "400",
                                                    lineHeight: "1.8",
                                                }}>
                                            "{slide.desc}"
                                        </h2>
                                        <p style={
                                            {
                                                textAlign: "right",
                                                color: 'red',
                                            }
                                        }>- {slide.name}</p>
                                    </>
                                )}
                            </div>
                        </>
                    );
                })
            }
        </section >
    );
};

export default Testimonial;