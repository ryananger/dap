import React, {useEffect, useState} from 'react';

import st from 'ryscott-st';

const WhyChoose = function() {
  return (
    <div className='banner h'>
      <img src='images/bookkeeping1.jpeg'/>
      <div className='bannerContent h'>
        <div className='bannerSpacer'/>
        <div className='bannerBox v'>
          <div className='bannerBoxContent v c'>
            <h1>Why choose us?</h1>
            <p>
              Too often, business owners think of "bookkeeping" as a task they can perform and manage in short-term steps. 
     
              This approach generally results in incomplete financial statements, with missing financial information and miscategorized transactions. 
              <br/><br/>
              After years of seeing this happen in small businesses, I started remote bookkeeping services 
              to help owners ensure that their business is on a successful journey of growing in an ever-changing competitive market. 
            </p>
            <button>WORK WITH US</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;

