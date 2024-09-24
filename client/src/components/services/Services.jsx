import React, {useEffect, useState} from 'react';

import st from 'ryscott-st';

import ServicesSlides from './ServicesSlides.jsx';

const Services = function() {
  return (
    <>
    <div className='banner h'>
      <img src='images/bookkeeping0.png'/>
      <div className='bannerContent h'>
        <div className='bannerBox v'>
          <div className='bannerBoxContent v c'>
            <h2>Small Business Bookkeeping</h2>
            <p>
              Keeping track of financial transactions takes a fair amount of time, energy, and patience, and as a business owner, you have more important things to do. 
              Our bookkeeping services are designed to make your life easier, so you can get back to the job of running your business and generating profits. 
              <br/><br/>
              At dap Bookkeeping and More, we are prepared to go the extra mile to earn your business trust. 
              We pride ourselves on accuracy, and attention to detail in all that we do. We are ready to put our knowledge and skills to work for you. 
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className='services v'>
      <ServicesSlides/>
    </div>
    <div className='banner h'>
      <img src='images/bookkeeping0.png'/>
      <div className='bannerContent h'>
        <div className='bannerBox wide v'>
          <div className='bannerBoxContent v c'>
            <h2>Consulting Services</h2>
            <p>
            We are dedicated to quality and client satisfaction. 
            At Innovative Bookkeeping Solutions, we help businesses grow by creating favorable conditions for success. 
            Whether you're starting a new business or expanding an existing one, our team of experienced professionals is here to offer expert advice. 
            We work with businesses of all sizes, from startups to established companies, to develop personalized strategies.
            <br/><br/>
            Our focus is on understanding your business, analyzing your financial performance, and creating a plan for the future. 
            We'll help set short-term and long-term goals and provide the tools needed to achieve them. 
            Using financial software like QuickBooks, we help optimize operations and improve profitability.
            </p>
            <button>GET A FREE CONSULTATION</button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Services;

