import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Landing from './components/Landing';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';

function App() {
  return (
    <Router >
      <div className="App">
        <Landing />
        <Section1 />
        <Section2 />
        <Section3 />
        {/* <Route exact path='/' component={Landing} />
        <Route path='/section/1' component={Section1}/>
        <Route path='/section/2' component={Section1}/>
        <Route path='/section/3' component={Section1}/> */}
      </div>
    </Router>
  );
}

export default App;
