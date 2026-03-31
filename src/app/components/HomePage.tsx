import { Link } from "react-router";
import { motion, Variants } from "framer-motion";
import {
  Shield,
  Globe,
  Building2,
  Cpu,
  Target,
  ArrowRight,
  ChevronRight,
  Landmark,
  TrendingUp,
  Network,
  Briefcase,
  Banknote,
  Settings,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
// import {pic} from "@/assets/aZndAMFoBIGEgnjo_AdobeStock_1686125010.jpeg"

const heroImage =
  "https://images.unsplash.com/photo-1626695436755-3e288720849c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmNpZW50JTIwQWZyaWNhJTIwdHJhZGUlMjByb3V0ZXMlMjBtYXAlMjBoaXN0b3JpY2FsfGVufDF8fHx8MTc3Mjg2MjY3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

const institutionalImage =
  "https://images.unsplash.com/photo-1740382242940-5693432d977a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXBpdG9sJTIwYnVpbGRpbmclMjBjb2x1bW5zJTIwaW5zdGl0dXRpb25hbHxlbnwxfHx8fDE3NzI4NjE3MzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

const infrastructureImage =
  "https://images.unsplash.com/photo-1762397884065-79e240bbbfb2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmZyYXN0cnVjdHVyZSUyMGJyaWRnZSUyMG1vZGVybiUyMGNvbnN0cnVjdGlvbnxlbnwxfHx8fDE3NzI4NjE3MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

const digitalImage =
  "https://images.unsplash.com/photo-1737505599162-d9932323a889?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbmV0d29yayUyMHRlY2hub2xvZ3klMjBhYnN0cmFjdCUyMGRhcmt8ZW58MXx8fHwxNzcyODYxNzM3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

const services = [
  {
    icon: Landmark,
    title: "Sovereign Capital Advisory",
    subtitle:
      "Transforming national ambitions into bankable investment programs.",
    desc: "We help governments structure investment vehicles, connect with development finance institutions, and design sovereign programs that attract international investors.",
  },
  {
    icon: Globe,
    title: "Geopolitical Strategy",
    subtitle: "Navigating the strategic landscape of global power.",
    desc: "Strategic advisory to help leaders negotiate partnerships, manage diplomatic relationships, and position countries within evolving global power structures.",
  },
  {
    icon: Building2,
    title: "National Transformation",
    subtitle: "Designing long-term strategies that reshape economies.",
    desc: "Comprehensive national transformation programs across energy, technology, agriculture, logistics, and industry sectors.",
  },
  {
    icon: Cpu,
    title: "Digital State Infrastructure",
    subtitle: "Building the digital foundations of modern governments.",
    desc: "Designing and implementing digital state infrastructure that strengthens governance while accelerating economic participation.",
  },
  {
    icon: Target,
    title: "Strategic Project Execution",
    subtitle: "Turning strategy into reality.",
    desc: "Structured program management, cross-ministry coordination, and investor alignment to deliver complex national programs.",
  },
  {
    icon: Banknote,
    title: "Public Finance & Fiscal Systems",
    subtitle: "Strengthening the financial architecture of governments.",
    desc: "Advising ministries of finance on modernizing fiscal systems, strengthening public financial management, and designing sustainable financing frameworks for long-term development.",
  },
  {
    icon: Settings,
    title: "Institutional Execution & Government Operations",
    subtitle: "Building institutions that can deliver at scale.",
    desc: "Even the strongest national strategies can fail without capable institutions to execute them. Fort Knox Strategies works with governments to strengthen institutional structures, improve operational efficiency, and build delivery systems capable of managing complex national initiatives.",
  },
  {
    icon: TrendingUp,
    title: "Strategic Market Entry & Global Expansion",
    subtitle:
      "Helping businesses navigate complex markets and unlock new growth.",
    desc: "Strategic guidance on market entry, investment structuring, and partnerships with governments and local institutions in high-growth emerging markets.",
  },
];

const phases = [
  {
    number: "01",
    title: "Strategy",
    desc: "Defining the national vision and long-term objectives.",
    icon: Shield,
  },
  {
    number: "02",
    title: "Structuring",
    desc: "Designing bankable programs and investment frameworks.",
    icon: Briefcase,
  },
  {
    number: "03",
    title: "Capital",
    desc: "Connecting governments with global investors and development partners.",
    icon: TrendingUp,
  },
  {
    number: "04",
    title: "Execution",
    desc: "Supporting delivery and ensuring measurable impact.",
    icon: Network,
  },
];

const impactItems = [
  "Unlock billions in global investment",
  "Accelerate national infrastructure programs",
  "Modernize economic systems",
  "Build digital state capabilities",
  "Position countries within the evolving global economy",
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export function HomePage() {
  return (
    <div className="bg-[#F5F6F8]">
      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src={heroImage}
            alt="Strategic global map"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1A2F]/95 via-[#0A1A2F]/80 to-[#0A1A2F]/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A2F] via-transparent to-[#0A1A2F]/40" />
        </div>

        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#C8A96A 1px, transparent 1px), linear-gradient(90deg, #C8A96A 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.2 } },
            }}
            className="max-w-3xl"
          >
            {/* Classification tag */}
            <motion.div variants={fadeUp} className="mb-8">
              <span
                className="text-[#C8A96A]/50 tracking-[0.4em] uppercase"
                style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px" }}
              >
                Sovereign Advisory · Strategic Capital · National Transformation
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-[#F5F6F8] mb-6"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                lineHeight: 1.1,
                fontWeight: 400,
              }}
            >
              Advising Governments.
              <br />
              <span className="text-[#C8A96A]">Unlocking Nations.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-[#F5F6F8]/50 max-w-2xl mb-10"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "15px",
                lineHeight: 1.9,
              }}
            >
              Fort Knox Strategies partners with governments and leaders to
              unlock global capital, navigate geopolitics, and build the
              infrastructure that powers national transformation.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <Link
                to="/services"
                className="group bg-[#C8A96A] text-[#0A1A2F] px-8 py-3.5 tracking-[0.15em] uppercase inline-flex items-center gap-2 transition-all duration-300 hover:bg-[#D4B97A]"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "11px",
                  fontWeight: 500,
                }}
              >
                Explore Our Work
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <Link
                to="/contact"
                className="border border-[#F5F6F8]/20 text-[#F5F6F8]/70 px-8 py-3.5 tracking-[0.15em] uppercase inline-flex items-center gap-2 transition-all duration-300 hover:border-[#C8A96A]/40 hover:text-[#C8A96A]"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "11px",
                  fontWeight: 400,
                }}
              >
                Engage With Our Team
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom decorative line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C8A96A]/30 to-transparent" />
      </section>

      {/* ===== PHILOSOPHY ===== */}
      <section className="py-24 lg:py-32 bg-[#F5F6F8]">
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
                Our Philosophy
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
                The Fort Knox Philosophy
              </motion.h2>
              <motion.div variants={fadeUp} className="space-y-5">
                {[
                  "The challenges governments face today are complex. Economic transformation. Infrastructure development. Geopolitical competition. Digital sovereignty.",
                  "These challenges cannot be solved with isolated policies or fragmented initiatives. They require coordinated strategy, access to global capital, and disciplined execution.",
                  "Fort Knox Strategies works shoulder-to-shoulder with governments to transform political vision into practical national programs that deliver measurable impact.",
                ].map((text, i) => (
                  <p
                    key={i}
                    className="text-[#2E3A4A]/70"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "14px",
                      lineHeight: 1.9,
                    }}
                  >
                    {text}
                  </p>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              className="relative"
            >
              <div className="relative overflow-hidden">
                <ImageWithFallback
                  src={institutionalImage}
                  alt="Institutional architecture"
                  className="w-full h-[400px] lg:h-[500px] object-cover grayscale-[30%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A2F]/40 to-transparent" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border border-[#C8A96A]/20" />
              <div className="absolute -top-4 -right-4 w-16 h-16 border border-[#C8A96A]/15" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="py-24 lg:py-32 bg-[#0A1A2F]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
            className="mb-16"
          >
            <motion.span
              variants={fadeUp}
              className="text-[#C8A96A]/50 tracking-[0.3em] uppercase mb-4 block"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px" }}
            >
              What We Do
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="text-[#F5F6F8]"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                lineHeight: 1.2,
                fontWeight: 400,
              }}
            >
              Strategic Advisory Pillars
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#C8A96A]/10">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, delay: i * 0.1 },
                  },
                }}
                className="bg-[#0A1A2F] p-8 lg:p-10 group hover:bg-[#0D2240] transition-colors duration-500"
              >
                <service.icon
                  size={28}
                  className="text-[#C8A96A]/40 mb-6 group-hover:text-[#C8A96A]/70 transition-colors duration-500"
                  strokeWidth={1}
                />
                <h3
                  className="text-[#F5F6F8] mb-2"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "18px",
                    fontWeight: 400,
                  }}
                >
                  {service.title}
                </h3>
                <p
                  className="text-[#C8A96A]/60 mb-4"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "12px",
                    fontStyle: "italic",
                  }}
                >
                  {service.subtitle}
                </p>
                <p
                  className="text-[#F5F6F8]/35"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "13px",
                    lineHeight: 1.8,
                  }}
                >
                  {service.desc}
                </p>
                <Link
                  to="/services"
                  className="mt-6 inline-flex items-center gap-2 text-[#C8A96A]/40 group-hover:text-[#C8A96A]/70 transition-colors"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "10px",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                  }}
                >
                  Learn More <ChevronRight size={12} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== APPROACH ===== */}
      <section className="py-24 lg:py-32 bg-[#F5F6F8]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
            className="text-center mb-20"
          >
            <motion.span
              variants={fadeUp}
              className="text-[#C8A96A] tracking-[0.3em] uppercase mb-4 block"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px" }}
            >
              Our Approach
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="text-[#0A1A2F]"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                lineHeight: 1.2,
                fontWeight: 400,
              }}
            >
              A Disciplined Four-Phase Framework
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {phases.map((phase, i) => (
              <motion.div
                key={phase.number}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, delay: i * 0.15 },
                  },
                }}
                className="relative"
              >
                <div className="border-t-2 border-[#C8A96A]/30 pt-8">
                  <span
                    className="text-[#C8A96A]/30 block mb-4"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "36px",
                      fontWeight: 400,
                    }}
                  >
                    {phase.number}
                  </span>
                  <phase.icon
                    size={23}
                    className="text-[#C8A96A]/50 mb-4"
                    strokeWidth={1.5}
                  />
                  <h3
                    className="text-[#0A1A2F] mb-3"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "20px",
                      fontWeight: 400,
                    }}
                  >
                    {phase.title}
                  </h3>
                  <p
                    className="text-[#2E3A4A]/60"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "13px",
                      lineHeight: 1.8,
                    }}
                  >
                    {phase.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== IMPACT ===== */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src={infrastructureImage}
            alt="National infrastructure"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0A1A2F]/90" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
            >
              <motion.span
                variants={fadeUp}
                className="text-[#C8A96A]/50 tracking-[0.3em] uppercase mb-4 block"
                style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px" }}
              >
                Our Impact
              </motion.span>
              <motion.h2
                variants={fadeUp}
                className="text-[#F5F6F8] mb-6"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                  lineHeight: 1.2,
                  fontWeight: 400,
                }}
              >
                Shaping the Future of Nations
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="text-[#F5F6F8]/40 mb-2"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "14px",
                  lineHeight: 1.8,
                }}
              >
                Fort Knox Strategies supports governments seeking to:
              </motion.p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
              className="space-y-4"
            >
              {impactItems.map((item) => (
                <motion.div
                  key={item}
                  variants={fadeUp}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-1.5 h-1.5 bg-[#C8A96A]/50 mt-2 shrink-0" />
                  <p
                    className="text-[#F5F6F8]/60 group-hover:text-[#F5F6F8]/80 transition-colors"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "14px",
                      lineHeight: 1.7,
                    }}
                  >
                    {item}
                  </p>
                </motion.div>
              ))}

              <div className="pt-6 border-t border-[#C8A96A]/10 mt-8">
                <p
                  className="text-[#C8A96A]/70"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "16px",
                    fontStyle: "italic",
                    lineHeight: 1.6,
                  }}
                >
                  "Nations succeed when vision, capital, and execution align."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== LEADERSHIP ===== */}
      <section className="py-24 lg:py-32 bg-[#F5F6F8]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              className="relative order-2 lg:order-1"
            >
              <ImageWithFallback
                src="/images/aZndAMFoBIGEgnjo_AdobeStock_1686125010.jpeg"
                alt="Strategic counsel"
                className="w-full h-[400px] object-cover grayscale-[40%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A2F]/30 to-transparent" />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
              className="order-1 lg:order-2"
            >
              <motion.span
                variants={fadeUp}
                className="text-[#C8A96A] tracking-[0.3em] uppercase mb-4 block"
                style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px" }}
              >
                Leadership & Strategic Counsel
              </motion.span>
              <motion.h2
                variants={fadeUp}
                className="text-[#0A1A2F] mb-6"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                  lineHeight: 1.2,
                  fontWeight: 400,
                }}
              >
                A Global Network of Advisors
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="text-[#2E3A4A]/65 mb-6"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "14px",
                  lineHeight: 1.9,
                }}
              >
                Fort Knox Strategies draws on a global network of advisors
                including former policymakers, economic strategists, diplomats,
                and industry leaders.
              </motion.p>
              <motion.p
                variants={fadeUp}
                className="text-[#2E3A4A]/65"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "14px",
                  lineHeight: 1.9,
                }}
              >
                This network enables governments to access the insights and
                experience necessary to navigate complex global challenges while
                building long-term national strength.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-24 lg:py-32 bg-[#0A1A2F] relative overflow-hidden">
        {/* Subtle pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(#C8A96A 1px, transparent 1px), linear-gradient(90deg, #C8A96A 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          >
            <motion.span
              variants={fadeUp}
              className="text-[#C8A96A]/50 tracking-[0.3em] uppercase mb-6 block"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px" }}
            >
              Begin
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="text-[#F5F6F8] mb-6"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                lineHeight: 1.2,
                fontWeight: 400,
              }}
            >
              Engage With Fort Knox Strategies
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-[#F5F6F8]/40 mb-10"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "14px",
                lineHeight: 1.9,
              }}
            >
              Governments today face decisions that will shape their economic
              future for decades. Fort Knox Strategies stands ready to support
              leaders committed to bold transformation and responsible national
              development.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link
                to="/contact"
                className="group bg-[#C8A96A] text-[#0A1A2F] px-10 py-4 tracking-[0.15em] uppercase inline-flex items-center gap-3 transition-all duration-300 hover:bg-[#D4B97A]"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "11px",
                  fontWeight: 500,
                }}
              >
                Begin a Strategic Dialogue
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
