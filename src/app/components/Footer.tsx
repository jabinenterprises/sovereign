import { Link } from "react-router";

export function Footer() {
  return (
    <footer className="bg-[#060E1A] border-t border-[#C8A96A]/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-7 h-7 border border-[#C8A96A]/40 flex items-center justify-center">
                <div className="w-2.5 h-2.5 bg-[#C8A96A]/60" />
              </div>
              <span className="text-[#F5F6F8]/90 tracking-[0.2em] uppercase" style={{ fontFamily: "'Playfair Display', serif", fontSize: "13px" }}>
                Fort Knox Strategies
              </span>
            </div>
            <p className="text-[#F5F6F8]/30 max-w-sm" style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", lineHeight: "1.8" }}>
              Sovereign Advisory for a Transforming World
            </p>
            <div className="flex gap-6 mt-6">
              {["Washington DC", "London", "Dubai", "Nairobi", "Beijing", "Addis Ababa"].map((city) => (
                <span
                  key={city}
                  className="text-[#C8A96A]/40 tracking-[0.1em] uppercase"
                  style={{ fontFamily: "'Inter', sans-serif", fontSize: "9px" }}
                >
                  {city}
                </span>
              ))}
            </div>
          </div>

          {/* Advisory */}
          <div>
            <h4
              className="text-[#C8A96A]/60 tracking-[0.2em] uppercase mb-5"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px" }}
            >
              Advisory
            </h4>
            <div className="space-y-3">
              {[
                "Sovereign Capital Advisory",
                "Geopolitical Strategy",
                "National Transformation",
                "Digital State Infrastructure",
              ].map((item) => (
                <Link
                  key={item}
                  to="/services"
                  className="block text-[#F5F6F8]/35 hover:text-[#C8A96A]/60 transition-colors"
                  style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px" }}
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Engage */}
          <div>
            <h4
              className="text-[#C8A96A]/60 tracking-[0.2em] uppercase mb-5"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px" }}
            >
              Engage
            </h4>
            <div className="space-y-3">
              {[
                { label: "Government Inquiries", to: "/contact" },
                { label: "Partnership Inquiries", to: "/contact" },
                { label: "About", to: "/about" },
              ].map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  className="block text-[#F5F6F8]/35 hover:text-[#C8A96A]/60 transition-colors"
                  style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px" }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[#C8A96A]/8 mt-14 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#F5F6F8]/20" style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px" }}>
            © 2026 Fort Knox Strategies. All rights reserved.
          </p>
          <p className="text-[#F5F6F8]/15 tracking-[0.15em] uppercase" style={{ fontFamily: "'Inter', sans-serif", fontSize: "9px" }}>
            Confidential Government Advisory
          </p>
        </div>
      </div>
    </footer>
  );
}