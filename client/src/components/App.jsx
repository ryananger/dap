import React, {useEffect, useState} from 'react';

import '../styles/style.css';
import st from 'ryscott-st';
import {helpers} from 'util';

import Nav from './Nav.jsx';
import Home from './home/Home.jsx';
import Services from './services/Services.jsx';
import Locations from './Locations.jsx';
import About from './About.jsx';
import Contact from './Contact.jsx';

const route = window.location.pathname.slice(1);

const App = function() {
  const [view, setView] = st.newState('view', useState(!route ? 'home' : route));

  const views = {
    home: <Home/>,
    services: <Services/>,
    locations: <Locations/>,
    about: <About/>,
    contact: <Contact/>
  };

  return (
    <div id='app' className='app texture v'>
      <Nav/>
      {views[view]}
      <div className='foot'></div>
    </div>
  );
};

export default App;

