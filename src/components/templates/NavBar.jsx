import React, {useState} from 'react';
import '../assets/css/navbar.css';


const NavBar = (props) => {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);
    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
    
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        console.log("clicked")
        
    };

    return (
        <nav className='navbar navbar-expand-lg navbar-light' id='navigation-menu'>
            <a className="navbar-brand" href="#" id="logo">
                <img src={require("../assets/images/logo2.png")} alt="logo" />
                Joseph Bautista
                
            </a>

            <button className="navbar-toggler collapsed" id="navbar-button" type="button" data-toggle="collapse" data-target="#navbarNav" onClick={handleNavCollapse}>
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarNav">
                <div className="nav navbar-nav ms-auto">
                    <a className="nav-item nav-link" href="#home" onClick={handleClick}>Home</a>
                    <a className="nav-item nav-link" href="#skills" onClick={handleClick}>Skills</a>
                    <a className="nav-item nav-link" href="#projects" onClick={handleClick}>Projects</a>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;