import React, {useRef, useState} from 'react';
import '../../../styles/main.css';
import {useObserver} from "../../../hooks/useObserver";

const ScrollAnimation = ({ children, animatedClass }) => {
    const [isVisible, setIsVisible] = useState(false);
    const element = useRef()

    useObserver(element, setIsVisible)

    return (
        <div ref={element} className={`${animatedClass} ${isVisible ? 'visible' : ''}`}>
            {children}
        </div>
    );
};

export default ScrollAnimation;
