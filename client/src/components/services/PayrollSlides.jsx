import React, {useEffect, useState} from 'react';

import st from 'ryscott-st';

const ServicesSlides = function() {
  return (
    <>
    <div className='servicesSlide h'>
      <img className='servicesImage' src='images/payroll.png' style={{marginRight: '1vh'}}/>
      <div className='servicesContent v'>
        <h2>Payroll Processing</h2><br/>
        We will manage your employee paychecks, including employee benefits, garnishments, vacation, sick time and job costing. 
        If you have employees in multiple states - no problem. 
        We have the capacity to process multi-state payrolls, including payroll report filing in all states where we process payroll.
      </div>
    </div>
    <div className='servicesSlide h'>
      <div className='servicesContent v'>
        <h2>Monthly and Quarterly Reporting</h2><br/>
        We will prepare and file monthly and quarterly reports for various benefits and tax purposes. 
        We pledge error-free calculations and timely payments.
        We'll even handle your federal and state payroll reporting requirements, including 941, 940, state withholding, and state unemployment.
      </div>
      <img className='servicesImage' src='images/quarterly.jpg' style={{marginLeft: '1vh'}}/>
    </div>
    <div className='servicesSlide h'>
      <img className='servicesImage' src='images/1099.png' style={{marginRight: '1vh'}}/>
      <div className='servicesContent v'>
        <h2>W2 & 1099 Preparation</h2><br/>
        We will handle yearly processing and reporting so you don't have to. 
        We'll make sure to provide each employee, contractor or vendor with the proper yearly form. 
      </div>
    </div>
    <div className='servicesSlide h'>
      <div className='servicesContent v'>
        <h2>Direct Deposit</h2><br/>
        With direct deposit, payroll gets even easier. No more signing and distributing checks. 
        Your employees will appreciate not having to go to the bank anymore. The money is deposited directly to their accounts on payday.
      </div>
      <img className='servicesImage' src='images/money.jpeg' style={{marginLeft: '1vh'}}/>
    </div>
    </>
  );
};

export default ServicesSlides;

