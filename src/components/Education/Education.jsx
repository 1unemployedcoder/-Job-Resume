import React from 'react';
import ScrollAnimation from "../UI/ScrollAnimation/ScrollAnimation";
import tkuik from '../../assets/tkuik.png'
import educationGif from '../../assets/education.gif'

const Education = ( { educationRef } ) => {
    return (
        <div ref={educationRef} className='edu'>
            <span>Образование</span>
            <div className='edu__info'>
                <ScrollAnimation animatedClass='animated-element'>
                    <div className='edu__container'>
                        <img src={tkuik} alt=""/>
                        <div>
                            <h2 className='edu__item'>
                                Технологический колледж управления и коммерции
                            </h2>
                            <h4 className='edu__item'>
                                Компьютерные системы и комплексы
                            </h4>
                            <div className='edu__item'>
                                Сентябрь 2019 - Июнь 2023
                            </div>
                            <div className='edu__item'>
                                На практике реализовал:
                            </div>
                            <ul className='edu__item'>
                                <li>
                                    Telegram бот, который собирает данные с датчика Arduino
                                </li>
                                <li>
                                    Создал БД в Microsoft SQL учета продуктов с тестами и триггерами
                                </li>
                                <li>
                                    Сделал карту установки точек wi-fi для общежития с учетом прокладки кабелей
                                </li>
                            </ul>
                        </div>
                    </div>
                    <p className='edu_line'/>
                </ScrollAnimation>
            </div>
            <div className='edu__img'>
                <ScrollAnimation animatedClass='animated-element3'>
                    <img src={educationGif} alt=""/>
                </ScrollAnimation>
            </div>
        </div>
    );
};

export default Education;