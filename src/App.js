import React, { useState, useRef } from 'react';
import './styles/styles';
import Greeting from './components/Greeting/Greeting';
import Skills from './components/Skills/Skills';
import Education from './components/Education/Education';
import Experience from './components/Experience/Experience';
import Contacts from './components/Contacts/Contacts';
import { StickyContainer } from 'react-sticky';
import StickyNavbar from './components/UI/stickyElements/stickyNavbar/stickyNavbar';
import StickyButton from './components/UI/stickyElements/stickyButton/stickyButton';
import Loader from "./components/UI/loader/Loader";
import {useLoader} from "./hooks/useLoader";

const App = () => {
    const greetingRef = useRef();
    const skillsRef = useRef();
    const educationRef = useRef();
    const experienceRef = useRef();
    const contactsRef = useRef();
    const [isLoading, setIsLoading] = useState(true);

    useLoader(setIsLoading)

    return (
        <div className='App'>
            {isLoading ? (
                <Loader />
            ) : (
                <StickyContainer>
                    <StickyNavbar
                        contactsRef={contactsRef}
                        educationRef={educationRef}
                        experienceRef={experienceRef}
                        skillsRef={skillsRef}
                    />
                    <Greeting contactsRef={contactsRef} greetingRef={greetingRef} />
                    <StickyButton greetingRef={greetingRef} />
                    <Skills skillsRef={skillsRef} />
                    <Education educationRef={educationRef} />
                    <Experience experienceRef={experienceRef} />
                    <Contacts contactsRef={contactsRef} />
                </StickyContainer>
            )}
        </div>
    );
};

export default App;
