import { motion, Variants } from "framer-motion";
import { Link } from "react-router";
import {
  Landmark,
  Globe,
  Building2,
  Cpu,
  Target,
  ArrowRight,
  ChevronRight,
  BatteryPlus,
  Scale,
  Expand,
} from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const services = [
  {
    icon: Landmark,
    title: "Sovereign Capital Advisory",
    subtitle:
      "Transforming national ambitions into bankable investment programs.",
    description:
      "Governments often possess bold visions for infrastructure and economic growth but face barriers in accessing structured global capital. Fort Knox Strategies helps governments structure investment vehicles, connect with development finance institutions, and design sovereign programs that attract international investors.",
    keyServices: [
      "Sovereign investment program design",
      "Infrastructure finance structuring",
      "Development finance partnerships",
      "Public-private partnership frameworks",
      "Investor engagement and capital roadshows",
    ],
  },
  {
    icon: Globe,
    title: "Geopolitical Strategy & Diplomatic Advisory",
    subtitle: "Navigating the strategic landscape of global power.",
    description:
      "Nations today operate within an increasingly complex geopolitical environment shaped by global powers, regional alliances, and economic competition. Fort Knox Strategies provides governments with strategic advisory support to help leaders negotiate partnerships, manage diplomatic relationships, and position their countries within evolving global power structures.",
    keyServices: [
      "Strategic diplomatic partnerships",
      "International negotiation advisory",
      "Trade corridor development strategy",
      "Political risk assessment",
      "Strategic global alliances",
    ],
  },
  {
    icon: Building2,
    title: "National Transformation Programs",
    subtitle: "Designing the long-term strategies that reshape economies.",
    description:
      "Fort Knox Strategies works with governments to design comprehensive national transformation programs across key sectors including energy, technology, agriculture, logistics, and industry. Our work focuses on long-term structural transformation rather than short-term policy changes.",
    keyServices: [
      "National development strategy",
      "Industrial policy frameworks",
      "Economic modernization programs",
      "Infrastructure master planning",
      "Innovation ecosystem development",
    ],
  },
  {
    icon: Cpu,
    title: "Digital State Infrastructure",
    subtitle: "Building the digital foundations of modern governments.",
    description:
      "Digital infrastructure has become the backbone of modern economic development. Governments must build systems that enable secure identity, financial inclusion, and efficient public services. Fort Knox Strategies supports governments in designing and implementing digital state infrastructure that strengthens governance while accelerating economic participation.",
    keyServices: [
      "National digital identity systems",
      "Government digital platforms",
      "Digital finance ecosystems",
      "AI governance and policy frameworks",
      "Smart public infrastructure",
    ],
  },
  {
    icon: Target,
    title: "Strategic Project Execution",
    subtitle: "Turning strategy into reality.",
    description:
      "Fort Knox Strategies does not stop at advisory. Our teams work alongside government institutions to ensure that national initiatives move from concept to implementation. Through structured program management, cross-ministry coordination, and investor alignment, we help governments deliver complex national programs successfully.",
    keyServices: [
      "Program management offices (PMO)",
      "Cross-ministry coordination",
      "Infrastructure delivery oversight",
      "Investor coordination",
      "Implementation monitoring",
    ],
  },
  {
    icon: BatteryPlus,
    title: "Public Finance & Fiscal Systems",
    subtitle: "Strengthening the financial architecture of governments.",
    description: `Economic transformation ultimately depends on the strength of a country’s public finance system. Governments must mobilize domestic revenue, allocate resources efficiently, and manage fiscal risks while maintaining investor confidence. Fort Knox Strategies advises ministries of finance and economic planning agencies on modernizing fiscal systems, strengthening public financial management, and designing sustainable financing frameworks for long-term development.\n\nDrawing on decades of experience working with governments and development institutions across multiple regions, we help countries build fiscal systems that support growth while maintaining macroeconomic stability.`,
    keyServices: [
      "Public financial management reform",
      "Fiscal decentralization and intergovernmental transfers",
      "Revenue mobilization strategy",
      "Public investment management (PIM) systems",
      "Fiscal risk and debt sustainability frameworks",
    ],
  },
  {
    icon: Scale,
    title: "Institutional Execution & Government Operations",
    subtitle: "Building institutions that can deliver at scale.",
    description:
      "Even the strongest national strategies can fail without capable institutions to execute them. Fort Knox Strategies works with governments to strengthen institutional structures, improve operational efficiency, and build delivery systems capable of managing complex national initiatives.\n\nWe help governments design the governance structures, coordination mechanisms, and operational systems required to translate national strategy into measurable results.",
    keyServices: [
      "Institutional reform and organizational design",
      "Government delivery units",
      "Operational systems for large public programs",
      "Capacity building for ministries and agencies",
      "Performance monitoring and accountability systems",
    ],
  },
  {
    icon: Expand,
    title: "Strategic Market Entry & Global Expansion",
    subtitle:
      "Helping businesses navigate complex markets and unlock new growth.",
    description:
      "Companies expanding into emerging markets often face complex regulatory environments, fragmented capital markets, and institutional barriers that slow growth. Fort Knox Strategies helps businesses navigate these challenges by providing strategic guidance on market entry, investment structuring, and partnerships with governments and local institutions.\n\nOur work focuses on enabling companies to scale responsibly and successfully in high-growth markets by aligning business strategy with national development priorities and local regulatory environments.\n\nFort Knox Strategies works with both international firms entering emerging markets and regional companies seeking to expand globally.",
    keyServices: [
      "Market entry strategy for emerging economies",
      "Investment structuring and cross-border expansion",
      "Strategic partnerships with governments and institutions",
      "Regulatory navigation and stakeholder engagement",
      "Operational structuring for regional growth",
    ],
  },
];

export function ServicesPage() {
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
            className="text-[#C8A96A]/60 tracking-[0] md:uppercase mb-6 block max-w-3xl"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "14px",
              fontWeight: "600",
            }}
          >
            Fort Knox Strategies is a sovereign advisory firm operating at the
            intersection of capital, geopolitics, and national transformation.
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[#F5F6F8] max-w-3xl"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1rem, 4vw, 1.5rem)",
              lineHeight: 0.5,
              fontWeight: 400,
            }}
          >
            What We Do
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
            Eight interconnected advisory pillars supporting governments and
            organizations in designing strategy, mobilizing capital, and
            executing transformational national and economic initiatives.
          </motion.p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C8A96A]/20 to-transparent" />
      </section>

      {/* Services */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="space-y-24">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-start ${
                  i > 0 ? "pt-24 border-t border-[#0A1A2F]/8" : ""
                }`}
              >
                {/* Number + Icon */}
                <div className="lg:col-span-2">
                  <motion.div variants={fadeUp}>
                    <span
                      className="text-[#C8A96A]/70 block mb-4"
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: "48px",
                        fontWeight: 400,
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <service.icon
                      size={28}
                      className="text-[#C8A96A]/60"
                      strokeWidth={1}
                    />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="lg:col-span-6">
                  <motion.h3
                    variants={fadeUp}
                    className="text-[#0A1A2F] mb-3"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "24px",
                      fontWeight: 400,
                    }}
                  >
                    {service.title}
                  </motion.h3>
                  <motion.p
                    variants={fadeUp}
                    className="text-[#C8A96A] mb-6"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "13px",
                      fontStyle: "italic",
                    }}
                  >
                    {service.subtitle}
                  </motion.p>
                  <motion.p
                    variants={fadeUp}
                    className="text-[#2E3A4A]/65 whitespace-pre-line"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "14px",
                      lineHeight: 1.9,
                    }}
                  >
                    {service.description}
                  </motion.p>
                </div>

                {/* Key Services */}
                <div className="lg:col-span-4">
                  <motion.div variants={fadeUp}>
                    <span
                      className="text-[#C8A96A]/70 tracking-[0.2em] uppercase block mb-5"
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "10px",
                      }}
                    >
                      Key Services
                    </span>
                    <div className="space-y-3">
                      {service.keyServices.map((ks) => (
                        <div key={ks} className="flex items-start gap-3 group">
                          <ChevronRight
                            size={12}
                            className="text-[#C8A96A]/70 mt-1 shrink-0 group-hover:text-[#C8A96A]/60 transition-colors"
                          />
                          <span
                            className="text-[#2E3A4A]/55 group-hover:text-[#2E3A4A]/80 transition-colors"
                            style={{
                              fontFamily: "'Inter', sans-serif",
                              fontSize: "13px",
                              lineHeight: 1.6,
                            }}
                          >
                            {ks}
                          </span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
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
              Ready to discuss your nation's priorities?
            </motion.h2>
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
