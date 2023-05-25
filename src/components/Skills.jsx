import React, {useState} from 'react';
import './assets/css/skills.css';

const Skills = () => {
    return (
        <div id='skills'>
            <h2>Skills</h2>
            <div className="clear"></div>
            <div className="all_skills">
                <div className="skill">
                    <img src={require("./assets/images/skills/html.png")} alt="" />
                    <h4>HTML</h4>
                    {/* <p>5+ years experience</p> */}
                </div>
                <div className="skill">
                    <img src={require("./assets/images/skills/css.png")} alt="" />
                    <h4>CSS</h4>
                    {/* <p>5+ years experience</p> */}
                </div>
                <div className="skill">
                    <img src={require("./assets/images/skills/javascript.png")} alt="" />
                    <h4>Javascript</h4>
                    {/* <p>5+ years experience</p> */}
                </div>
                <div className="skill">
                    <img src={require("./assets/images/skills/jquery.png")} alt="" />
                    <h4>Jquery</h4>
                    {/* <p>5+ years experience</p> */}
                </div>
                <div className="skill">
                    <img src={require("./assets/images/skills/php.png")} alt="" />
                    <h4>PHP</h4>
                    {/* <p>5+ years experience</p> */}
                </div>
                <div className="skill">
                    <img src={require("./assets/images/skills/laravel.png")} alt="" />
                    <h4>Laravel</h4>
                    {/* <p>5+ years experience</p> */}
                </div>
                <div className="skill">
                    <img src={require("./assets/images/skills/bootstrap.png")} alt="" />
                    <h4>Bootstrap</h4>
                    {/* <p>5+ years experience</p> */}
                </div>
                <div className="skill">
                    <img src={require("./assets/images/skills/mysql.png")} alt="" />
                    <h4>MySQL</h4>
                    {/* <p>5+ years experience</p> */}
                </div>
                {/* <div className="skill">
                    <img src={require("./assets/images/skills/apache.png")} alt="" />
                    <h4>Apache</h4>
                    <p>5+ years experience</p>
                </div> */}
                <div className="skill">
                    <img src={require("./assets/images/skills/git.png")} alt="" />
                    <h4>Git</h4>
                    {/* <p>5+ years experience</p> */}
                </div>
                {/* <div className="skill">
                    <img src={require("./assets/images/skills/linux.png")} alt="" />
                    <h4>Linux</h4>
                    <p>4+ years experience</p>
                </div>
                <div className="skill">
                    <img src={require("./assets/images/skills/nginx.png")} alt="" />
                    <h4>Nginx</h4>
                    <p>3+ years experience</p>
                </div> */}
                <div className="skill">
                    <img src={require("./assets/images/skills/docker.png")} alt="" />
                    <h4>Docker</h4>
                    {/* <p>1+ years experience</p> */}
                </div>
                <div className="skill">
                    <img src={require("./assets/images/skills/postman.png")} alt="" />
                    <h4>Postman</h4>
                    {/* <p>1+ years experience</p> */}
                </div>
                <div className="skill">
                    <img src={require("./assets/images/skills/python.png")} alt="" />
                    <h4>Python</h4>
                    {/* <p>Less than a year of experience</p> */}
                </div>
                {/* <div className="skill">
                    <img src={require("./assets/images/skills/rails.png")} alt="" />
                    <h4>Rails</h4>
                    <p>Less than a year of experience</p>
                </div>
                <div className="skill">
                    <img src={require("./assets/images/skills/ruby.png")} alt="" />
                    <h4>Ruby</h4>
                    <p>Less than a year of experience</p>
                </div> */}
                <div className="skill">
                    <img src={require("./assets/images/skills/vue.png")} alt="" />
                    <h4>Vue</h4>
                    {/* <p>Less than a year of experience</p> */}
                </div>
                <div className="skill">
                    <img src={require("./assets/images/skills/react.png")} alt="" />
                    <h4>React</h4>
                    {/* <p>Newly acquired skill</p> */}
                </div>
                <div className="skill">
                    <img src={require("./assets/images/skills/node.png")} alt="" />
                    <h4>Node</h4>
                    {/* <p>Newly acquired skill</p> */}
                </div>
            </div>
        </div>
    );
};

export default Skills;