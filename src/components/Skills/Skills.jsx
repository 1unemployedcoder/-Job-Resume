import React from 'react';
import ScrollAnimation from "../UI/ScrollAnimation/ScrollAnimation";
import businessTeam from '../../assets/businessTeam.gif';
import {FaHtml5} from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiAxios } from "react-icons/si";

const Skills = ( { skillsRef } ) => {
    return (
        <div ref={skillsRef} className='skills'>
            <span>Мои навыки</span>
            <div className='skills__level'>
                <ScrollAnimation animatedClass='animated-element2'>
                    <div className='skills__border'>
                        <p>HTML/CSS</p>
                        <div className='skills__bar'>
                            <div className='skills__percentage' style={{width: '50%'}}>
                            </div>
                        </div>
                        <p>JavaScript/React</p>
                        <div className='skills__bar'>
                            <div className='skills__percentage' style={{width: '70%'}}>
                            </div>
                        </div>
                        <p>Коммуникабельность</p>
                        <div className='skills__bar'>
                            <div className='skills__percentage' style={{width: '90%'}}>
                            </div>
                        </div>
                    </div>
                </ScrollAnimation>
            </div>
            <div className='skills__about'>
                <ScrollAnimation animatedClass='animated-element'>
                    <div className='skills__border'>
                        <h2>P.S</h2>
                        Таким образом я оцениваю свои навыки в этих сферах. Из-за CodeWars сам JS мне более менее
                        понятен, как и React, но нужно много практики. То, как устроена верстка в React мне
                        нравится, но пока я допускаю некоторые ошибки в виду отсутствия большого опыта. Зато, я считаю
                        себя коммуникабельным и простым в общении.
                    </div>
                </ScrollAnimation>
            </div>
            <div className='skills_img'>
                <ScrollAnimation animatedClass='animated-element3'>
                    <img src={businessTeam} alt=""/>
                </ScrollAnimation>
            </div>
            <div className='skills__icons'>
                <ScrollAnimation animatedClass='animated-element'>
                <FaHtml5/>
                <FaCss3 />
                <IoLogoJavascript />
                <FaReact />
                <SiAxios />
                </ScrollAnimation>
            </div>
        </div>
    );
};

export default Skills;