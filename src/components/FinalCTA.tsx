import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  const badges = [
    "No credit card required",
    "Setup in 5 minutes",
    "Cancel anytime",
    "24/7 support included",
    "Pay only after 30 days",
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-[#0000FF] relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-10 md:top-20 left-[5%] md:left-[10%] w-20 md:w-32 h-20 md:h-32 rounded-full bg-white/10"
          animate={{ y: [-10, 10, -10], scale: [1, 1.1, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-10 md:bottom-20 right-[15%] md:right-[25%] w-24 md:w-40 h-24 md:h-40 rounded-full bg-white/5"
          animate={{ y: [10, -10, 10], scale: [1.1, 1, 1.1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center max-w-[900px] mx-auto"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-white/20 backdrop-blur-sm mb-4 md:mb-6"
          >
            <span className="text-xs md:text-sm font-bold text-white tracking-wide">
              🚀 READY TO SCALE YOUR EMAIL INFRASTRUCTURE?
            </span>
          </motion.div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4 md:mb-5 px-2">
            Take the First Step Towards Better{" "}
            <motion.span 
              className="inline-block px-2 md:px-3 py-0.5 md:py-1 bg-[#FFD700] text-[#1A1A1A] rounded-lg"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Cash Flow
            </motion.span>{" "}
            & Email Performance
          </h2>

          <p className="text-base md:text-lg text-white/90 mb-6 md:mb-8 max-w-[700px] mx-auto leading-relaxed px-4">
            Join 300+ agencies scaling cold email infrastructure — claim your 100 free accounts today
          </p>

          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <a href="https://calendly.com/10x-cold-email-infrastructure/15min" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button variant="cta" size="xl" className="group text-sm md:text-lg px-6 md:px-12 w-full">
                CLAIM YOUR 100 FREE ACCOUNTS
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-2 transition-transform" />
              </Button>
            </a>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-x-4 md:gap-x-6 gap-y-2 md:gap-y-3 mt-6 md:mt-8">
            {badges.map((badge, index) => (
              <motion.div 
                key={index} 
                className="flex items-center gap-1.5 md:gap-2 text-white font-medium text-xs md:text-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Check className="w-3 h-3 md:w-4 md:h-4 text-[#FFD700]" />
                {badge}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;