import React, {useEffect, useState} from 'react';

import st from 'ryscott-st';

const Nav = function() {
  return (
    <div className='nav h'>
      <h3><a href='/'>dap Bookkeeping and More</a></h3>
      <div className='h'>
        <a className='navButton' href='/'>HOME</a>
        <a className='navButton' href='/services'>SERVICES</a>
        <a className='navButton' href='/about'>ABOUT</a>
        <a className='navButton' href='/whoWeServe'>WHO WE SERVE</a>
        <a className='navButton' href='/locations'>LOCATIONS</a>
        <a className='navButton' href='/contact'>CONTACT US</a>
      </div>
    </div>
  );
};

export default Nav;

