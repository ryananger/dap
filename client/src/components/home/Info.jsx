import React, {useEffect, useState} from 'react';

import st from 'ryscott-st';

const Info = function() {
  return (
    <div className='info h'>
      <div className='infoBox v'>
        <h2>Small Business Bookkeeping</h2>
        <p>Managing your daily, monthly, and yearly bookkeeping needs.</p>
        <button><a href='/services'>LEARN MORE</a></button>
      </div>
      <div className='infoBox v'>
        <h2>Payroll Services</h2>
        <p>We work with cloud-based payroll platforms.</p>
        <button><a href='/services#payroll'>LEARN MORE</a></button>
      </div>
      <div className='infoBox v'>
        <h2>QuickBooks Services</h2>
        <p>We are a team of Advanced Certified QBO Pro Advisors.</p>
        <button><a href='/services#quickbooks'>LEARN MORE</a></button>
      </div>
    </div>
  );
};

export default Info;

