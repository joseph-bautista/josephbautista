import React, {useState} from 'react';
import '../assets/css/body.css';
import AboutMe from '../AboutMe';
import Skills from '../Skills';
import Projects from '../Projects';
import { AppProvider, AppContext } from '../../context/AppContext';

const Body = () => {
    return (
        <AppProvider>
            <div className="container">
                <AboutMe/>
                <Skills/>
                <Projects/>
            </div>
        </AppProvider>
    );
};

export default Body;