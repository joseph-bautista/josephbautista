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
                    <h6>HTML</h6>
                    <p>5+ years experience</p>
                </div>
                <div className="skill">
                    <img src={require("./assets/images/skills/css.png")} alt="" />
                    <h6>CSS</h6>
                    <p>5+ years experience</p>
                </div>
                <div className="skill">
                    <img src={require("./assets/images/skills/javascript.png")} alt="" />
                    <h6>Javascript</h6>
                    <p>5+ years experience</p>
                </div>
                <div className="skill">
                    <img src={require("./assets/images/skills/jquery.png")} alt="" />
                    <h6>Jquery</h6>
                    <p>5+ years experience</p>
                </div>
                <div className="skill">
                    <img src={require("./assets/images/skills/php.png")} alt="" />
                    <h6>PHP</h6>
                    <p>5+ years experience</p>
                </div>
                <div className="skill">
                    <img src={require("./assets/images/skills/laravel.png")} alt="" />
                    <h6>Laravel</h6>
                    <p>5+ years experience</p>
                </div>
                <div className="skill">
                    <img src={require("./assets/images/skills/bootstrap.png")} alt="" />
                    <h6>Bootstrap</h6>
                    <p>5+ years experience</p>
                </div>
                <div className="skill">
                    <img src={require("./assets/images/skills/mysql.png")} alt="" />
                    <h6>MySQL</h6>
                    <p>5+ years experience</p>
                </div>
                <div className="skill">
                    <img src={require("./assets/images/skills/apache.png")} alt="" />
                    <h6>Apache</h6>
                    <p>5+ years experience</p>
                </div>
                <div className="skill">
                    <img src={require("./assets/images/skills/git.png")} alt="" />
                    <h6>Git</h6>
                    <p>5+ years experience</p>
                </div>
                <div className="skill">
                    <img src={require("./assets/images/skills/linux.png")} alt="" />
                    <h6>Linux</h6>
                    <p>4+ years experience</p>
                </div>
                <div className="skill">
                    <img src={require("./assets/images/skills/nginx.png")} alt="" />
                    <h6>Nginx</h6>
                    <p>3+ years experience</p>
                </div>
                <div className="skill">
                    <img src={require("./assets/images/skills/docker.png")} alt="" />
                    <h6>Docker</h6>
                    <p>1+ years experience</p>
                </div>
                <div className="skill">
                    <img src={require("./assets/images/skills/postman.png")} alt="" />
                    <h6>Postman</h6>
                    <p>1+ years experience</p>
                </div>
                <div className="skill">
                    <img src={require("./assets/images/skills/python.png")} alt="" />
                    <h6>Python</h6>
                    <p>Less than a year of experience</p>
                </div>
                <div className="skill">
                    <img src={require("./assets/images/skills/rails.png")} alt="" />
                    <h6>Rails</h6>
                    <p>Less than a year of experience</p>
                </div>
                <div className="skill">
                    <img src={require("./assets/images/skills/ruby.png")} alt="" />
                    <h6>Ruby</h6>
                    <p>Less than a year of experience</p>
                </div>
                <div className="skill">
                    <img src={require("./assets/images/skills/vue.png")} alt="" />
                    <h6>Vue</h6>
                    <p>Less than a year of experience</p>
                </div>
                <div className="skill">
                    <img src={require("./assets/images/skills/react.png")} alt="" />
                    <h6>React</h6>
                    <p>Newly acquired skill</p>
                </div>
                <div className="skill">
                    <img src={require("./assets/images/skills/node.png")} alt="" />
                    <h6>Node</h6>
                    <p>Newly acquired skill</p>
                </div>
            </div>
        </div>
    );
};

export default Skills;