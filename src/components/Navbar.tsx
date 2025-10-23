import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from './ui/dropdown-menu';
import { ChevronDown, Menu, X } from 'lucide-react';
import nnpcLogo from 'figma:asset/99299d21980adce7998a46882df0ebd903d4323a.png';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const serviceCategories = [
    { name: 'Medicine & Allied', slug: 'medicine-allied' },
    { name: 'Surgery & Allied', slug: 'surgery-allied' },
    { name: 'Pediatrics', slug: 'pediatrics' },
    { name: 'Emergency & Diagnostics', slug: 'emergency-diagnostics' }
  ];

  const navItems = [
    { name: 'About', path: '/about' },
    { name: 'Location', path: '/location' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`bg-white shadow-md sticky top-0 z-50 ${isScrolled ? 'scrolled' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src={nnpcLogo} 
              alt="NNPC Logo" 
              className="h-16 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`transition-colors duration-200 ${
                  location.pathname === item.path
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-foreground hover:text-primary'
                }`}
              >
                {item.name}
              </Link>
            ))}

            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors duration-200">
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuItem asChild>
                  <Link to="/services" className="w-full">All Services</Link>
                </DropdownMenuItem>
                {serviceCategories.map((category) => (
                  <DropdownMenuItem key={category.slug} asChild>
                    <Link to={`/services/${category.slug}`} className="w-full">
                      {category.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              to="/doctors"
              className={`transition-colors duration-200 ${
                location.pathname === '/doctors'
                  ? 'text-primary border-b-2 border-primary'
                  : 'text-foreground hover:text-primary'
              }`}
            >
              Our Doctors
            </Link>
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/signin">
              <Button variant="outline" size="sm">
                Sign In
              </Button>
            </Link>
            <Link to="/appointments">
              <Button size="sm">
                Book Appointment
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="block px-3 py-2 text-foreground hover:text-primary hover:bg-secondary rounded-md"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/services"
                className="block px-3 py-2 text-foreground hover:text-primary hover:bg-secondary rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/doctors"
                className="block px-3 py-2 text-foreground hover:text-primary hover:bg-secondary rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Our Doctors
              </Link>
              <div className="pt-2 space-y-2">
                <Link to="/signin" onClick={() => setIsOpen(false)}>
                  <Button variant="outline" size="sm" className="w-full">
                    Sign In
                  </Button>
                </Link>
                <Link to="/appointments" onClick={() => setIsOpen(false)}>
                  <Button size="sm" className="w-full">
                    Book Appointment
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}