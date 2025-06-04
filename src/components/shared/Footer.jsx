
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#212057] text-white py-8">
      <div className="container mx-auto flex justify-between items-center">
        {/* Links Section */}
        <div className="flex space-x-6">
          <a href="/about" className="hover:underline">About</a>
          <a href="/contact" className="hover:underline">Contact</a>
          <a href="/privacy-policy" className="hover:underline">Privacy Policy</a>
        </div>

        {/* Social Media Section */}
        <div className="flex space-x-6">
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
            <i className="fab fa-twitter"></i> Twitter
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
            <i className="fab fa-github"></i> GitHub
          </a>
        </div>
      </div>
      
      <div className="text-center mt-4">
        <p>&copy; {new Date().getFullYear()} Job Hunt, All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;

