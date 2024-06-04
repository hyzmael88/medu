import React from 'react'
import MenuIcon from './icons/MenuIcon'


function Navbar() {
  return (
    <nav className="bg-white px-4 py-2 shadow-md">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          <a href="#" className="flex items-center">
            <img src="/assets/navbar/logo.png" alt="Logo" className="mr-3 h-10" />
            
          </a>
          <div className="flex md:order-2">
            <button className="text-white bg-[#10B981] hover:bg-[#059669] focus:ring-4 focus:ring-[#059669] font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0">
              Get Started
            </button>
            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <MenuIcon className="w-6 h-6" />
            </button>
          </div>
          <div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">
            <ul className="flex flex-col items-center mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-gray-700 rounded md:bg-transparent md:p-0"
                  aria-current="page"
                >
                  Our Products
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 rounded md:bg-transparent md:p-0">
                  How it works
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 rounded md:bg-transparent md:p-0">
                  Industries
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 rounded md:bg-transparent md:p-0">
                  Insights
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 rounded md:bg-transparent md:p-0">
                  About Us
                </a>
              </li>
              <li>
                <button variant="outline" className="rounded-lg text-sm px-5 py-2.5 text-center">
                  I\'m a Distributor
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  )
}

export default Navbar