import logo from "@/assets/sunrobu-logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <img src={logo} alt="Sunrobu Africa Logo" className="h-16 w-auto mb-4" />
            <p className="text-white/70 mb-4">
              Leading provider of industrial electrical, solar energy, and water treatment solutions.
            </p>
            <p className="text-sm text-white/60">
              A Green Energy Driven Nation
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-white/70 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/70 hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="text-white/70 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#projects" className="text-white/70 hover:text-white transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/70 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4">Our Services</h4>
            <ul className="space-y-2 text-white/70">
              <li>Industrial Electrical Installation</li>
              <li>Electrical Automation Control</li>
              <li>Solar Energy Solutions</li>
              <li>Water Treatment Systems</li>
              <li>Borehole Engineering</li>
              <li>Irrigation Systems</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/60 text-sm">
          <p>&copy; {new Date().getFullYear()} Sunrobu Africa. All rights reserved.</p>
          <p className="mt-2">Managing Director: Eng. Urbanus Mbindyo</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
