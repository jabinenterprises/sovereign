import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowRight, Shield, Eye, Compass, Users } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const skylineImage =
  "https://images.unsplash.com/photo-1771350368994-9d87f0d8431f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwY2l0eSUyMHNreWxpbmUlMjBtb2Rlcm4lMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3NzI4NjE3Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

const govImage =
  "https://images.unsplash.com/photo-1763784967064-22da680a1976?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwZ292ZXJubWVudCUyMGJ1aWxkaW5nJTIwbmlnaHQlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzcyODYxNzM0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

const values = [
  {
    icon: Shield,
    title: "Sovereignty",
    desc: "Every engagement is guided by the principle that national sovereignty and self-determination must be preserved and strengthened.",
  },
  {
    icon: Eye,
    title: "Discretion",
    desc: "We operate with the confidentiality required at the highest levels of government. Trust is not earned through visibility—it is earned through results.",
  },
  {
    icon: Compass,
    title: "Strategic Clarity",
    desc: "Complex problems demand clear thinking. We cut through noise to deliver actionable frameworks that leaders can execute.",
  },
  {
    icon: Users,
    title: "Partnership",
    desc: "We do not advise from a distance. Fort Knox Strategies embeds alongside government teams, sharing in the work and accountability.",
  },
];

export function AboutPage() {
  return (
    <div className="bg-[#F5F6F8]">
      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src={govImage}
            alt="Government building"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0A1A2F]/92" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[#C8A96A]/50 tracking-[0.4em] uppercase mb-6 block"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px" }}
          >
            About Fort Knox Strategies
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
            Where Vision Meets
            <br />
            <span className="text-[#C8A96A]">National Strategy</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[#F5F6F8]/40 max-w-2xl mt-6"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", lineHeight: 1.9 }}
          >
            Fort Knox Strategies exists at the intersection of governments, capital,
            and strategy—quietly shaping the decisions that determine the trajectory
            of nations.
          </motion.p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C8A96A]/20 to-transparent" />
      </section>

      {/* Vision */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
            >
              <motion.span
                variants={fadeUp}
                className="text-[#C8A96A] tracking-[0.3em] uppercase mb-4 block"
                style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px" }}
              >
                Our Vision
              </motion.span>
              <motion.h2
                variants={fadeUp}
                className="text-[#0A1A2F] mb-8"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                  lineHeight: 1.2,
                  fontWeight: 400,
                }}
              >
                An Institution, Not a Consultancy
              </motion.h2>
              <motion.div variants={fadeUp} className="space-y-5">
                <p
                  className="text-[#2E3A4A]/70"
                  style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", lineHeight: 1.9 }}
                >
                  The name Fort Knox carries an immediate psychological signal:
                  security, wealth, and sovereign reserves. Our institution embodies
                  these principles in every engagement.
                </p>
                <p
                  className="text-[#2E3A4A]/70"
                  style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", lineHeight: 1.9 }}
                >
                  We are not a traditional consultancy. We are a sovereign advisory
                  institution that sits quietly at the intersection of governments,
                  capital, and strategy. When ministers see Fort Knox Strategies, they
                  see a strategic partner—not a vendor.
                </p>
                <p
                  className="text-[#C8A96A]/80"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "15px",
                    fontStyle: "italic",
                    lineHeight: 1.7,
                    borderLeft: "2px solid rgba(200, 169, 106, 0.3)",
                    paddingLeft: "20px",
                  }}
                >
                  "And the difference between those two perceptions is enormous."
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              className="relative"
            >
              <ImageWithFallback
                src={skylineImage}
                alt="Modern development"
                className="w-full h-[450px] object-cover grayscale-[30%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A2F]/30 to-transparent" />
              <div className="absolute -bottom-4 -right-4 w-20 h-20 border border-[#C8A96A]/15" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 lg:py-32 bg-[#0A1A2F]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
            className="text-center mb-16"
          >
            <motion.span
              variants={fadeUp}
              className="text-[#C8A96A]/50 tracking-[0.3em] uppercase mb-4 block"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px" }}
            >
              Strategic Philosophy
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="text-[#F5F6F8]"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                fontWeight: 400,
              }}
            >
              Guiding Principles
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#C8A96A]/10">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1 } },
                }}
                className="bg-[#0A1A2F] p-10 lg:p-14 group hover:bg-[#0D2240] transition-colors duration-500"
              >
                <value.icon
                  size={28}
                  className="text-[#C8A96A]/40 mb-6 group-hover:text-[#C8A96A]/60 transition-colors"
                  strokeWidth={1}
                />
                <h3
                  className="text-[#F5F6F8] mb-4"
                  style={{ fontFamily: "'Playfair Display', serif", fontSize: "20px", fontWeight: 400 }}
                >
                  {value.title}
                </h3>
                <p
                  className="text-[#F5F6F8]/35"
                  style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", lineHeight: 1.9 }}
                >
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Network */}
      <section className="py-24 lg:py-32 bg-[#F5F6F8]">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          >
            <motion.span
              variants={fadeUp}
              className="text-[#C8A96A] tracking-[0.3em] uppercase mb-4 block"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px" }}
            >
              Our Network
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="text-[#0A1A2F] mb-8"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                fontWeight: 400,
              }}
            >
              Leadership & Strategic Counsel
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-[#2E3A4A]/65 max-w-2xl mx-auto mb-6"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", lineHeight: 1.9 }}
            >
              Fort Knox Strategies draws on a global network of advisors including
              former policymakers, economic strategists, diplomats, and industry
              leaders. This network enables governments to access the insights and
              experience necessary to navigate complex global challenges while building
              long-term national strength.
            </motion.p>
            <motion.div variants={fadeUp} className="flex justify-center gap-8 mt-12 flex-wrap">
              {["Former Policymakers", "Economic Strategists", "Diplomats", "Industry Leaders"].map(
                (role) => (
                  <div
                    key={role}
                    className="border border-[#0A1A2F]/10 px-6 py-3"
                  >
                    <span
                      className="text-[#2E3A4A]/50 tracking-[0.15em] uppercase"
                      style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px" }}
                    >
                      {role}
                    </span>
                  </div>
                )
              )}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0A1A2F]">
        <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          >
            <motion.h2
              variants={fadeUp}
              className="text-[#F5F6F8] mb-6"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                fontWeight: 400,
              }}
            >
              Ready to build something that endures?
            </motion.h2>
            <motion.div variants={fadeUp}>
              <Link
                to="/contact"
                className="group bg-[#C8A96A] text-[#0A1A2F] px-10 py-4 tracking-[0.15em] uppercase inline-flex items-center gap-3 transition-all duration-300 hover:bg-[#D4B97A]"
                style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", fontWeight: 500 }}
              >
                Engage With Our Team
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
