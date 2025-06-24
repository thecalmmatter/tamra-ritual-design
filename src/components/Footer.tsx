
import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-copper-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-3xl font-bold text-copper-300 mb-4">Tāmra</h3>
            <p className="text-copper-200 mb-6 max-w-md">
              Bringing ancient Ayurvedic wisdom into modern life through 
              thoughtfully crafted copper drinkware.
            </p>
            <p className="text-sm text-copper-400">
              Made with care in India 🇮🇳
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-copper-200">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-copper-300 hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="text-copper-300 hover:text-white transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="text-copper-300 hover:text-white transition-colors">Care Instructions</a></li>
              <li><a href="#" className="text-copper-300 hover:text-white transition-colors">Sustainability Story</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-copper-200">Connect</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-copper-300 hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-copper-300 hover:text-white transition-colors">Wholesale</a></li>
              <li>
                <div className="flex items-center gap-2 mt-4">
                  <a href="#" className="text-copper-300 hover:text-white transition-colors">
                    <Instagram size={24} />
                  </a>
                  <span className="text-copper-400">@tamra_copper</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-copper-700 mt-12 pt-8 text-center">
          <p className="text-copper-400">
            © 2024 Tāmra. All rights reserved. | Ancient wisdom, timeless craft.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
