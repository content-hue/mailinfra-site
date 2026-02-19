import { motion } from "framer-motion";
import { Mail, BarChart3, Calendar, ShieldCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const SolutionSection = () => {
  const features: { icon: LucideIcon; title: string; description: string }[] = [
    {
      icon: Mail,
      title: "Start Sending Instantly",
      description: "No credit card. No setup fees. Begin sending emails in 5 minutes with full API access and SMTP relay.",
    },
    {
      icon: BarChart3,
      title: "Test Everything for 30 Days",
      description: "Full access to deliverability analytics, A/B testing, segmentation, and dedicated IPs. Prove ROI first.",
    },
    {
      icon: Calendar,
      title: "Pay After You're Satisfied",
      description: "Invoice arrives on day 31. If you're not satisfied, don't pay. Simple as that.",
    },
    {
      icon: ShieldCheck,
      title: "Safe Volume Scaling",
      description: "Built-in safeguards that protect your domain reputation while growing send capacity. Scale horizontally across inboxes, not vertically to dangerous limits.",
    },
  ];

  return (
    <section id="features" className="py-12 md:py-16 lg:py-20 bg-[#F5F3FF]">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center max-w-[900px] mx-auto mb-8 md:mb-12"
        >
          <motion.p 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs md:text-sm font-bold text-[#0000FF] tracking-widest mb-2 md:mb-3"
          >
            THE MAILINFRA DIFFERENCE
          </motion.p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#1A1A1A] mb-3 md:mb-4 leading-tight px-2">
            Mailinfra Changes the Game:{" "}
            <span className="bg-gradient-to-r from-[#0000FF] to-[#4040FF] bg-clip-text text-transparent">Performance First, Payment Later</span>
          </h2>
          <p className="text-base md:text-lg text-[#6B7280] px-4">
            The only email infrastructure built for modern businesses that need flexibility and proof before payment
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                whileHover={{ y: -16, scale: 1.03 }}
                className="group p-4 md:p-6 rounded-xl md:rounded-2xl bg-white shadow-card text-center hover:shadow-xl transition-shadow duration-300"
              >
                <motion.div 
                  className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-[#7C3AED] to-[#5B21B6] flex items-center justify-center mx-auto mb-3 md:mb-5"
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <IconComponent className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </motion.div>
                <h3 className="text-sm md:text-lg font-bold text-[#1A1A1A] mb-1 md:mb-2">
                  {feature.title}
                </h3>
                <p className="text-[#6B7280] text-xs md:text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;