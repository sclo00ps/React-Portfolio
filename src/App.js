import React from "react";
//import logo from './logo.svg';
import './App.css';
//import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Hero from '././components/Hero';
import Navbar from '././components/Navbar';
import Footer from '././components/Footer';
import Home from './pagees/Home/Home';


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
       
       </Switch>
      <Footer />
    </div>
  );
}

export default App;
