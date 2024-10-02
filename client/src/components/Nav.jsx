import React, {useEffect, useState} from 'react';

import st from 'ryscott-st';

const Nav = function() {
  const [drop, setDrop] = useState(false);

  return (
    <div className='nav h'>
      <a className='h c' href='/'><img src='images/dap_logo.svg' style={{height: '36px'}}/>&ensp;Bookkeeping and More</a>
      <div className='h'>
        <a className='navButton' href='/'>HOME</a>
        <div className='servicesNavButton v c' onClick={()=>{setDrop(!drop)}}>
          <div className='navButton'>SERVICES</div>

          {drop && 
          <div className='servicesDropdown v c'>
            <a className='navButton' href='/services'>BOOKKEEPING</a>
            <a className='navButton' href='/services#consulting'>CONSULTING</a>
            <a className='navButton' href='/services#payroll'>PAYROLL</a>
            <a className='navButton' href='/services#quickbooks'>QUICKBOOKS</a>
          </div>}
        </div>
        <a className='navButton' href='/about'>ABOUT</a>
        <a className='navButton' href='/locations'>LOCATIONS</a>
        <a className='navButton' href='/contact'>CONTACT US</a>
      </div>
    </div>
  );
};

export default Nav;

