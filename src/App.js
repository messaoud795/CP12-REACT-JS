import React from 'react';
import './App.css';
import {Form, Button,Col, Row, Container} from 'react-bootstrap';
import Navigation from './Navigation';
import FormExample from './Signup';

function App() {
  return (
    <div className="App">
    <Navigation/>
    <div className="info">
  <FormExample/>
    </div>
  <fouter>
  <div class="countries">
    <p>We are leaders in 10 countries: &nbsp;</p>
    <a href=""> Poland,</a> <a href=""> Spain,</a> <a href=""> Sweden,</a>
    <a href=""> Chili,</a> <a href=""> Germany,</a> <a href=""> USA,</a>
    <a href=""> ;England </a>
    <p>&nbsp; and &nbsp;</p>
    <a href=""> Argentina</a>
  </div>
  <p>
    This site uses cookies to deliver services in accordance with this
    Privacy Policy. You can specify the conditions for storing or accessing
    cookies on your browser.
  </p>
  <p>www.docplanner.com © 2020</p>     </fouter>


    </div>
  );
}

export default App;
