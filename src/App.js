import React, {useRef} from 'react';
import './styles/styles'
import Greeting from "./components/Greeting/Greeting";
import Skills from "./components/Skills/Skills";
import Navbar from "./components/UI/navbar/Navbar";
import Education from "./components/Education/Education";
import Experience from "./components/Experience/Experience";
import Contacts from "./components/Contacts/Contacts";

const App = () => {
    const greetingRef = useRef()
    const skillsRef = useRef()
    const educationRef = useRef()
    const experienceRef = useRef()
    const contactsRef = useRef()

    return (
        <div className='App'>
            <Navbar
                skillsRef={skillsRef}
                educationRef={educationRef}
                experienceRef={experienceRef}
                contactsRef={contactsRef}
            />
            <Greeting contactsRef={contactsRef} greetingRef={greetingRef}/>
            <Skills skillsRef={skillsRef}/>
            <Education educationRef={educationRef}/>
            <Experience experienceRef={experienceRef}/>
            <Contacts contactsRef={contactsRef}/>
        </div>
    );
};

export default App;