import React from 'react';
import Button from "../button/Button";

const Navbar = ({contactsRef, educationRef, experienceRef, skillsRef}) => {
    return (
        <div className='navbar'>
            <div className='navbar__items'>
                <Button onClick={() => {
                    skillsRef.current?.scrollIntoView({behavior: 'smooth'})
                }}>
                    Навыки
                </Button>
                <Button onClick={() => {
                    educationRef.current?.scrollIntoView({behavior: 'smooth'})
                }}>
                    Образование
                </Button>
                <Button onClick={() => {
                    experienceRef.current?.scrollIntoView({behavior: 'smooth'})
                }}>
                    Опыт
                </Button>
                <Button onClick={() => {
                    contactsRef.current?.scrollIntoView({behavior: 'smooth'})
                }}>
                    Связь со мной
                </Button>
            </div>
        </div>
    );
};

export default Navbar;