import React, {useEffect, useState} from 'react';

import st from 'ryscott-st';

const Info = function() {
  return (
    <div className='info h'>
      <div className='infoBox v'>
        <h2>Small Business Bookkeeping</h2>
        <p>Managing your daily, monthly, and yearly bookkeeping needs.</p>
        <button onClick={()=>{window.location.href = '/services'}}>LEARN MORE</button>
      </div>
      <div className='infoBox v'>
        <h2>Quickbooks Services</h2>
        <p>We are a team of Advanced Certified QBO Pro Advisors.</p>
        <button>LEARN MORE</button>
      </div>
      <div className='infoBox v'>
        <h2>Payroll Services</h2>
        <p>We work with cloud-based payroll platforms.</p>
        <button>LEARN MORE</button>
      </div>
    </div>
  );
};

export default Info;

