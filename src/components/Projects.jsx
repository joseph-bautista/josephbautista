import React, {useContext, useState} from 'react';
import './assets/css/projects.css';
import SoolyImg from './assets/images/projects/sooly.svg';
import { AppContext } from '../context/AppContext';

const Projects = () => {
    const {projects, dispatch} = useContext(AppContext);
    return (
        <div id='projects'>
            <h1>Projects</h1>
            <hr/>
            <h4 className="site-title">ClickEat Cafe</h4>
            <div className="row">
                <div className="col-lg-4">
                    <img src={require("./assets/images/projects/clickeat.jpg")} className="img-fluid"/>
                </div>
                <div className="col-lg-8">
                    <p>
                        ClickEat Cafe is a coffee shop established and opened their first branch on January of 2017 at Bugallon, Pangasinan. As of this day they have 3 branches. ClickEat Cafe Mangatarem and ClickEat Cafe Sual. They are also affiliated with Cafe Ben and Kape Crucero. Cafe Ben is located in Urbiztondo, Pangasinan and the two branches of Kape Crucero is located in Malolos, Bulacan.
                    </p>
                    <p>
                        This project used HTML, CSS and Bootstrap for Front-end. I worked on this last 2018.
                    </p>
                    <a href="https://joseph-bautista.github.io/clickeatcafe" target="_blank" className="btn btn-success col-lg-3 offset-lg-8 button">Go to this site</a>
                </div>
            </div>

            <hr/>
            <h4 className="site-title">Sooly - Besoin pour la famille App</h4>
            <div className="row">
                <div className="col-lg-4">
                    <img src={SoolyImg} className="img-fluid"/>
                </div>
                <div className="col-lg-8">
                        <p>Sooly is the app for seekers in the areas of nursery, Nanny, babysitter, retirement home.</p>
                        <p>Service providers nursery, Nanny, babysitter, retirement home, can register, and after the contract has been concluded, they will receive a login to enter their data (photos, description and contact details).</p>
                        <p>You will find all useful information and contact details. On a map you can see the service providers in your area geolocated and the free places of the current month.</p>
                        <p>Furthermore, the free places are entered per month. This enables the service provider to communicate their freee places more easily and seekers can then reach their destination more quickly.</p>
                    <p>
                        The primary task here is to create an admin side of the project that would add, edit and delete of the available creche. This project used HTML, CSS and Bootstrap for Front-end and PHP, MySQL and JavaScript/JQuery for the Back-end. This project also used MVC Laravel 7 version framework. I worked on this project last October 2020.
                    </p>
                    <a href="https://sooly.lu/" target="_blank" className="btn btn-success col-lg-3 offset-lg-8 button">Go to this site</a>
                </div>
            </div>

            <hr/>
            <h4 className="site-title">Boox Accounting app</h4>
            <div className="row">
                <div className="col-lg-4">
                    <img src={require("./assets/images/projects/boox.png")} className="img-fluid"/>
                </div>
                <div className="col-lg-8">
                    <p>
                        Boox is an online accounting service, combining an innovative app with expert advice from a dedicated accountant for UK based cotractors, freelancers and small businesses.
                    </p>
                    <p>
                        This project used HTML, CSS and Bootstrap for Front-end and PHP, MySQL and JavaScript/JQuery for the Back-end. This project also used Codeigniter. My main task here is to maintain and develop new features of the application. I worked on this project from October 2018 to June 2019.
                    </p>
                    <a href="https://www.boox.co.uk/" target="_blank" className="btn btn-success col-lg-3 offset-lg-8 button">Go to this site</a>
                </div>
            </div>

            <hr/>
            <h4 className="site-title">Online Procurement Services</h4>
            <div className="row">
                <div className="col-lg-4">
                    <img src={require("./assets/images/projects/ops.jpeg")} className="img-fluid"/>
                </div>
                <div className="col-lg-8">
                    <p>
                        The Online Procurement System (OPS) is a complete e-procurement sourcing platform, designed to deliver an easy-to-use system that provides cost effective methods to help identify and engage with capable suppliers.
                    </p>
                    <p>
                        The system has full supplier on-boarding, pre-qualification functionality, sourcing management modules and powerful tools to manage the full procurement process.
                    </p>
                    <p>
                        This project used HTML, CSS and Bootstrap for Front-end and PHP, MySQL and JavaScript/JQuery for the Back-end. This project also used Laravel as framework. My primary task in this project is to maintain and develop new features depending on the client needs. I worked on this project from July 2019 to January 2021. 
                    </p>
                    <a href="http://www.onlineprocurement.com.au/" target="_blank" className="btn btn-success col-lg-3 offset-lg-8 button">Go to this site</a>
                </div>
            </div>

            <hr/>
            <h4 className="site-title">Equify</h4>
            <div className="row">
                <div className="col-lg-4">
                    <img src={require("./assets/images/projects/equify.png")} className="img-fluid"/>
                </div>
                <div className="col-lg-8">
                    <p>
                        Equify is a digital business lender dedicated to providing UK SMEs with flexible finance done properly. They support businesses with their growth plans across a variety of sectors from professional services to hospitality.
                    </p>
                    <p>
                        This project used HTML, CSS and Bootstrap for Front-end and PHP, MySQL and JavaScript/JQuery for the Back-end. This project also used Laravel 8 as framework. My primary task in this project is to maintain and develop new features. I am working on this project since January 2021 to February 2022. 
                    </p>
                    <a href="https://admin.equify.co.uk/" target="_blank" className="btn btn-success col-lg-3 offset-lg-8 button">Go to this site</a>
                </div>
            </div>

            <hr/>
            <h4 className="site-title">Digital Travel Fair Malaysia</h4>
            <div className="row">
                <div className="col-lg-4">
                    <img src={require("./assets/images/projects/travel_malaysia.jpg")} className="img-fluid"/>
                </div>
                <div className="col-lg-8">
                    <p>
                        This project is a B2B solution project for Malaysian Tourism where exhibitors showcases their products to the public.
                    </p>
                    <p>
                        I worked on some parts of the back end of the project, mainly on the admin CMS part. I developed the restful APIs to communicate in the frontend using Laravel, MySQL for the database and somewhat worked on some frontend using Vue.js. In this project we did it in a monolith web application. 
                    </p>
                    <a href="https://www.malaysiadigitaltravelfair.com/" target="_blank" className="btn btn-success col-lg-3 offset-lg-8 button">Go to this site</a>
                </div>
            </div>


            <hr/>
            <h4 className="site-title">ADEX</h4>
            <div className="row">
                <div className="col-lg-4">
                    <img src={require("./assets/images/projects/adex.png")} className="img-fluid"/>
                </div>
                <div className="col-lg-8">
                    <p>
                        ADEX is a diving expo in asia. This project is also a B2B solutions where my team develop a 360 images and interact with the exhibitors.
                    </p>
                    <p>
                        With this project, again, I am assigned to create restful API's endpoints for our three.js developer to communicate to the database and also for the admin CMS. I used the Laravel framework and MySQL for the database. In this project also we used microservice architecture where the API server is different from the front end server and from the 360 web application.
                    </p>
                    <a href="https://web.xctuality.com/adex-360/22/index.htm" target="_blank" className="btn btn-success col-lg-3 offset-lg-8 button">Go to this site</a>
                </div>
            </div>

            <hr/>
            <h4 className="site-title">Xctuality Interactive Mobile Application</h4>
            <div className="row">
                <div className="col-lg-4">
                    <img src={require("./assets/images/projects/xctuality_interactive.png")} className="img-fluid"/>
                </div>
                <div className="col-lg-8">
                    <p>
                        This project is a social media application where the user can upload 360 images and experience images. It is a comprehensive web-based virtual tour and panorama software as a service.
                    </p>
                    <p>
                        This project is originally made in the web. But I was tasked to create API endpoints for the mobile application. I used Laravel and MySQL to create APIs which my counter part, mobile app developer used.
                    </p>
                    <a href="https://interactive.xctuality.com/" target="_blank" className="btn btn-success col-lg-3 offset-lg-8 button">Go to this site</a>
                </div>
            </div>

            <hr/>
            <h4 className="site-title">Paradise Metaworld</h4>
            <div className="row">
                <div className="col-lg-4">
                    <img src={require("./assets/images/projects/paradise_metaworld.png")} className="img-fluid"/>
                </div>
                <div className="col-lg-8">
                    <p>
                        In Partnership with Xctualyfe to create a Metaverse to bridge web2.0 Entertainment to web3.0 Entertainment.
                    </p>
                    <p>
                        In this project I was involved in creating restful API for the CMS and registration page. I used Laravel and MySQL to create the API endpoints. 
                    </p>
                    <a href="https://admin-paradise-metaworld.xctuality.com/join" target="_blank" className="btn btn-success col-lg-3 offset-lg-8 button">Go to this site</a>
                </div>
            </div>

            <hr/>
            <h4 className="site-title">Dingdong Mobile Application and CMS</h4>
            <div className="row">
                <div className="col-lg-4">
                    <img src={require("./assets/images/projects/dingdong.png")} className="img-fluid"/>
                </div>
                <div className="col-lg-8">
                    <p>
                        An app for Wonder Paradise. A platform for brands to connect with the longtails, a place where you can dream to influence.
                    </p>
                    <p>
                        I am involved in this project to create restful API for the admin CMS and the endpoints needed by the app. I used Laravel and MySQL to develop the endpoints. In this project, I am in collaboration with a frontend web app developer and a mobile app developer. For the CMS part we used micro service architecture.
                    </p>
                    <a href="https://wonderparadise.com/" target="_blank" className="btn btn-success col-lg-3 offset-lg-8 button">Go to this site</a>
                </div>
            </div>
        </div>
    );
};

export default Projects;