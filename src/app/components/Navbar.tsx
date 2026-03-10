import { useState } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { to: "/", label: "Home" },
    { to: "/services", label: "Services" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A1A2F]/95 backdrop-blur-md border-b border-[#C8A96A]/15">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 border border-[#C8A96A]/60 flex items-center justify-center">
              <div className="w-3 h-3 bg-[#C8A96A]/80" />
            </div>
            <div>
              <span
                className="text-[#F5F6F8] tracking-[0.2em] uppercase"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "14px",
                }}
              >
                Fort Knox
              </span>
              <span
                className="text-[#C8A96A]/70 tracking-[0.3em] uppercase block"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "9px",
                  letterSpacing: "0.35em",
                }}
              >
                Strategies
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`tracking-[0.15em] uppercase transition-colors duration-300 ${
                  isActive(link.to)
                    ? "text-[#C8A96A]"
                    : "text-[#F5F6F8]/60 hover:text-[#C8A96A]/80"
                }`}
                style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px" }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="border border-[#C8A96A]/40 text-[#C8A96A] px-6 py-2.5 tracking-[0.15em] uppercase transition-all duration-300 hover:bg-[#C8A96A]/10 hover:border-[#C8A96A]/60"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px" }}
            >
              Engage
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[#F5F6F8]/60"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0A1A2F]/98 backdrop-blur-md border-t border-[#C8A96A]/10">
          <div className="px-6 py-8 space-y-6">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={`block tracking-[0.2em] uppercase ${
                  isActive(link.to) ? "text-[#C8A96A]" : "text-[#F5F6F8]/60"
                }`}
                style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px" }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
