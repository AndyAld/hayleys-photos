import React from 'react';
import { FaInstagram, FaFacebookF, FaLinkedin } from 'react-icons/fa';
import 'tailwindcss/tailwind.css';

function Footer() {
    return (
      <footer className="bg-black text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <p>&copy; {new Date().getFullYear()} HayThereFriend Photography</p>
          <div className="flex">
            {/* Uncomment and import icons if you want to use them */}
            <a href="https://www.instagram.com/haytherefriend/" className="text-xl mx-2"><FaInstagram /></a>
            <a href="https://www.facebook.com/haytherefriend/" className="text-xl mx-2"><FaFacebookF /></a>
            <a href="https://www.linkedin.com/in/hayley-herriges-295b39a5/" className="text-xl mx-2"><FaLinkedin /></a>
            {/* <a href="https://instagram.com" className="text-xl mx-2">Instagram</a>
            <a href="https://facebook.com" className="text-xl mx-2">Facebook</a> */}
          </div>
        </div>
      </footer>
    );
  }
export default Footer;