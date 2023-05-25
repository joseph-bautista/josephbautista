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
                        ClickEat Cafe is a renowned coffee shop that initially launched its flagship branch in Bugallon, Pangasinan in January 2017. Since then, they have expanded their presence and currently operate three branches. In addition to their local establishments, ClickEat Cafe is affiliated with two other popular cafes: Cafe Ben in Urbiztondo, Pangasinan and Kape Crucero with two branches in Malolos, Bulacan.
                    </p>
                    <p>
                        During the development of this project in 2018, I utilized HTML, CSS, and Bootstrap to create an impressive front-end for ClickEat Cafe's website. By incorporating these technologies, I enhanced the user experience and ensured a visually appealing and responsive design for the website.
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
                    <p>
                        Sooly is a comprehensive app designed for seekers in need of nursery, nanny, babysitter, and retirement home services. It offers a user-friendly platform where service providers in these areas can register and showcase their offerings. Once a contract is established, service providers gain access to a personalized login to manage their data, including photos, descriptions, and contact details.
                    </p>
                    <p>
                        With Sooly, users can easily access all relevant information and contact details of service providers. The app features a convenient map view that displays geolocated service providers in the user's area, along with available vacancies for the current month.
                    </p>
                    <p>
                        One notable feature of Sooly is its ability to track and display the availability of free spots per month. This functionality enables service providers to efficiently communicate their vacant spots, allowing seekers to find suitable services more quickly and effectively.
                    </p>
                    <p>
                        During the development of this project in October 2020, I focused on creating the admin side of the app. The admin panel enables authorized personnel to add, edit, and delete available nursery spots. The project was built using HTML, CSS, and Bootstrap for the front-end, and PHP, MySQL, and JavaScript/jQuery for the back-end. To ensure efficient development, the project utilized the MVC Laravel 7 version framework.
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
                        Boox is a cutting-edge online accounting service designed specifically for contractors, freelancers, and small businesses in the UK. By seamlessly integrating an innovative mobile app with personalized guidance from experienced accountants, Boox offers a comprehensive solution for managing financial matters.
                    </p>
                    <p>
                        In this project, I played a crucial role in the development and maintenance of Boox. Employing a combination of HTML, CSS, and Bootstrap, I focused on creating an intuitive and visually appealing front-end interface. On the back-end, I leveraged my skills in PHP, MySQL, JavaScript, and jQuery to build robust functionalities and ensure seamless data management. Additionally, CodeIgniter framework was utilized to streamline the development process and enhance project efficiency.
                    </p>
                    <p>
                        Throughout my involvement in the project, spanning from October 2018 to June 2019, I diligently worked on maintaining the existing application while also spearheading the development of new features. By collaborating with the team, I contributed to the ongoing improvement and evolution of Boox, helping to shape it into a reliable and user-friendly accounting solution.
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
                        The Online Procurement System (OPS) is an advanced e-procurement sourcing platform designed to provide a user-friendly and cost-effective solution for identifying and engaging with capable suppliers.
                    </p>
                    <p>
                        With its comprehensive features, OPS offers a complete supplier onboarding process, including pre-qualification functionality, sourcing management modules, and powerful tools to streamline the entire procurement process.
                    </p>
                    <p>
                        The project utilized a range of technologies to create a robust system. The front-end development involved HTML, CSS, and Bootstrap, ensuring a visually appealing and responsive user interface. The back-end was built using PHP, MySQL, and JavaScript/JQuery, enabling seamless data management and dynamic functionality. Additionally, the project employed Laravel as the framework, leveraging its extensive capabilities for efficient development and maintenance.
                    </p>
                    <p>
                        Throughout my involvement in this project from July 2019 to January 2021, my primary responsibility was to ensure the system's smooth operation and enhance it with new features based on the specific requirements of our clients.
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
                        Equify is a leading digital business lender committed to offering UK SMEs a seamless and tailored financial solution. With a strong focus on supporting businesses in diverse sectors, ranging
                    </p>
                    <p>
                        For the implementation of this project, a comprehensive tech stack was employed. The front-end development leveraged HTML, CSS, and Bootstrap to ensure an intuitive and visually appealing user interface. On the back-end, the project utilized PHP, MySQL, and JavaScript/JQuery to handle dynamic data processing and enhance functionality. Additionally, the project employed Laravel 8, a robust framework, to streamline development and optimize performance.
                    </p>
                    <p>
                        As a dedicated member of the development team, my involvement in this project spanned from January 2021 to February 2022. During this period, my primary responsibilities revolved around maintaining the system's stability and implementing new features to meet evolving business requirements.
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
                        This project is an innovative B2B solution aimed at boosting Malaysian tourism. It serves as a platform for exhibitors to showcase their products and services directly to the public.
                    </p>
                    <p>
                        My role in this project primarily focused on the back end development, specifically the administrative content management system (CMS). I leveraged Laravel to create robust and efficient RESTful APIs that facilitated seamless communication between the front end and back end. For data storage, I utilized MySQL as the reliable and scalable database solution. Additionally, I also contributed to the front end development using Vue.js, ensuring a smooth and engaging user experience.
                    </p>
                    <p>
                        To optimize the project's structure and maintain a cohesive approach, we implemented a monolithic web application architecture. This decision allowed for efficient development and deployment of the various components within the project.
                    </p>
                    <p>
                        Overall, my involvement in this project encompassed implementing key features within the admin CMS, designing and implementing RESTful APIs, integrating the front end with Vue.js, and contributing to the monolithic web application structure.
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
                        ADEX is an esteemed diving expo in Asia that serves as a platform for diving enthusiasts, industry professionals, and exhibitors. As part of this project, our team has developed an innovative B2B solution that revolves around immersive 360-degree images and interactive features for exhibitors.
                    </p>
                    <p>
                        My primary responsibility in this project is to create robust RESTful API endpoints using the Laravel framework, facilitating seamless communication between our three.js developers and the database. These APIs not only serve as a bridge for the frontend server but also cater to the needs of the admin CMS (Content Management System). We have opted for a microservice architecture, wherein the API server operates independently from both the frontend server and the 360-degree web application.
                    </p>
                    <p>
                        By leveraging the power of Laravel and MySQL, we have built a reliable foundation that enables smooth data management and retrieval. This ensures efficient collaboration between our team and the developers, enhancing the overall performance and user experience of the ADEX diving expo platform.
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
                        This project is a revolutionary social media application that empowers users to upload and engage with captivating 360-degree images. It offers a cutting-edge web-based virtual tour and panorama software as a service, delivering an immersive visual experience like never before.
                    </p>
                    <p>
                        As part of my role in this project, I was assigned the task of developing API endpoints specifically for the mobile application. Leveraging the power and flexibility of Laravel and MySQL, I meticulously crafted a robust and secure API infrastructure. These APIs seamlessly integrate with the mobile app, allowing users to access and interact with the platform's rich features and functionalities.
                    </p>
                    <p>
                        By collaborating closely with the mobile app developer, we ensured a smooth and cohesive user experience across both web and mobile platforms. The end result is a cohesive and versatile social media application that allows users to effortlessly navigate and share breathtaking 360-degree images, creating unforgettable virtual experiences for all.
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
                        In collaboration with Xctualyfe, I contributed to the development of a groundbreaking project aimed at bridging the gap between web2.0 and web3.0 Entertainment, by creating a Metaverse.
                    </p>
                    <p>
                        My primary responsibilities in this project included the creation of a robust and efficient RESTful API for the Content Management System (CMS) and registration page. To accomplish this, I utilized Laravel, a powerful PHP framework, along with MySQL, a reliable database management system, to design and implement the necessary API endpoints.
                    </p>
                    <p>
                        By leveraging my expertise in web development and utilizing cutting-edge technologies, I played a crucial role in enabling seamless communication and data exchange between the CMS and other components of the Metaverse. The RESTful API I created facilitated efficient content management and streamlined user registration processes, contributing to the overall success and functionality of the project.
                    </p>
                    <p>
                        Through this collaborative effort with Xctualyfe, we aimed to revolutionize the entertainment industry by merging the best elements of web2.0 and web3.0, creating an immersive and interactive Metaverse that would captivate users and redefine the boundaries of online entertainment.
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
                        Introducing Wonder Paradise, an extraordinary app that serves as a captivating platform where brands and longtails effortlessly connect, allowing you to embark on an influential journey beyond your wildest dreams.
                    </p>
                    <p>
                        As a key contributor to this remarkable project, my role revolves around crafting a robust and efficient RESTful API for the admin CMS, as well as developing the essential endpoints required by the app. Leveraging the power of Laravel and MySQL, I have meticulously constructed the endpoints, ensuring seamless communication between the various components. 
                    </p>
                    <p>
                        Working in close collaboration with a skilled frontend web app developer and a proficient mobile app developer, our unified efforts bring this vision to life. To optimize the CMS functionality, we have adopted a microservice architecture, empowering Wonder Paradise with a scalable and modular framework.
                    </p>
                    <p>
                        By combining the artistry of design, the precision of backend development, and the synergy of a cohesive team, we are set to revolutionize the way brands and longtails connect, paving the way for a world where dreams have the power to influence.
                    </p>
                    <a href="https://wonderparadise.com/" target="_blank" className="btn btn-success col-lg-3 offset-lg-8 button">Go to this site</a>
                </div>
            </div>
        </div>
    );
};

export default Projects;