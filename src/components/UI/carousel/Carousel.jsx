import React, {useState} from 'react';

const Carousel = ({ slides }) => {
    const [currentSlide, setCurrentSlide] = useState(0)

    const prevSlide = () => {
        setCurrentSlide(prevIndex => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
    };

    const nextSlide = () => {
        setCurrentSlide(prevIndex => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className='carousel'>
            <button className='carousel_button prev' onClick={prevSlide}>&#11164;</button>
            <button className='carousel_button next' onClick={nextSlide}>&#11166;</button>
            <ul>
                {slides.map((slide, index) => (
                    <li key={index} className={index === currentSlide ? 'slide active' : 'slide'}>
                        <img src={slide.image} alt={slide.alt}/>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Carousel;