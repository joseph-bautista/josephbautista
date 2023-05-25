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
                    <h6 id="job">Software Engineer</h6>

                    <p className="expound">
                        Hello, I'm Joseph, a software engineer based in the Philippines with a passion for developing innovative solutions. With over five years of experience in the software development industry, I have had the opportunity to work on various challenging projects and enhance my expertise in the field.
                    </p>

                    <p className="expound">
                        For the past four years, I have served as a Full Stack Web Application Developer, gaining valuable insights into both front-end and back-end development. During this time, I successfully contributed to the creation of user-friendly and robust web applications. Recently, I have been working remotely as a Back-End Engineer for <a href="https://xctuality.com" target="_blank"><strong>Xctuality Lte. Ptd.</strong></a>, a Singapore-based tech startup, where I have been involved in developing scalable and efficient back-end systems.
                    </p>

                    <p className="expound">
                        I firmly believe that continuous learning is key to staying ahead in the rapidly evolving tech industry. To fuel my curiosity and expand my skill set, I dedicate my free time to exploring emerging technologies such as blockchain, web3, and Artificial Intelligence. This allows me to stay abreast of the latest advancements and discover new ways to leverage technology in software development.
                    </p>

                    <p className="expound">
                        I am currently open to new opportunities that would benefit from my skills and experience in software development. If you have any exciting projects or positions available, please don't hesitate to contact me at <a href="mailto:josephreuben.bautista@gmail.com" target="_blank"><strong><em className="ref">josephreuben.bautista@gmail.com</em></strong></a>. I am eager to contribute my expertise to new endeavors and collaborate with talented professionals like yourself.
                    </p>

                    <p className="expound">
                        Thank you for taking the time to read my bio. I look forward to the possibility of working together and achieving great things. Kudos!
                    </p>
                    
                </div> 
            </div> 
            
        </div>	
    );
};

export default AboutMe;