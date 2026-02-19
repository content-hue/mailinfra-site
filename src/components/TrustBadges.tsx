import { motion } from "framer-motion";
import { Star, Mail, Users, DollarSign } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const TrustBadges = () => {
  const stats: { icon: LucideIcon; value: string; label: string; color: string }[] = [
    { icon: Star, value: "4.9/5", label: "rating (12,458 reviews)", color: "text-[#FFD700]" },
    { icon: DollarSign, value: "$45M+", label: "in cash flow preserved", color: "text-green-500" },
    { icon: Mail, value: "500M+", label: "emails delivered monthly", color: "text-[#0000FF]" },
    { icon: Users, value: "10,000+", label: "active customers", color: "text-[#7C3AED]" },
  ];

  return (
    <section className="py-6 md:py-8 bg-[#F5F3FF] border-y border-[#E5E7EB]">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-4 md:mb-6"
        >
          <p className="text-sm md:text-base font-medium text-[#7C3AED] px-4">
            TRUSTED BY 300+ OUTBOUND & LEAD GEN AGENCIES
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 lg:gap-10 max-w-4xl mx-auto">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col sm:flex-row items-center gap-1.5 md:gap-2 text-center sm:text-left"
              >
                <IconComponent className={`w-4 h-4 md:w-5 md:h-5 ${stat.color}`} />
                <div>
                  <span className="text-sm md:text-base font-bold text-[#1A1A1A] block sm:inline">{stat.value}</span>
                  <span className="text-[10px] md:text-xs text-[#6B7280] block sm:inline sm:ml-1">{stat.label}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;