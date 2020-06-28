import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import SideBar from './Components/Pages/Sidebar';
import AboutMe from './Components/Pages/AboutMe.js';
import Portfolio from './Components/Pages/Portfolio';
import Contact from './Components/Pages/Contact';

function App() {
  return (
    <BrowserRouter>
          <div className="App">
            <div className="row profile">
              <SideBar/>
              <div className="col-md-9 0ffset-s3">
              <Switch>
                <Route exact path="/" component={AboutMe}/>
                <Route exact path="/portfolio" component={Portfolio}/>
                <Route exact path="/contact" component={Contact}/>
                </Switch>
              </div>
            </div>
          </div>
      </BrowserRouter>
  );
}

export default App;
