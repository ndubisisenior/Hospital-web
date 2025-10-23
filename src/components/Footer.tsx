import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import nnpcLogo from 'figma:asset/99299d21980adce7998a46882df0ebd903d4323a.png';

export function Footer() {
  return (
    <footer className="text-white" style={{ backgroundColor: '#1A2F3E' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src={nnpcLogo} 
                alt="NNPC Logo" 
                className="h-12 w-auto"
              />
              <div>
                <span className="text-xl font-semibold">NNPC</span>
                <p className="text-sm text-gray-300">Medical Services Limited</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              NNPC Medical Services Limited - Providing world-class healthcare services 
              with compassion and excellence.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
              <Instagram className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
              <Linkedin className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-white">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white">Our Services</Link></li>
              <li><Link to="/doctors" className="text-gray-300 hover:text-white">Our Doctors</Link></li>
              <li><Link to="/appointments" className="text-gray-300 hover:text-white">Book Appointment</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services/medicine-allied" className="text-gray-300 hover:text-white">Medicine & Allied</Link></li>
              <li><Link to="/services/surgery-allied" className="text-gray-300 hover:text-white">Surgery & Allied</Link></li>
              <li><Link to="/services/pediatrics" className="text-gray-300 hover:text-white">Pediatrics</Link></li>
              <li><Link to="/services/emergency-diagnostics" className="text-gray-300 hover:text-white">Emergency & Diagnostics</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-gray-300">+234 1 234 5678</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-gray-300">info@nmsl.ng</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-gray-300">Lagos, Abuja, Port Harcourt</span>
              </div>
            </div>
            
            <div className="mt-6">
              <h4 className="font-semibold mb-2">Emergency Hotline</h4>
              <p className="text-primary text-lg font-semibold">+234 800 NMSL-911</p>
              <p className="text-sm text-gray-400">Available 24/7</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 NNPC Medical Services Limited. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-400 hover:text-white text-sm">Privacy Policy</Link>
              <Link to="/terms" className="text-gray-400 hover:text-white text-sm">Terms of Service</Link>
              <Link to="/careers" className="text-gray-400 hover:text-white text-sm">Careers</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}