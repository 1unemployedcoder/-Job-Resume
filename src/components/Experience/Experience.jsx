import React from 'react';
import ScrollAnimation from "../UI/ScrollAnimation/ScrollAnimation";
import Carousel from "../UI/carousel/Carousel";
import auth from '../../assets/mockShop/auth.png'
import cart from '../../assets/mockShop/cart.png'
import goodItem from '../../assets/mockShop/goodItem.png'
import goods from '../../assets/mockShop/goods.png'
import order from '../../assets/mockShop/order.png'
import Button from "../UI/button/Button";

const Experience = ( { experienceRef } ) => {
    const slides = [
        { image: goods, alt: 'Товары' },
        { image: cart, alt: 'Корзина' },
        { image: goodItem, alt: 'Товар' },
        { image: order, alt: 'Чек' },
        { image: auth, alt: 'Авторизация' }
    ];

    const link = () => {
        const externalUrl = 'https://github.com/1unemployedcoder/Mock-Shop';
        window.open(externalUrl, '_blank');
    };

    return (
        <div ref={experienceRef} className='experience'>
            <span>
                Мои проекты
            </span>
            <div className='experience__container'>
                <ScrollAnimation animatedClass='animated-element'>
                    <div className='experience__content'>
                        <Carousel slides={slides} />
                        <div className='experience__border'>
                            <div className='experience__about'>
                            Mock Shop
                            </div>
                            <div className='experience__about'>
                                Создан в течение пары дней
                            </div>
                            <div className='experience__about text'>
                                Проект сделан как макет магазина, если предоставить подходящий JSON, то он сможет
                                работать с
                                товарами. Вмещает в себя много популярного практического функционала, прошу ознакомиться
                                подробнее по ссылке ниже.
                            </div>
                            <div className='experience__about'>
                                Используется
                                <ul>
                                    <li>
                                        Декомпозиция
                                    </li>
                                    <li>
                                        Кастомные хуки
                                    </li>
                                    <li>
                                        useContext
                                    </li>
                                    <li>
                                        Пагинация
                                    </li>
                                </ul>
                            </div>
                            <Button onClick={link}>ССЫЛКА</Button>
                        </div>
                    </div>
                </ScrollAnimation>
            </div>
        </div>
);
};

export default Experience;