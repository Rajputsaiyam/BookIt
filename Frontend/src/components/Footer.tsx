import  React from 'react';
import { Facebook, Twitter, Instagram, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-primary to-primary/80 text-white py-12">
      <div className="max-w-screen-xl mx-auto px-4 lg:px-32">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">TravelEase</h3>
            <p className="text-sm opacity-90">Explore the world with ease. Your trusted travel companion for unforgettable adventures.</p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2 text-sm">
              <a href="#" className="block hover:text-accent transition">Home</a>
              <a href="#" className="block hover:text-accent transition">Destinations</a>
              <a href="#" className="block hover:text-accent transition">About Us</a>
              <a href="#" className="block hover:text-accent transition">Contact</a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <div className="space-y-2 text-sm">
              <a href="#" className="block hover:text-accent transition">Help Center</a>
              <a href="#" className="block hover:text-accent transition">Terms of Service</a>
              <a href="#" className="block hover:text-accent transition">Privacy Policy</a>
              <a href="#" className="block hover:text-accent transition">FAQ</a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex space-x-3 mb-4">
              <Facebook className="w-5 h-5 cursor-pointer hover:text-accent" />
              <Twitter className="w-5 h-5 cursor-pointer hover:text-accent" />
              <Instagram className="w-5 h-5 cursor-pointer hover:text-accent" />
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>info@travelease.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-6 mt-8 text-center text-sm opacity-75">
          © 2024 TravelEase. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
 