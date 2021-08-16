import React from "react";
//import logo from './logo.svg';
import './App.css';
//import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Hero from '././components/Hero';
import Navbar from '././components/Navbar';
import Footer from '././components/Footer';
//import Home from './pages/Home/Home';
import AboutMe from './components/About';
import Projects from './components/Projects';
import Contacts from './components/Contacts';
import Resume from './components/Resume';

function App() {
  return (
    <div className="App">
        <Navbar />
          <Hero/>

          <AboutMe/>
          <Projects/>
          <Contacts/>
          <Resume/>

        <Switch>
                     
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
