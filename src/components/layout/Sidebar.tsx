import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, X } from 'lucide-react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Causes", path: "/causes" },
    { name: "Donate", path: "/donate" },
    { name: "Volunteer", path: "/volunteer" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <aside className="md:w-1/4 bg-brand-dark p-8 flex flex-col justify-between min-h-screen sticky top-0 h-screen">
      {/* Desktop Sidebar */}
      <div className="hidden md:flex flex-col justify-between flex-1">
        <div>
          <div className="flex justify-between items-center mb-16">
            <h1 className="text-2xl font-bold text-white uppercase tracking-widest">
              Green Heart Collective
            </h1>
            <Search className="text-white h-6 w-6" />
          </div>
          <nav>
            <ul>
              {navItems.map((item, index) => (
                <li key={item.name} className="mb-8">
                  <Link
                    to={item.path}
                    className={`flex items-center text-lg transition-colors ${
                      isActive(item.path)
                        ? "text-white"
                        : "text-muted-foreground hover:text-white"
                    }`}
                  >
                    <span className="text-sm mr-4">0{index + 1}</span>
                    <span className="font-bold uppercase tracking-wider">{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="text-muted-foreground text-sm">
          <p>© {new Date().getFullYear()} Green Heart Collective</p>
          <p>Inspired by a design from Strive Foundation.</p>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="md:hidden">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold text-white uppercase tracking-widest">
            Green Heart
          </h1>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="text-white h-8 w-8" /> : <Menu className="text-white h-8 w-8" />}
          </button>
        </div>
        {isOpen && (
          <nav className="mt-8">
            <ul>
              {navItems.map((item) => (
                <li key={item.name} className="mb-4">
                  <Link
                    to={item.path}
                    className={`block text-lg transition-colors text-center p-2 rounded-md ${
                      isActive(item.path)
                        ? "text-brand-dark bg-brand-yellow"
                        : "text-white hover:bg-brand-pink"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
