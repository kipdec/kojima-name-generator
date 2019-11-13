import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Landing = () => {
    return(
        <div className='header'>
            <img url='./images/codec.jpg' />
            <h1>The Official Unofficial Kojima Name Generator</h1>
            <h3>Generate Your Kojima-Name Now!</h3>
            <Link className='startButton' to='/section/1'>Get Started</Link>
        </div>
)}

export default Landing;