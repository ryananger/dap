import React, {useEffect, useState} from 'react';

import st from 'ryscott-st';

const About = function() {
  return (
    <div className='banner tall h'>
      <img src='/images/bookkeeping11.jpg' style={{bottom: 'unset'}}/>
      <div className='bannerContent h'>
        <div className='bannerBox wide v'>
          <div className='bannerBoxContent about h c'>
            <div className='v c'>
              <h1>About</h1>
              <p>
                Through my years of experience as an accountant providing bookkeeping services to small businesses, combined with the rise of cloud-based financial software, 
                I realized how much small business owners could benefit from a remote bookkeeping service. 
                This insight inspired me to launch a service that would allow me to assist multiple businesses, helping them achieve their financial goals and grow with the confidence that their books are always in order and up to date.
                <br/><br/>
                At dap Bookkeeping & More, we specialize in transforming disorganized financial records into accurate, actionable financial statements. 
                Our professionalism ensures that your books are prepared for smooth coordination with your CPA during tax season.
              </p>
            </div>
            <div style={{width: '280px', margin: '12px'}}>              
              <img src='/images/debbie.jpg'/>
            </div>
          </div>
        </div>
      </div>
    </div>   
  );
};

export default About;

