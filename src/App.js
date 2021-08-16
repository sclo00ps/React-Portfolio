import React from "react";
//import logo from './logo.svg';
import './App.css';
//import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Hero from '././components/Hero';
import Navbar from '././components/Navbar';
import Footer from '././components/Footer';
import Home from '../pagees/Home/Home';


function App() {
  return (
    <div className="App">
        <Navbar />
          <Hero/>
          <Switch>
                     <Route exact path="/" component={Home} />
                     <Route exact path="/aboutMme" component={AboutMe} />
                     <Route exact path="/ projects" component={Projects} />
                     <Route exact path="/contacts" component={Contacts} />
                     <Route exact path="/resume" component={Resume} />
       {/*} <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
  */}
       </Switch>
      <Footer />
    </div>
  );
}

export default App;
