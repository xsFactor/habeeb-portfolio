import React, { useContext, useRef, useState } from 'react';
import Slider from 'react-slick';
import { FaQuoteLeft, FaArrowRight, FaArrowLeft, FaStar } from 'react-icons/fa';
import { ThemeContext } from '../../contexts/ThemeContext';
import { testimonialsData } from '../../data/testimonialsData';
import './Testimonials.css';

function Testimonials() {
    const { theme } = useContext(ThemeContext);
    const sliderRef = useRef();
    const [currentSlide, setCurrentSlide] = useState(0);

    const settings = {
        dots: false,
        adaptiveHeight: false,
        infinite: true,
        speed: 800,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        draggable: true,
        swipeToSlide: true,
        swipe: true,
        beforeChange: (old, next) => setCurrentSlide(next),
    };

    const gotoNext = () => sliderRef.current.slickNext();
    const gotoPrev = () => sliderRef.current.slickPrev();

    return (
        <>
            {testimonialsData.length > 0 && (
                <div
                    className='testimonials'
                    style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #0d1f0d 50%, #0a0a0a 100%)' }}
                >
                    {/* Header */}
                    <div className='testimonials--header'>
                        <h1 style={{ color: theme.primary }}>Testimonials</h1>
                        <p className='testimonials--subtitle'>What people say about working with me</p>
                    </div>

                    {/* Slider Area */}
                    <div className='testimonials--body'>
                        <div className='testimonials--slider'>
                            <Slider {...settings} ref={sliderRef}>
                                {testimonialsData.map((test) => (
                                    <div className='single--testimony' key={test.id}>
                                        <div
                                            className='testimonials--card'
                                            style={{
                                                border: `1px solid ${theme.primary}30`,
                                                boxShadow: `0 0 30px ${theme.primary}15`,
                                            }}
                                        >
                                            {/* Terminal bar */}
                                            <div className='testimonials--terminal-bar'>
                                                <span className='t-btn red' />
                                                <span className='t-btn yellow' />
                                                <span className='t-btn green' style={{ backgroundColor: theme.primary }} />
                                                <span className='t-terminal-title' style={{ color: theme.primary }}>
                                                    testimony.log
                                                </span>
                                            </div>

                                            {/* Card Body */}
                                            <div className='testimonials--card-body'>
                                                {/* Profile */}
                                                <div className='testimonials--profile'>
                                                    <div
                                                        className='review--img'
                                                        style={{
                                                            border: `2px solid ${theme.primary}`,
                                                            boxShadow: `0 0 15px ${theme.primary}40`,
                                                        }}
                                                    >
                                                        <img src={test.image} alt={test.name} />
                                                    </div>
                                                    <div className='testimonials--info'>
                                                        <h3 style={{ color: theme.primary }}>{test.name}</h3>
                                                        <h5 style={{ color: '#888' }}>{test.title}</h5>
                                                        {/* Stars */}
                                                        <div className='testimonials--stars'>
                                                            {[...Array(5)].map((_, i) => (
                                                                <FaStar key={i} style={{ color: theme.primary }} />
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Quote */}
                                                <div className='testimonials--quote'>
                                                    <FaQuoteLeft
                                                        className='quote-icon'
                                                        style={{ color: theme.primary }}
                                                    />
                                                    <p style={{ color: '#ccc' }}>{test.text}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Slider>

                            {/* Navigation */}
                            <div className='testimonials--nav'>
                                <button
                                    className='testimonials--navBtn'
                                    onClick={gotoPrev}
                                    style={{
                                        backgroundColor: '#0d0d0d',
                                        border: `1px solid ${theme.primary}50`,
                                        color: theme.primary,
                                        boxShadow: `0 0 10px ${theme.primary}20`,
                                    }}
                                >
                                    <FaArrowLeft />
                                </button>

                                {/* Dot indicators */}
                                <div className='testimonials--dots'>
                                    {testimonialsData.map((_, i) => (
                                        <div
                                            key={i}
                                            className={`testimonials--dot ${currentSlide === i ? 'testimonials--dot-active' : ''}`}
                                            style={{
                                                backgroundColor: currentSlide === i ? theme.primary : `${theme.primary}30`,
                                                boxShadow: currentSlide === i ? `0 0 8px ${theme.primary}` : 'none',
                                            }}
                                            onClick={() => sliderRef.current.slickGoTo(i)}
                                        />
                                    ))}
                                </div>

                                <button
                                    className='testimonials--navBtn'
                                    onClick={gotoNext}
                                    style={{
                                        backgroundColor: '#0d0d0d',
                                        border: `1px solid ${theme.primary}50`,
                                        color: theme.primary,
                                        boxShadow: `0 0 10px ${theme.primary}20`,
                                    }}
                                >
                                    <FaArrowRight />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Testimonials;