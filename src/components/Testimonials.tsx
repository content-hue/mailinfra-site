import { motion } from "framer-motion";
import { Star, Quote, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import testimonialSarah from "@/assets/testimonial-sarah.webp";
import testimonialJames from "@/assets/testimonial-james.webp";
import testimonialMichael from "@/assets/testimonial-michael.webp";

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "Mailinfra saved our startup $15K in upfront email costs. We tested everything for 30 days, saw 99.8% deliverability, and only then committed. This model is a game changer for cash flow management.",
      author: "Sarah Mitchell",
      role: "Founder & CEO",
      company: "TechStart Solutions",
      highlight: "💰 $15K Cash Flow Preserved",
      image: testimonialSarah,
    },
    {
      quote:
        "We switched from SendGrid and saved 40% while improving deliverability by 3%. The 30-day trial let us prove ROI to our CFO before any commitment. Our inbox rate jumped from 96% to 99.9%.",
      author: "James Rodriguez",
      role: "Chief Marketing Officer",
      company: "GrowthMetrics Inc.",
      highlight: "📈 40% Cost Savings + Better Performance",
      image: testimonialJames,
    },
    {
      quote:
        "As a developer, I needed reliable infrastructure without finance approval delays. Started sending in 3 minutes, scaled to 500K emails/month. The API docs are phenomenal and support is instant.",
      author: "Michael Chen",
      role: "CTO & Co-Founder",
      company: "DataFlow Analytics",
      highlight: "⚡ 3-Minute Setup to Production",
      image: testimonialMichael,
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
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#1A1A1A] mb-3 md:mb-4 px-2">
            Real Businesses, Real Results,{" "}
            <motion.span 
              className="text-[#FFD700]"
              animate={{ textShadow: ["0 0 0px #FFD700", "0 0 20px #FFD700", "0 0 0px #FFD700"] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Zero Upfront Risk
            </motion.span>
          </h2>
          <p className="text-base md:text-lg text-[#6B7280] px-4">
            Join 300+ agencies who've preserved cash flow while scaling email infrastructure
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto mb-8 md:mb-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
              whileHover={{ y: -12, scale: 1.02 }}
              className="p-4 md:p-6 rounded-xl md:rounded-2xl bg-white border border-[#E5E7EB] shadow-card hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                <motion.img 
                  src={testimonial.image} 
                  alt={testimonial.author}
                  className="w-10 h-10 md:w-14 md:h-14 rounded-full object-cover border-2 md:border-[3px] border-[#FFD700]"
                  whileHover={{ scale: 1.1 }}
                />
                <div>
                  <p className="font-bold text-[#1A1A1A] text-xs md:text-sm">{testimonial.author}</p>
                  <p className="text-[10px] md:text-xs text-[#6B7280]">{testimonial.role}</p>
                  <p className="text-[10px] md:text-xs text-[#7C3AED] font-medium">{testimonial.company}</p>
                </div>
              </div>

              <div className="flex gap-0.5 mb-2 md:mb-3">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i + index * 0.2 }}
                  >
                    <Star className="w-3 h-3 md:w-4 md:h-4 fill-[#FFD700] text-[#FFD700]" />
                  </motion.div>
                ))}
              </div>

              <div className="relative mb-3 md:mb-4">
                <Quote className="w-5 h-5 md:w-6 md:h-6 text-[#7C3AED]/20 absolute -top-1 -left-1" />
                <p className="text-[#1A1A1A] text-xs md:text-sm leading-relaxed pl-2 md:pl-3 line-clamp-4 md:line-clamp-none">
                  "{testimonial.quote}"
                </p>
              </div>

              <motion.div 
                className="p-2 md:p-3 rounded-lg bg-[#F5F3FF] border-l-4 border-[#7C3AED]"
                whileHover={{ x: 5 }}
              >
                <p className="font-semibold text-[#7C3AED] text-xs md:text-sm">{testimonial.highlight}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <a href="https://calendly.com/10x-cold-email-infrastructure/15min" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button variant="cta" size="xl" className="group w-full">
                CLAIM YOUR 100 FREE ACCOUNTS
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-2 transition-transform" />
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;