import React, {useContext, useState} from 'react';
import './assets/css/about-me.css';
const AboutMe = () => {

    
    return (
        
        <div id="home">
            <div className="row"> 
                <div className="col-lg-4 offset-lg-4" id="imageme">
                    <img src={require("./assets/images/me2.jpg")} className="img-fluid" id="me" />
                </div>
            </div> 
            <div className="row">
                <div className="col-lg-12" id="desc">
                    <h2 id="myname">
                        Joseph Bautista
                    </h2>
                    <h6 id="job">Software Developer</h6>
                    <p className="expound"> 
                        Hi, I am a software developer based in the Philippines. I have more than 5 years working in software development industry. I worked as Full Stack Web Application Developer for more than 4 years and, right now, I am working remotely as Back End Engineer at <a href="https://xctuality.com" target="_blank"><strong>Xctuality Lte. Ptd.</strong></a>, a Singapore-based tech-start up, for more than a year until present. I believe that studying is a lifetime commitment, that's why during my free time I am exploring new things in tech such as blockchain technology, cryptocurrency and Artificial Intelligence.
                    </p>
                    <p className="expound">
                        I am open for new opportunities that would need my services in software development. If you have one for me, please email me at <a href="mailto:josephreuben.bautista@gmail.com" target="_blank"><strong><em className="ref">josephreuben.bautista@gmail.com</em></strong></a>
                    </p>
                    <p className="expound">
                        <strong>I am looking forward to work with you. Kudos!</strong>
                    </p>
                    
                </div> 
            </div> 
            
        </div>	
    );
};

export default AboutMe;