import { motion } from "framer-motion";
import { CreditCard, BarChart3, Clock } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const PainPoints = () => {
  const painPoints: { icon: LucideIcon; title: string; description: string }[] = [
    {
      icon: CreditCard,
      title: "Upfront Payment Pressure",
      description: "Most email services demand payment before you send a single email. This strains your working capital and limits growth.",
    },
    {
      icon: BarChart3,
      title: "No Proof of Performance",
      description: "You're forced to pay without knowing if deliverability rates, inbox placement, or ROI will meet your needs.",
    },
    {
      icon: Clock,
      title: "Cash Flow Struggles",
      description: "Every dollar tied up in email infrastructure is a dollar not invested in growth, hiring, or inventory.",
    },
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center max-w-[800px] mx-auto mb-8 md:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#1A1A1A] mb-4 leading-tight px-2">
            Tired of Email Services Draining Your{" "}
            <span className="relative inline-block">
              Cash Flow
              <motion.svg 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute -bottom-1 md:-bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none"
              >
                <path d="M2 8C50 2 150 2 198 8" stroke="#FFD700" strokeWidth="4" strokeLinecap="round"/>
              </motion.svg>
            </span>{" "}
            Before You See Results?
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto mb-8 md:mb-10">
          {painPoints.map((point, index) => {
            const IconComponent = point.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
                whileHover={{ y: -12, scale: 1.02 }}
                className="group p-5 md:p-6 rounded-xl md:rounded-2xl bg-white border border-[#E5E7EB] text-center shadow-card hover:border-[#0000FF] hover:shadow-xl transition-colors duration-300"
              >
                <motion.div 
                  className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-3 md:mb-4"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <IconComponent className="w-6 h-6 md:w-7 md:h-7 text-red-500" />
                </motion.div>
                <h3 className="text-base md:text-lg font-bold text-[#1A1A1A] mb-2 md:mb-3">
                  {point.title}
                </h3>
                <p className="text-[#6B7280] text-sm leading-relaxed">
                  {point.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center px-4"
        >
          <p className="text-base md:text-lg lg:text-xl font-bold text-[#1A1A1A]">
            What if you could{" "}
            <span className="text-[#0000FF]">send first, validate performance, THEN pay?</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PainPoints;