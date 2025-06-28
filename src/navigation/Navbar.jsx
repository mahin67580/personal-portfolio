import React, { useState } from 'react';
import { Link, NavLink } from 'react-router';
import { FiMenu, FiX, FiChevronDown, FiChevronRight } from 'react-icons/fi';
import logo from '../assets/projecti_amge/logo0.PNG'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const navItems = [
    { name: 'Home', path: '/' },
    {
      name: 'Service',
      submenu: [
        { name: 'Services', path: '/service-list' },
        { name: 'Service Details', path: '/service-details' },
      ],
    },
    {
      name: 'Blog',
      submenu: [
        { name: 'Blog List Full Width', path: '/blog-list' },
        { name: 'Blog List Left Sidebar', path: '/blog-list-sidebar-left' },
        { name: 'Blog List Right Sidebar', path: '/blog-list-sidebar-right' },
        { name: 'Blog Details Full Width', path: '/blog-details' },
        { name: 'Blog Details Left Sidebar', path: '/blog-details-sidebar-left' },
        { name: 'Blog Details Right Sidebar', path: '/blog-details-sidebar-right' },
      ],
    },
    {
      name: 'Pages',
      submenu: [
        { name: 'About Us', path: '/about' },
        { name: 'Project', path: '/project-list' },
        { name: 'Project Details', path: '/project-details' },
        { name: 'FAQ', path: '/faq' },
        { name: '404 Page', path: '/404-page' },
      ],
    },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="  backdrop-blur-md bg-[#0a192f]/90 border-b border-[#1e3a8a]/30">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="header-logo">
              <img 
                src={logo}
                alt="Logo" 
                className="h-10 w-auto rounded-2xl"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <nav className="flex items-center space-x-6">
              {navItems.map((item) => (
                <div key={item.name} className="relative group">
                  {item.submenu ? (
                    <>
                      <button
                        onClick={() => toggleDropdown(item.name)}
                        className="flex items-center text-gray-200 hover:text-teal-300 transition-colors font-medium"
                      >
                        {item.name}
                        <FiChevronDown className="ml-1" />
                      </button>
                      <div 
                        className={`absolute left-0 mt-2 w-48 bg-[#0a192f]/95 rounded-md shadow-lg py-1 z-50 border border-[#1e3a8a]/30 ${
                          openDropdown === item.name ? 'block' : 'hidden group-hover:block'
                        }`}
                      >
                        {item.submenu.map((subItem) => (
                          <NavLink
                            key={subItem.name}
                            to={subItem.path}
                            className={({ isActive }) =>
                              `block px-4 py-2 text-gray-200 hover:bg-[#112240] hover:text-teal-300 ${
                                isActive ? 'text-teal-400 font-medium' : ''
                              }`
                            }
                          >
                            {subItem.name}
                          </NavLink>
                        ))}
                      </div>
                    </>
                  ) : (
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `text-gray-200 hover:text-teal-300 transition-colors font-medium ${
                          isActive ? 'text-teal-400' : ''
                        }`
                      }
                    >
                      {item.name}
                    </NavLink>
                  )}
                </div>
              ))}
            </nav>

            <NavLink
              to="/contact"
              className="ml-4 flex items-center px-4 py-2 text-sm font-medium rounded-md border border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-[#0a192f] transition-colors"
            >
              Hire Me <FiChevronRight className="ml-1" />
            </NavLink>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-200 hover:text-teal-300 focus:outline-none"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden ${isOpen ? 'block' : 'hidden'} bg-[#0a192f]/95 py-4 border-t border-[#1e3a8a]/30`}
        >
          <nav className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <div key={item.name}>
                {item.submenu ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className="flex items-center justify-between w-full text-gray-200 hover:text-teal-300 py-2 px-4 font-medium"
                    >
                      {item.name}
                      <FiChevronDown
                        className={`transition-transform ${
                          openDropdown === item.name ? 'transform rotate-180' : ''
                        }`}
                      />
                    </button>
                    <div
                      className={`pl-6 ${
                        openDropdown === item.name ? 'block' : 'hidden'
                      }`}
                    >
                      {item.submenu.map((subItem) => (
                        <NavLink
                          key={subItem.name}
                          to={subItem.path}
                          className={({ isActive }) =>
                            `block py-2 text-gray-300 hover:text-teal-300 ${
                              isActive ? 'text-teal-400 font-medium' : ''
                            }`
                          }
                          onClick={() => setIsOpen(false)}
                        >
                          {subItem.name}
                        </NavLink>
                      ))}
                    </div>
                  </>
                ) : (
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `block py-2 px-4 text-gray-200 hover:text-teal-300 font-medium ${
                        isActive ? 'text-teal-400' : ''
                      }`
                    }
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </NavLink>
                )}
              </div>
            ))}
            <NavLink
              to="/contact"
              className="mt-4 mx-4 flex items-center justify-center px-4 py-2 text-sm font-medium rounded-md border border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-[#0a192f] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Hire Me <FiChevronRight className="ml-1" />
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;