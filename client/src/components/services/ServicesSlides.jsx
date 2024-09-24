import React, {useEffect, useState} from 'react';

import st from 'ryscott-st';

const ServicesSlides = function() {
  return (
    <>
    <div className='servicesSlide h'>
      <img className='servicesImage' src='images/bookkeeping0.png' style={{marginRight: '1vh'}}/>
      <div className='servicesContent v'>
        <h2>Accounts Payable</h2><br/>
        At dap Bookkeeping and More, we process vendor bills, manage vendor balances and review monthly statements. 
        We'll also handle paying the bills and setup vendor accounts. 
      </div>
    </div>
    <div className='servicesSlide h'>
      <div className='servicesContent v'>
        <h2>Accounts Receivable</h2><br/>
        At dap Bookkeeping and More, we can manage your customers.
        Our services range from setup of new customers, to invoicing, monthly statements and collection of accounts. 
      </div>
      <img className='servicesImage' src='images/bookkeeping0.png' style={{marginLeft: '1vh'}}/>
    </div>
    <div className='servicesSlide h'>
      <img className='servicesImage' src='images/bookkeeping0.png' style={{marginRight: '1vh'}}/>
      <div className='servicesContent v'>
        <h2>Account Reconciliation</h2><br/>
        Feel confident of your financial records by having our experts reconcile for you. 
        We'll handle the reconciliation of bank accounts, credit card accounts, loans, etc. 
        We handle the most important task related to accounting. 
        This process will help eliminate errors and ensure accuracy.
      </div>
    </div>
    <div className='servicesSlide h'>
      <div className='servicesContent v'>
        <h2>Financial Monitoring</h2><br/>
        We will review your transactions and confirm your financial statements are as they should be. 
        We identify errors and bring them to your attention. 
        dap Bookkeeping and More, wants you to feel confident your financials are current and accurate.
      </div>
      <img className='servicesImage' src='images/bookkeeping0.png' style={{marginLeft: '1vh'}}/>
    </div>
    </>
  );
};

export default ServicesSlides;

