import React, {useEffect, useState} from 'react';
import {FaFacebookSquare as FBIcon,
        FaLinkedin as LinkedInIcon} from 'react-icons/fa';

import st from 'ryscott-st';

const Contact = function() {
  return (
    <div className='banner tall h'>
      <img src='/images/contact.jpeg' style={{bottom: 'unset'}}/>
      <div className='bannerContent h'>
        <div className='bannerBox v'>
          <div className='bannerBoxContent contact v c'>
            <h1>Contact Us</h1>
            <p>
              If you're looking for professional, reliable bookkeeping services, we're here to help! 
              Our expert team is ready to provide you with seamless financial solutions, ensuring your books are always accurate and up to date. 
              Reach out to us today, and let’s simplify your financial management so you can focus on growing your business. 
              <br/><br/>
              Contact us now for more information!
            </p>
            <h2>815.370.6532</h2>
            <br/>
            <div>
              <FBIcon size={36}/>
              <LinkedInIcon size={36}/>
            </div>
          </div>
        </div>
      </div>
    </div>   
  );
};

export default Contact;

