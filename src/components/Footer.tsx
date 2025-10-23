import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-muted border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="flex flex-col items-start gap-4">
            <img src={logo} alt="Coastal Kairuchi" className="h-20 w-20 rounded-full object-contain" />
            <h3 className="font-bold text-xl text-foreground">Coastal Kairuchi</h3>
            <p className="text-muted-foreground text-sm italic">
              Authentic Coastal Taste from Mangalore
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/menu" className="text-muted-foreground hover:text-primary transition-colors">
                  Menu
                </a>
              </li>
              <li>
                <a href="/gallery" className="text-muted-foreground hover:text-primary transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Get in Touch</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone size={18} className="text-primary" />
                <a href="tel:+919876543210" className="hover:text-primary transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail size={18} className="text-primary" />
                <a href="mailto:info@coastalkairuchi.com" className="hover:text-primary transition-colors">
                  info@coastalkairuchi.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin size={18} className="text-primary mt-1" />
                <span>Mangalore, Karnataka, India</span>
              </li>
            </ul>

            {/* Social Media */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-background hover:bg-primary hover:text-primary-foreground transition-all"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-background hover:bg-primary hover:text-primary-foreground transition-all"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Mangalore,Karnataka"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-background hover:bg-accent hover:text-accent-foreground transition-all"
                aria-label="Location"
              >
                <MapPin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Coastal Kairuchi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
