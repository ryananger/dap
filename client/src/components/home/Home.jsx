import React, {useEffect, useState} from 'react';

import st from 'ryscott-st';

import PeaceOfMind from './PeaceOfMind.jsx';
import Info from './Info.jsx';
import WhyChoose from './WhyChoose.jsx';

const Home = function() {
  return (
    <>
    <PeaceOfMind/>
    <Info/>
    <WhyChoose/>
    </>
  );
};

export default Home;

