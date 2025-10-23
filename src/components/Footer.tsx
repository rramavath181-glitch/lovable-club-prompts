import { Code2, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Code2 className="h-8 w-8" />
              <span className="text-xl font-bold">XYZ Coding Club</span>
            </div>
            <p className="text-sm text-background/80">
              Empowering students to excel in technology through collaboration and innovation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-background/80">
              <li>
                <a href="#about" className="hover:text-background transition-smooth">
                  About Us
                </a>
              </li>
              <li>
                <a href="#events" className="hover:text-background transition-smooth">
                  Events
                </a>
              </li>
              <li>
                <a href="#team" className="hover:text-background transition-smooth">
                  Team
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-background transition-smooth">
                  Gallery
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-background/80">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>codingclub@xyzcollege.edu</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>XYZ College Campus</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-bold mb-4">Stay Updated</h3>
            <p className="text-sm text-background/80 mb-3">
              Subscribe to our newsletter for the latest updates and events.
            </p>
            <button className="text-sm bg-background text-foreground px-4 py-2 rounded-md hover:bg-background/90 transition-smooth font-medium">
              Subscribe
            </button>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-sm text-background/60">
          <p>&copy; {currentYear} XYZ College Coding Club. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
