import React, {useState} from 'react';
import '../assets/css/footer.css';

const Footer = () => {
    return (
        <footer className="footer" id="index-footer">
            <div className="col-12 first allrights" id="site">
                <span>Joseph Bautista		|  	 © 2018 - {new Date().getFullYear()}		|  	  All rights reserved </span>
                <p>
                    <a href="https://facebook.com/jayrbautista26" target="_blank"><i className="fab fa-facebook icon-soc"></i></a>

                    <a href="https://twitter.com/jayrbautista26" target="_blank"><i className="fab fa-twitter icon-soc"></i></a>

                    <a href="mailto:josephreuben.bautista@gmail.com" target="_blank"><i className="fas fa-envelope"></i></a>

                    <a href="https://www.instagram.com/jayrbautista26/" target="_blank"><i className="fab fa-instagram icon-soc"></i></a>

                    <a href="https://www.youtube.com/user/jayrbautista26" target="_blank"><i className="fab fa-youtube icon-soc"></i></a>

                    <a href="https://www.linkedin.com/in/joseph-reuben-bautista-a946a7123/" target="_blank"><i className="fab fa-linkedin icon-soc"></i></a>

                    <a href="https://github.com/joseph-bautista" target="_blank"><i className="fab fa-github icon-soc"></i></a>

                    {/* <a href="https://gitlab.com/josephreuben.bautista" target="_blank"><i className="fab fa-gitlab icon-soc"></i></a>  */}
                </p>
            </div>
        </footer>
    );
};

export default Footer;