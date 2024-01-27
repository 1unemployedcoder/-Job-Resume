import React from 'react';
import ThumbDown from "../styledComponents/ThumbDown";
import ScrollAnimation from "../UI/ScrollAnimation/ScrollAnimation";
import businessGif from '../../assets/buisnessGuy.gif';
import Button from "../UI/button/Button";

const Greeting = ( { greetingRef, contactsRef } ) => {
    return (
        <div ref={greetingRef} className='greeting'>
            <div className='aboutme__left'>
                <ScrollAnimation animatedClass='animated-element'>
                    <h1>
                        Привет, Я Александр
                    </h1>
                    <div>
                        Мне 21 год и я начинающий front-end разработчик на React. Имею опыт разработки с
                        react-router-dom / axios /
                        styled components и тп. Так же иногда решаю задачи на
                        CodeWars. А подробнее Вы узнаете листая ниже <ThumbDown/>
                    </div>
                    <Button onClick={() => {
                        contactsRef.current?.scrollIntoView({behavior: 'smooth'})
                    }}>СВЯЗЬ СО МНОЙ</Button>
                </ScrollAnimation>
            </div>
            <img src={businessGif} alt="businessGif"/>
        </div>
    );
};

export default Greeting;