import React, {useEffect, useState} from 'react';

import st from 'ryscott-st';

const Locations = function() {
  return (
    <>
    <div className='banner tall h'>
      <img src='/images/plainfield0.jpg' style={{bottom: 'unset'}}/>
      <div className='bannerContent h'>
        <div className='bannerBox wide v'>
          <div className='bannerBoxContent v c' style={{justifyContent: 'space-between'}}>
            <h1>Who Do We Serve?</h1>
            <div className='h'>
              <div className='locationsBox v'>
                <h3>Will County</h3><br/>
                Plainfield<br/>
                Joliet<br/>
                Crest Hill<br/>
                Lockport<br/>
                Wilmington<br/>
                Braidwood<br/>
                Channahon<br/>
                Shorewood<br/>
                New Lenox<br/>
                Mokena
              </div>
              <div className='locationsBox v'>
                <h3>Grundy County</h3><br/>
                Morris<br/>
                Minooka<br/>
                Coal City<br/>
                Braceville<br/>
                Diamond<br/>
                Gardner<br/>
                Carbon Hill
              </div>
              <div className='locationsBox v'>
                <h3>Kendall County</h3><br/>
                Platville<br/>
                Oswego<br/>
                Newark<br/>
                Yorkville<br/>
                Plano
              </div>
              <div className='locationsBox v'>
                <h3>Dupage County</h3><br/>
                Naperville<br/>
                Aurora<br/>
                Wheaton<br/>
                Warrenville<br/>
                Burr Ridge<br/>
                Hinsdale<br/>
                Downers Grove<br/>
                Oak Brook<br/>
                Elk Grove Village
              </div>
              <div className='locationsBox v'>
                <h3>Cook County</h3><br/>
                South Chicago<br/>
                Southwest Chicago<br/>
                South Holland<br/>
                Bridgeview<br/>
                Palos<br/>
                Broadview<br/>
                Lemont<br/>
                Lyons<br/>
                Tinley Park<br/>
                Orland
              </div>
            </div>            
            <div className='businessTypes h'>
              <div className='businessType'>Construction</div>
              <div className='businessType'>Manufacturing</div>
              <div className='businessType'>Agricultural</div>
              <div className='businessType'>Retail</div>
              <div className='businessType'>Wholesale</div>
              <div className='businessType'>Lawn Care</div>
              <div className='businessType'>Trucking</div>
              <div className='businessType'>Landscaping</div>
              <div className='businessType'>Medical</div>
              <div className='businessType'>Automotive Sales and Repair</div>
              <div className='businessType'>Restaurant</div>
              <div className='businessType'>Real Estate</div>
              <div className='businessType'>Salon/Beauty</div>
              <div className='businessType'>Plumbing</div>
              <div className='businessType'>Electrical</div>
            </div> 
          </div>
        </div>
      </div>
    </div>   
    </>
  );
};

export default Locations;

