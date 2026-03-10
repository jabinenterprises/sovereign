import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const offices = [
  { city: "Washington DC", region: "Americas" },
  { city: "London", region: "Europe" },
  { city: "Dubai", region: "Middle East" },
  { city: "Nairobi", region: "East Africa" },
  { city: "Beijing", region: "Asia Pacific" },
  { city: "Addis Ababa", region: "East Africa" },
];

export function ContactPage() {
  const [inquiryType, setInquiryType] = useState("government");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-[#F5F6F8]">
      {/* Hero */}
      <section className="bg-[#0A1A2F] pt-32 pb-20 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(#C8A96A 1px, transparent 1px), linear-gradient(90deg, #C8A96A 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[#C8A96A]/50 tracking-[0.4em] uppercase mb-6 block"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px" }}
          >
            Begin a Strategic Dialogue
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[#F5F6F8] max-w-3xl"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              lineHeight: 1.15,
              fontWeight: 400,
            }}
          >
            Engage With
            <br />
            <span className="text-[#C8A96A]">Fort Knox Strategies</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[#F5F6F8]/40 max-w-2xl mt-6"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "14px",
              lineHeight: 1.9,
            }}
          >
            Governments today face decisions that will shape their economic
            future for decades. Contact our team to explore how we can support
            your government's strategic priorities.
          </motion.p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C8A96A]/20 to-transparent" />
      </section>

      {/* Content */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Form */}
            <div className="lg:col-span-7">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="border border-[#C8A96A]/20 p-12 text-center"
                >
                  <div className="w-12 h-12 border border-[#C8A96A]/30 flex items-center justify-center mx-auto mb-6">
                    <div className="w-4 h-4 bg-[#2E7D6E]/60" />
                  </div>
                  <h3
                    className="text-[#0A1A2F] mb-3"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "22px",
                      fontWeight: 400,
                    }}
                  >
                    Inquiry Received
                  </h3>
                  <p
                    className="text-[#2E3A4A]/60"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "13px",
                      lineHeight: 1.8,
                    }}
                  >
                    Thank you. A member of our advisory team will respond within
                    48 hours through secure channels.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  onSubmit={handleSubmit}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    visible: { transition: { staggerChildren: 0.1 } },
                  }}
                >
                  {/* Inquiry Type */}
                  <motion.div variants={fadeUp} className="mb-10">
                    <label
                      className="text-[#C8A96A]/60 tracking-[0.2em] uppercase block mb-4"
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "10px",
                      }}
                    >
                      Inquiry Type
                    </label>
                    <div className="flex gap-4">
                      {[
                        { value: "government", label: "Government Inquiry" },
                        { value: "partnership", label: "Partnership Inquiry" },
                      ].map((type) => (
                        <button
                          key={type.value}
                          type="button"
                          onClick={() => setInquiryType(type.value)}
                          className={`border px-6 py-3 tracking-[0.1em] uppercase transition-all duration-300 ${
                            inquiryType === type.value
                              ? "border-[#C8A96A]/50 bg-[#C8A96A]/5 text-[#0A1A2F]"
                              : "border-[#0A1A2F]/10 text-[#2E3A4A]/50 hover:border-[#C8A96A]/30"
                          }`}
                          style={{
                            fontFamily: "'Inter', sans-serif",
                            fontSize: "10px",
                          }}
                        >
                          {type.label}
                        </button>
                      ))}
                    </div>
                  </motion.div>

                  {/* Fields */}
                  <motion.div
                    variants={fadeUp}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6"
                  >
                    <div>
                      <label
                        className="text-[#2E3A4A]/50 tracking-[0.15em] uppercase block mb-2"
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "10px",
                        }}
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full bg-transparent border-b border-[#0A1A2F]/15 py-3 text-[#0A1A2F] focus:border-[#C8A96A]/50 focus:outline-none transition-colors"
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "14px",
                        }}
                      />
                    </div>
                    <div>
                      <label
                        className="text-[#2E3A4A]/50 tracking-[0.15em] uppercase block mb-2"
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "10px",
                        }}
                      >
                        Title / Position
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full bg-transparent border-b border-[#0A1A2F]/15 py-3 text-[#0A1A2F] focus:border-[#C8A96A]/50 focus:outline-none transition-colors"
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "14px",
                        }}
                      />
                    </div>
                  </motion.div>

                  <motion.div
                    variants={fadeUp}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6"
                  >
                    <div>
                      <label
                        className="text-[#2E3A4A]/50 tracking-[0.15em] uppercase block mb-2"
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "10px",
                        }}
                      >
                        Organization / Government
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full bg-transparent border-b border-[#0A1A2F]/15 py-3 text-[#0A1A2F] focus:border-[#C8A96A]/50 focus:outline-none transition-colors"
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "14px",
                        }}
                      />
                    </div>
                    <div>
                      <label
                        className="text-[#2E3A4A]/50 tracking-[0.15em] uppercase block mb-2"
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "10px",
                        }}
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full bg-transparent border-b border-[#0A1A2F]/15 py-3 text-[#0A1A2F] focus:border-[#C8A96A]/50 focus:outline-none transition-colors"
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "14px",
                        }}
                      />
                    </div>
                  </motion.div>

                  <motion.div variants={fadeUp} className="mb-6">
                    <label
                      className="text-[#2E3A4A]/50 tracking-[0.15em] uppercase block mb-2"
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "10px",
                      }}
                    >
                      Area of Interest
                    </label>
                    <select
                      className="w-full bg-transparent border-b border-[#0A1A2F]/15 py-3 text-[#0A1A2F] focus:border-[#C8A96A]/50 focus:outline-none transition-colors appearance-none"
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "14px",
                      }}
                    >
                      <option value="">Select an area</option>
                      <option value="sovereign-capital">
                        Sovereign Capital Advisory
                      </option>
                      <option value="geopolitical">
                        Geopolitical Strategy
                      </option>
                      <option value="national-transformation">
                        National Transformation
                      </option>
                      <option value="digital-infrastructure">
                        Digital State Infrastructure
                      </option>
                      <option value="project-execution">
                        Strategic Project Execution
                      </option>
                      <option value="general">General Inquiry</option>
                    </select>
                  </motion.div>

                  <motion.div variants={fadeUp} className="mb-10">
                    <label
                      className="text-[#2E3A4A]/50 tracking-[0.15em] uppercase block mb-2"
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "10px",
                      }}
                    >
                      Brief Description
                    </label>
                    <textarea
                      rows={4}
                      className="w-full bg-transparent border-b border-[#0A1A2F]/15 py-3 text-[#0A1A2F] focus:border-[#C8A96A]/50 focus:outline-none transition-colors resize-none"
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "14px",
                        lineHeight: 1.7,
                      }}
                      placeholder="Please describe your strategic priorities and how Fort Knox Strategies may assist."
                    />
                  </motion.div>

                  <motion.div variants={fadeUp}>
                    <button
                      type="submit"
                      className="group bg-[#C8A96A] text-[#0A1A2F] px-10 py-4 tracking-[0.15em] uppercase inline-flex items-center gap-3 transition-all duration-300 hover:bg-[#D4B97A]"
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "11px",
                        fontWeight: 500,
                      }}
                    >
                      Submit Inquiry
                      <ArrowRight
                        size={14}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </button>
                  </motion.div>

                  <motion.p
                    variants={fadeUp}
                    className="text-[#2E3A4A]/30 mt-6"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "11px",
                    }}
                  >
                    All inquiries are handled with strict confidentiality.
                  </motion.p>
                </motion.form>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-5">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  visible: { transition: { staggerChildren: 0.15 } },
                }}
              >
                {/* Offices */}
                <motion.div variants={fadeUp} className="mb-12">
                  <span
                    className="text-[#C8A96A]/70 tracking-[0.2em] uppercase block mb-6"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "10px",
                    }}
                  >
                    Global Offices
                  </span>
                  <div className="grid grid-cols-2 gap-6">
                    {offices.map((office) => (
                      <div key={office.city} className="group">
                        <div className="flex items-center gap-2 mb-1">
                          <MapPin
                            size={12}
                            className="text-[#C8A96A]/70"
                            strokeWidth={1.5}
                          />
                          <span
                            className="text-[#0A1A2F]"
                            style={{
                              fontFamily: "'Inter', sans-serif",
                              fontSize: "13px",
                            }}
                          >
                            {office.city}
                          </span>
                        </div>
                        <span
                          className="text-[#2E3A4A]/40 ml-5"
                          style={{
                            fontFamily: "'Inter', sans-serif",
                            fontSize: "11px",
                          }}
                        >
                          {office.region}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Confidentiality notice */}
                <motion.div
                  variants={fadeUp}
                  className="border border-[#0A1A2F]/8 p-8"
                >
                  <span
                    className="text-[#C8A96A]/60 tracking-[0.2em] uppercase block mb-4"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "10px",
                    }}
                  >
                    Confidentiality
                  </span>
                  <p
                    className="text-[#2E3A4A]/55"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "13px",
                      lineHeight: 1.8,
                    }}
                  >
                    Fort Knox Strategies treats all government and partnership
                    inquiries with the highest level of confidentiality. Our
                    team will respond through secure communication channels
                    within 48 business hours.
                  </p>
                </motion.div>

                {/* Classification */}
                <motion.div
                  variants={fadeUp}
                  className="mt-8 border border-[#0A1A2F]/8 p-8"
                >
                  <span
                    className="text-[#C8A96A]/60 tracking-[0.2em] uppercase block mb-4"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "10px",
                    }}
                  >
                    Areas of Engagement
                  </span>
                  <div className="space-y-3">
                    {[
                      "Sovereign Capital Advisory",
                      "Geopolitical Strategy & Diplomatic Advisory",
                      "National Transformation Programs",
                      "Digital State Infrastructure",
                      "Strategic Project Execution",
                    ].map((area) => (
                      <div key={area} className="flex items-center gap-3">
                        <div className="w-1 h-1 bg-[#C8A96A]/40" />
                        <span
                          className="text-[#2E3A4A]/55"
                          style={{
                            fontFamily: "'Inter', sans-serif",
                            fontSize: "12px",
                          }}
                        >
                          {area}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
