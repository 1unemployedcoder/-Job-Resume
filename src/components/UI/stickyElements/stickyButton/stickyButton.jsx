import React from 'react';
import Button from "../../button/Button";

const StickyButton = ({greetingRef}) => {
    return (
        <Button className='stickyButton'
                onClick={() => {
            greetingRef.current?.scrollIntoView({behavior: 'smooth'})
        }}>
            НАВЕРХ
        </Button>
    );
};

export default StickyButton;