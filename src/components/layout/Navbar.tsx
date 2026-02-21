import { useState } from "react";
import logo from "../../assets/logo.png";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className="fixed w-full bg-primary/95 backdrop-blur-md text-white shadow-md z-50 border-b border-white/10">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo & Nama*/}
        <a
          href="#home"
          className="flex items-center text-xl font-semibold tracking-wide"
        >
          <img
            src={logo}
            alt="logo"
            className="w-8 h-8 mr-2 md:w-10 md:h-10 object-contain rounded-full"
          />
          M
          <span className="text-red-400 font-bold drop-shadow-[0_0_8px_rgba(248,113,113,0.8)]">
            áli
          </span>
          k
        </a>

        {/* Menu */}
        <ul className="hidden md:flex gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="hover:text-indigo-300 transition duration-300"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl hover:text-indigo-300 transition"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-primary/95 backdrop-blur-md px-6 pb-6 border-t border-white/10">
          <ul className="flex flex-col gap-4 text-sm font-medium">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="block py-2 hover:text-indigo-300 transition duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
