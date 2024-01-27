import React from 'react';
import {Sticky} from "react-sticky";
import Navbar from "../../navbar/Navbar";

const StickyNavbar = ({skillsRef, educationRef, experienceRef, contactsRef}) => {
    return (
        <Sticky>
            {({ style }) => (
                <div style={style}>
                    <Navbar
                        skillsRef={skillsRef}
                        educationRef={educationRef}
                        experienceRef={experienceRef}
                        contactsRef={contactsRef}
                    />
                </div>
            )}
        </Sticky>
    );
};

export default StickyNavbar;