import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router';
import { FiMenu, FiX, FiChevronDown, FiChevronRight } from 'react-icons/fi';
import logo from '../assets/projecti_amge/logo0.PNG';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);
    const dropdownRef = useRef(null);

    const toggleDropdown = (dropdown) => {
        setOpenDropdown(openDropdown === dropdown ? null : dropdown);
    };

    // Close dropdown if clicked outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpenDropdown(null);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const closeAllMenus = () => {
        setIsOpen(false);
        setOpenDropdown(null);
    };

    const navItems = [
        { name: 'Home', path: '/' },
        {
            name: 'Service',
            submenu: [
                { name: 'Services', path: '/service-list' },
                { name: 'FAQ', path: '/faq' },
            ],
        },
        {
            name: 'Blog',
            submenu: [
                { name: 'Personal Blog', path: '/blog-list-personal' },

            ],
        },
        {
            name: 'Pages',
            submenu: [
                { name: 'About', path: '/about' },
                { name: 'Project', path: '/project-list' },
                { name: 'Tech Skills', path: '/tech-skill' },
                { name: 'Soft Skills', path: '/soft-skill' },
                { name: '404 Page', path: '/404-page' },
            ],
        },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <header className="backdrop-blur-md bg-[#0a192f]/90 border-b border-[#1e3a8a]/30 sticky top-0 z-50">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link to="/" className="header-logo" onClick={closeAllMenus}>
                            <img src={logo} alt="Logo" className="h-10 w-auto rounded-2xl" />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-8" ref={dropdownRef}>
                        <nav className="flex items-center space-x-6">
                            {navItems.map((item) => (
                                <div key={item.name} className="relative group">
                                    {item.submenu && item.submenu.length > 0 ? (
                                        <>
                                            <button
                                                onClick={() => toggleDropdown(item.name)}
                                                className="flex items-center text-gray-200 hover:text-teal-300 transition-colors font-medium"
                                            >
                                                {item.name}
                                                <FiChevronDown className="ml-1" />
                                            </button>
                                            <div
                                                className={`absolute left-0 mt-2 w-48 bg-[#0a192f]/95 rounded-md shadow-lg py-1 z-50 border border-[#1e3a8a]/30 ${openDropdown === item.name ? 'block' : 'hidden group-hover:block'
                                                    }`}
                                            >
                                                {item.submenu.map((subItem) => (
                                                    <NavLink
                                                        key={subItem.name}
                                                        to={subItem.path}
                                                        className={({ isActive }) =>
                                                            `block px-4 py-2 text-gray-200 hover:bg-[#112240] hover:text-teal-300 ${isActive ? 'text-teal-400 font-medium' : ''
                                                            }`
                                                        }
                                                        onClick={closeAllMenus}
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
                                                `text-gray-200 hover:text-teal-300 transition-colors font-medium ${isActive ? 'text-teal-400' : ''
                                                }`
                                            }
                                            onClick={closeAllMenus}
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
                            onClick={closeAllMenus}
                        >
                            Hire Me <FiChevronRight className="ml-1" />
                        </NavLink>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-200 hover:text-teal-300 focus:outline-none"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <div
                    className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out will-change-transform will-change-opacity ${isOpen ? 'max-h-[1000px] opacity-100 scale-100' : 'max-h-0 opacity-0 scale-95'
                        } bg-[#0a192f]/95 rounded-xl   border-t border-[#1e3a8a]/30`}
                >
                    <nav className="flex flex-col space-y-3">
                        {navItems.map((item) => (
                            <div key={item.name}>
                                {item.submenu && item.submenu.length > 0 ? (
                                    <>
                                        <button
                                            onClick={() => toggleDropdown(item.name)}
                                            className="flex items-center justify-between w-full text-gray-200 hover:text-teal-300 py-2 px-4 font-medium"
                                        >
                                            {item.name}
                                            <FiChevronDown
                                                className={`transition-transform ${openDropdown === item.name ? 'transform rotate-180' : ''
                                                    }`}
                                            />
                                        </button>
                                        {/*submenu container */}
                                        <div
                                            className={`overflow-hidden transition-all duration-120 ease-in-out ${openDropdown === item.name ? 'max-h-96' : 'max-h-0'
                                                }`}
                                        >
                                            <div className="pl-6">
                                                {item.submenu.map((subItem) => (
                                                    <NavLink
                                                        key={subItem.name}
                                                        to={subItem.path}
                                                        className={({ isActive }) =>
                                                            `block py-2 text-gray-300 hover:text-teal-300 ${isActive ? 'text-teal-400 font-medium' : ''
                                                            }`
                                                        }
                                                        onClick={closeAllMenus}
                                                    >
                                                        {subItem.name}
                                                    </NavLink>
                                                ))}
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <NavLink
                                        to={item.path}
                                        className={({ isActive }) =>
                                            `block py-2 px-4 text-gray-200 hover:text-teal-300 font-medium ${isActive ? 'text-teal-400' : ''
                                            }`
                                        }
                                        onClick={closeAllMenus}
                                    >
                                        {item.name}
                                    </NavLink>
                                )}
                            </div>
                        ))}
                        <NavLink
                            to="/contact"
                            className="mt-4 mx-4 flex items-center justify-center px-4 py-2 text-sm font-medium rounded-md border border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-[#0a192f] transition-colors"
                            onClick={closeAllMenus}
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