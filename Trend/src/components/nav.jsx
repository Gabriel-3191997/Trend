import React from "react";
import { Link } from "react-router-dom"; 
// import logo from "../assets/images/TrendLogo.png"

class Nav extends React.Component {
  render() {
    return (
      <>
        <nav className="bg-black border-b border-default border-none h-28">
          <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto p-4">
            
            {/* Logo Link wrapper */}
            <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
              {/* Pointing directly to the public folder root, sized perfectly */}
              {/* <img 
                src={logo} 
                alt="Trend Logo" 
                className="h-72 w-auto object-contain" 
              /> */}
            </Link>
            
            <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
              <button type="button" className="text-white bg-brand hover:bg-brand-strong box-border border-none border-transparent cursor-pointer shadow-xs font-medium leading-5 rounded-base text-sm px-3 py-2 focus:outline-none">
                sign up
              </button>
              <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-base md:hidden hover:bg-black hover:text-heading" aria-controls="navbar-sticky" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h14"/>
                </svg>
              </button>
            </div>

            <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
              <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border-none border-default rounded-base bg-black md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-neutral-primary">
                <li>
                  <Link to="/" className="block py-2 px-3 text-white bg-brand rounded-sm md:bg-transparent capitalize md:text-fg-brand md:p-0" aria-current="page">home</Link>
                </li>
                <li>
                  <Link to="/afro" className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent text-white capitalize">afro</Link>
                </li>
                <li>
                  <Link to="/trapco" className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent text-white capitalize">trapco</Link>
                </li>
                <li>
                  <Link to="/gospel" className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent text-white capitalize">gospel</Link>
                </li>
                <li>
                  <Link to="/instrumental" className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent text-white capitalize">instrumental</Link>
                </li>
                <li>
                  <Link to="/news" className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent text-white capitalize">news</Link>
                </li>
                <li>
                  <Link to="/events" className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent text-white capitalize">events</Link>
                </li>
                <li>
                  <Link to="/buy-ticket" className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent text-white capitalize">buy ticket</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }
}

export default Nav;