import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from'./components/templates/NavBar';
import Body from './components/templates/Body';
import Footer from './components/templates/Footer';

const App = () => {

  return (
    <div id="container">
      <NavBar/>
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;
