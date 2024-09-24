import React, {useEffect, useState} from 'react';

import st from 'ryscott-st';

const PeaceOfMind = function() {
  return (
    <div className='banner h'>
      <img src='images/bookkeeping0.png'/>
      <div className='bannerContent h'>
        <div className='bannerBox v'>
          <div className='bannerBoxContent v c'>
            <h2>Are you ready to finally feel</h2>
            <h1>Peace of Mind?</h1>
            <p>
              Our professional services are designed to provide you with reliable cost-effective solutions to your business's bookkeeping challenges.
              We are very dedicated to our client's satisfaction, and we pride ourselves on being approachable and easy to work with. 
              Whether you have ongoing or occasional needs, at dap Bookkeeping & More Services we are interested in developing a relationship that works for you.
            </p>
            <button>WORK WITH US</button>
          </div>
        </div>
        <div className='bannerSpacer'/>
      </div>
    </div>
  );
};

export default PeaceOfMind;

