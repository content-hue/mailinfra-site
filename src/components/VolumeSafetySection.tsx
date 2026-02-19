import { motion } from "framer-motion";
import { Shield, TrendingUp, Inbox } from "lucide-react";

const VolumeSafetySection = () => {
  const safetyCards = [
    {
      icon: Shield,
      number: "40-70",
      label: "Emails per day per mature inbox",
      description: "Safe daily volume for new accounts",
    },
    {
      icon: TrendingUp,
      number: "80-120",
      label: "Maximum for high-trust inboxes",
      description: "After 90+ days of reputation building",
    },
    {
      icon: Inbox,
      number: "Horizontal",
      label: "We scale by adding inboxes",
      description: "Not by overloading one account",
    },
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-[#F8F9FA]">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center max-w-[800px] mx-auto mb-8 md:mb-12"
        >
          <motion.p
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs md:text-sm font-bold text-[#0000FF] tracking-widest mb-2 md:mb-3"
          >
            REPUTATION-FIRST INFRASTRUCTURE
          </motion.p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#1A1A1A] mb-3 md:mb-4 px-2">
            Why We Enforce{" "}
            <span className="bg-gradient-to-r from-[#0000FF] to-[#4040FF] bg-clip-text text-transparent">
              Safe Volume Limits
            </span>
          </h2>
          <p className="text-base md:text-lg text-[#6B7280] px-4">
            Unlike providers who let you burn domains with reckless sending, we protect your infrastructure with engineered limits
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto mb-8 md:mb-10">
          {safetyCards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="p-5 md:p-6 rounded-xl md:rounded-2xl bg-white shadow-card text-center border border-[#E5E7EB] hover:border-[#7C3AED] hover:shadow-xl transition-all duration-300"
              >
                <motion.div
                  className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-[#7C3AED] to-[#5B21B6] flex items-center justify-center mx-auto mb-3 md:mb-4"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <IconComponent className="w-6 h-6 md:w-7 md:h-7 text-white" />
                </motion.div>
                <motion.p
                  className="text-3xl md:text-4xl font-extrabold text-[#FFD700] mb-1"
                  initial={{ scale: 0.5 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 200, delay: index * 0.1 }}
                >
                  {card.number}
                </motion.p>
                <p className="text-sm md:text-base font-semibold text-[#1A1A1A] mb-1">
                  {card.label}
                </p>
                <p className="text-xs md:text-sm text-[#6B7280]">
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 rounded-full bg-green-100 border border-green-200">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <p className="text-sm md:text-base font-semibold text-green-700">
              This reputation-first approach is why our clients maintain 95%+ inbox placement while others crash
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VolumeSafetySection;
