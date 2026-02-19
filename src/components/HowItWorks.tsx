import { motion } from "framer-motion";
import { UserPlus, Settings, Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { LucideIcon } from "lucide-react";

const HowItWorks = () => {
  const steps: { icon: LucideIcon; step: string; time: string; title: string; description: string }[] = [
    {
      icon: UserPlus,
      step: "1",
      time: "2 Minutes",
      title: "Connect Your Lists",
      description: "Import your verified prospect data or integrate with your CRM. We handle infrastructure—you bring the targets.",
    },
    {
      icon: Settings,
      step: "2",
      time: "5 Minutes",
      title: "Configure & Send",
      description: "Connect via API or SMTP. Set up your sending infrastructure. Start campaigns with safe volume limits.",
    },
    {
      icon: Calendar,
      step: "3",
      time: "Day 31",
      title: "Pay Only if Happy",
      description: "Review your performance dashboard. Pay only for what you used. Cancel anytime, no questions.",
    },
  ];

  return (
    <section id="how-it-works" className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-[800px] mx-auto mb-10 md:mb-14"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#1A1A1A] mb-3 md:mb-4 px-2">
            From Zero to Sending in 3 Simple Steps
          </h2>
          <p className="text-base md:text-lg text-[#6B7280] px-4">
            Get started in minutes, not days. No credit card, no commitments.
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connection line - desktop only */}
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block absolute top-14 left-[15%] right-[15%] h-1 bg-gradient-to-r from-[#7C3AED] to-[#0000FF] rounded-full origin-left" 
          />

          <div className="grid sm:grid-cols-3 gap-8 sm:gap-4 lg:gap-4">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: index * 0.2, ease: [0.22, 1, 0.36, 1] }}
                  className="text-center relative"
                >
                  <motion.div 
                    className="relative inline-block mb-4 md:mb-5"
                    whileHover={{ scale: 1.08 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <motion.div 
                      className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full bg-gradient-to-br from-[#7C3AED] to-[#5B21B6] flex flex-col items-center justify-center shadow-lg"
                      animate={{ boxShadow: ["0 0 0 0 rgba(124, 58, 237, 0.4)", "0 0 0 20px rgba(124, 58, 237, 0)", "0 0 0 0 rgba(124, 58, 237, 0)"] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                    >
                      <IconComponent className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white mb-0.5" />
                      <span className="text-lg sm:text-xl md:text-2xl font-extrabold text-white">{step.step}</span>
                    </motion.div>
                    
                    <motion.div 
                      initial={{ scale: 0, rotate: -20 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.2, type: "spring" }}
                      className="absolute -top-1 -right-1 md:-top-2 md:-right-2 px-2 md:px-2.5 py-0.5 md:py-1 rounded-lg bg-[#FFD700] text-[10px] md:text-xs font-bold text-[#1A1A1A] shadow-md"
                    >
                      {step.time}
                    </motion.div>
                  </motion.div>

                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#1A1A1A] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-[#6B7280] text-sm max-w-[280px] mx-auto leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-10 md:mt-12"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <a href="https://calendly.com/10x-cold-email-infrastructure/15min" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button variant="cta" size="xl" className="group w-full">
                GET STARTED - NO PAYMENT NEEDED
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-2 transition-transform" />
              </Button>
            </a>
          </motion.div>
          <p className="mt-3 text-xs md:text-sm text-[#6B7280]">
            ✓ No credit card • ✓ Setup in 5 minutes • ✓ Full features unlocked
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;