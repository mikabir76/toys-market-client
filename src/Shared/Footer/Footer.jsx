import React from 'react';
import logo from '../../assets/logo.jpg'
const Footer = () => {
    return (
      <div className=' p-10 bg-[#6D74E4] border-y-4 text-white'>
        <footer className="footer  text-xl">
      <div>
        <img className='w-16' src={logo} alt="" />
        <p>ACME Industries Ltd.<br/>Providing reliable tech since 2023</p>
      </div> 
      <div>
        <span className="footer-title">Services</span> 
        <a className="link link-hover">Branding</a> 
        <a className="link link-hover">Design</a> 
        <a className="link link-hover">Marketing</a> 
        <a className="link link-hover">Advertisement</a>
      </div> 
      <div>
        <span className="footer-title">Company</span> 
        <a className="link link-hover">About us</a> 
        <a className="link link-hover">Contact</a> 
        <a className="link link-hover">Jobs</a> 
        <a className="link link-hover">Press kit</a>
      </div> 
      <div>
        <span className="footer-title">Legal</span> 
        <a className="link link-hover">Terms of use</a> 
        <a className="link link-hover">Privacy policy</a> 
        <a className="link link-hover">Cookie policy</a>
      </div>
    </footer>
    <p className='text-center text-xl mt-4'>Copyright MI Kabir © 2023 - All right reserved</p>
      </div>
    );
};

export default Footer;