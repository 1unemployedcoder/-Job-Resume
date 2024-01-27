import React from 'react';
import contacts from '../../assets/contacts.gif'
import ScrollAnimation from "../UI/ScrollAnimation/ScrollAnimation";
import tgLogo from '../../assets/contactsLogo/tgLogo.webp'
import mailLogo from '../../assets/contactsLogo/mailLogo.png'

const Contacts = ( { contactsRef } ) => {
    return (
        <div ref={contactsRef} className='contacts'>
            <span>
                Связь со мной
            </span>
            <div className="contacts__container">
                <ScrollAnimation animatedClass='animated-element'>
                    <div className='contacts__content'>
                        <div className='contact'>
                            <img
                                src={mailLogo}
                                alt="Gmail"/>
                            Почта для связи: <a href="mailto:alexshjobs@gmail.com">alexshjobs@gmail.com</a>
                        </div>
                        <div className='contact'>
                            <img
                                src={tgLogo}
                                alt="Telegram"/>
                            Телеграм для связи: <a href="https://t.me/txqume" target="_blank">@txqume</a>
                        </div>
                        <div className='contact'>
                            Открыт для ваших предложений.
                        </div>
                    </div>
                </ScrollAnimation>
            </div>
            <div className='contacts__img'>
                <ScrollAnimation animatedClass='animated-elementLate'>
                    <img src={contacts} alt=""/>
                </ScrollAnimation>
            </div>
        </div>
    );
};

export default Contacts;