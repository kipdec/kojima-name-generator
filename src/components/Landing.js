import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Landing = () => {
    return(
        <div className='header'>
            <h1>The Official Unofficial Kojima Name Generator</h1>
            <h3>Generate Your Kojima-Name Now!</h3>
            <Link>Get Started</Link>
        </div>
)}

export default Landing;