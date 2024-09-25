import React, {useEffect, useState} from 'react';

import st from 'ryscott-st';

import ServicesSlides from './ServicesSlides.jsx';
import PayrollSlides from './PayrollSlides.jsx';

const Services = function() {
  return (
    <>
    <div className='banner h'>
      <img src='images/bookkeeping4.jpg'/>
      <div className='bannerContent h'>
        <div className='bannerBox v'>
          <div className='bannerBoxContent v c'>
            <h1>Small Business Bookkeeping</h1>
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
    <div id='consulting' className='banner h'>
      <img src='images/bookkeeping5.jpg'/>
      <div className='bannerContent h'>
        <div className='bannerBox wide v'>
          <div className='bannerBoxContent v c'>
            <h1>Consulting Services</h1>
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
    <div id='payroll' className='banner h' style={{marginTop: '48px'}}>
      <img src='images/bookkeeping3.jpg'/>
      <div className='bannerContent h'>
        <div/>
        <div className='bannerBox v'>
          <div className='bannerBoxContent v c'>
            <h1>Payroll Services</h1>
            <p>
            At Innovative Bookkeeping Solutions, we offer fast and reliable payroll services so you can focus on your business. 
            Managing payroll involves more than just paying employees on time – it also includes tracking hours, benefits, deductions, and more, which can be complex and time-consuming. 
            <br/><br/>
            Instead of handling it in-house, let us take care of it for you. 
            Our expert team will ensure accurate and timely payments, maintain records, and stay updated on government regulations to help you avoid penalties. 
            Let us handle the hard work, so you don’t have to.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className='services v'>
      <PayrollSlides/>
    </div>
    <div id='quickbooks' className='banner h'>
      <img src='images/bookkeeping10.jpg'/>
      <div className='bannerContent h'>
        <div className='bannerBox wide tall v'>
          <div className='bannerBoxContent v c'>
            <h1>QuickBooks Service</h1>
            <h3>Five Advantages of Working with a Certified ProAdvisor</h3>
            <ul>
              <li>
                A QuickBooks ProAdvisor is an accounting or bookkeeping professional trained, tested, and certified by Intuit on a range of advanced, 
                QuickBooks-specific topics and skill sets. 
                Certification involves extensive training, a two-hour exam.
              </li><br/>
              <li>
                A QuickBooks ProAdvisor keeps you up-to-date. QuickBooks ProAdvisor's hold special QuickBooks product certifications issued by Intuit. 
                These certifications ensure they have the skills to guide you in your accounting practices.
              </li><br/>
              <li>
                Hiring a QuickBooks ProAdvisor allow you to utilize their wealth of knowledge so you can apply their intellect to your bookkeeping processes.
              </li><br/>
              <li>
                A QuickBooks ProAdvisor ensures your QuickBooks is set up correctly. 
                Setting up QuickBooks incorrectly can lead to inaccurate information that results in inaccurate financial statements.
              </li><br/>
              <li>
                Save time and valuable resources by hiring a QuickBooks ProAdvisor. 
                A QuickBooks ProAdvisor will calibrate and optimize your QuickBooks so it functions with maximum efficiency. 
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className='banner triplet h'>
      <div className='bannerBox v c'>
        <div className='bannerBoxContent v c'>
          <h2>QuickBooks Desktop or Online</h2>
          <p>
          Master the setup of QuickBooks Desktop or Online to optimize its features for your specific business needs.
          Get practical, hands-on tips and insights that will empower you and your team to make the most of QuickBooks.
          <br/><br/>
          Whether you're just starting out or need advanced training, we offer sessions tailored to your skill level—from basic setup to advanced features.
          Learn how to securely store, access, and share your financial data anytime, anywhere, ensuring you have the information you need to make smart business decisions.
          </p>
        </div>
      </div>
      <div className='bannerBox v c'>
        <div className='bannerBoxContent v c'>
          <img className='boxImage' src='images/emblem.png'/>
        </div>
      </div>
      <div className='bannerBox v c'>
        <div className='bannerBoxContent v c'>
          <h2>QuickBooks Support or Training</h2>
          <p>
          Stay current with the latest QuickBooks features and updates.
          At dap Bookkeeping and More, our Intuit-certified QuickBooks ProAdvisors offer expert support and training for QuickBooks Online, Pro, Premier, POS, and Enterprise.
          <br/><br/>
          Through our comprehensive training, you'll learn how to implement new features that enhance both your knowledge and efficiency.
          Improve your QuickBooks setup, problem-solving, and troubleshooting with focused, hands-on learning.
          Gain valuable experience in essential tasks such as online bill payments, invoicing, expense tracking, report generation, payroll, and more..
          </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default Services;

