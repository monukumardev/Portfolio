import "boxicons/css/boxicons.min.css";
import { useState } from "react";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full h-20 z-50 flex justify-between items-center px-4 lg:px-20 bg-gradient-to-r from-blue-50 via-white to-green-50 shadow-md">
      {/* Logo */}
      <a href="#home" className="flex items-center gap-1 group relative z-50">
        <span className="flex items-center justify-center w-10 h-10 bg-gray-900 text-white font-black text-2xl rounded-lg group-hover:-translate-y-1 transition-transform duration-300 shadow-md">
          M
        </span>

        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 tracking-tight">
          onu{" "}
          <span className="text-blue-500 group-hover:text-teal-500 transition-colors duration-300">
            Kr.
          </span>
        </h1>
      </a>

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
        className="hidden md:inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-teal-500 text-white py-2.5 px-7 rounded-full font-semibold shadow-md hover:shadow-lg hover:-translate-y-0.5 transform transition-all duration-300"
      >
        Let's Talk
      </a>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMobileMenu}
        className="md:hidden text-3xl p-2 text-gray-800 z-50"
      >
        <i className={`bx ${mobileOpen ? "bx-x" : "bx-menu"}`}></i>
      </button>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 bg-white/95 backdrop-blur-md flex flex-col items-center justify-center gap-8 z-40">
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