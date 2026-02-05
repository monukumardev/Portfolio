import "boxicons/css/boxicons.min.css";
import { useState } from "react";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed w-full z-50 flex justify-between items-center py-4 px-4 lg:px-20 bg-gradient-to-r from-blue-50 via-white to-green-50 shadow-md">
      
      {/* Logo */}
      <h1 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500">
        Monu Kr
      </h1>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-10">
        {menuItems.map((item, idx) => (
          <a
            key={idx}
            href={item.href}
            className="relative text-gray-800 font-medium tracking-wide hover:text-blue-500 transition-all duration-300 group"
          >
            {item.name}
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-green-400 transition-all group-hover:w-full"></span>
          </a>
        ))}
      </nav>

      {/* Contact Button */}
      <a
        href="#contact"
        className="hidden md:inline-block bg-gradient-to-r from-teal-400 to-green-500 text-white py-2 px-6 rounded-full font-semibold shadow-lg hover:scale-105 transform transition duration-300"
      >
        Contact
      </a>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMobileMenu}
        className="md:hidden text-3xl p-2 text-gray-800 z-50"
      >
        <i className={`bx ${mobileOpen ? "bx-x" : "bx-menu"} transition-transform duration-300`}></i>
      </button>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 bg-white bg-opacity-95 backdrop-blur-md flex flex-col items-center justify-center gap-8 z-40 transition-all duration-500">
          {menuItems.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="text-xl font-semibold text-gray-800 hover:text-green-500 transition duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
