import React from "react";

function Footer() {
    return (
        <footer className="bg-gray-800 text-gray-200 py-8">
          <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center">
            {/* Logo or Brand */}
            <div className="mb-4 md:mb-0">
              <h2 className="text-lg font-bold">BlogIt</h2>
              <p className="text-sm">© 2024 YourBrand. All rights reserved.</p>
            </div>
    
            {/* Navigation Links */}
            <nav className="mb-4 md:mb-0">
              <ul className="flex flex-col md:flex-row gap-4 text-sm">
                <li>
                  <a href="#home" className="hover:text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-white">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
    
            {/* Social Media Icons */}
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white"
              >
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24h11.495v-9.294H9.692v-3.62h3.128V8.413c0-3.1 1.894-4.787 4.659-4.787 1.325 0 2.463.098 2.796.143v3.244l-1.92.001c-1.504 0-1.795.714-1.795 1.762v2.309h3.59l-.467 3.62h-3.123V24h6.126c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white"
              >
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775a4.924 4.924 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.691 8.095 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.664 2.475c0 1.71.87 3.213 2.188 4.096a4.902 4.902 0 01-2.228-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.085 4.92 4.92 0 004.604 3.417A9.867 9.867 0 010 21.54a13.94 13.94 0 007.548 2.211c9.056 0 14.01-7.514 14.01-14.01 0-.213-.005-.426-.014-.637a9.936 9.936 0 002.449-2.548z" />
                </svg>
              </a>
            </div>
          </div>
        </footer>
      );
}

export default Footer;
