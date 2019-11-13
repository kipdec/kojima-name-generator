import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import codec from './images/codec.jpg'
import Landing from './components/Landing';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Section4 from './components/Section4';

function App() {
  return (
    <Router >
      <div className="App">
        <img src={codec} alt={'Metal Gear Solid Codec'} />
        {/* <Landing />
        <Section1 />
        <Section2 />
        <Section3 /> */}
        <Route exact path='/' component={Landing} />
        <Route path='/section/1' component={Section1}/>
        <Route path='/section/2' component={Section2}/>
        <Route path='/section/3' component={Section3}/>
        <Route path="/section/4" component={Section4} />
      </div>
    </Router>
  );
}

export default App;
