import { motion } from "framer-motion";
import { Check, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const PricingSection = () => {
  const features = [
    "Add Google Workspace accounts on-demand at $3/each",
    "Domain pool expansion as you grow",
    "No phone verification required",
    "Dedicated IP addresses included free",
    "Advanced analytics & deliverability dashboard",
    "24/7 priority support via chat, email, phone",
    "99.9% deliverability SLA guarantee",
    "Custom domain setup & authentication",
    "Full API & SMTP relay access",
    "Real-time monitoring & alerts",
  ];

  const paymentTimeline = [
    { day: "Day 1-30", text: "100 accounts free — full features, safe volume limits" },
    { day: "Day 31", text: "Invoice at $3/account/month for continued usage" },
    { day: "Day 45", text: "Payment due (NET 15 terms)" },
    { day: "Not satisfied?", text: "Don't pay, no penalties" },
  ];

  return (
    <section id="pricing" className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-[800px] mx-auto mb-8 md:mb-12"
        >
          <motion.p 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs md:text-sm font-bold text-[#0000FF] tracking-widest mb-2 md:mb-3"
          >
            TRANSPARENT PRICING
          </motion.p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#1A1A1A] mb-3 md:mb-4 px-2">
            Simple, Transparent Pricing —{" "}
            <span className="bg-gradient-to-r from-[#0000FF] to-[#4040FF] bg-clip-text text-transparent">Pay Only After You're Convinced</span>
          </h2>
          <p className="text-base md:text-lg text-[#6B7280] px-4">
            No tricks. No hidden fees. Just honest pricing you can trust.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-[550px] mx-auto"
        >
          <motion.div 
            className="relative p-5 md:p-8 rounded-2xl md:rounded-3xl bg-white border-2 md:border-[3px] border-[#7C3AED] shadow-xl"
            whileHover={{ boxShadow: "0 25px 50px -12px rgba(124, 58, 237, 0.25)" }}
          >
            {/* Popular Badge */}
            <motion.div 
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, type: "spring" }}
              className="absolute -top-3 md:-top-4 left-1/2 -translate-x-1/2"
            >
              <div className="px-3 md:px-5 py-1 md:py-1.5 rounded-full bg-[#FFD700] text-[#1A1A1A] text-xs md:text-sm font-bold flex items-center gap-1 md:gap-2 shadow-lg">
                <Sparkles className="w-3 h-3 md:w-4 md:h-4" />
                🔥 MOST POPULAR
              </div>
            </motion.div>

            {/* Pricing Header */}
            <div className="text-center pb-4 md:pb-6 mb-4 md:mb-6 border-b-2 border-[#E5E7EB]">
              <p className="text-xs md:text-sm font-semibold text-[#6B7280] mb-1 md:mb-2">First 30 Days</p>
              <motion.p 
                className="text-5xl md:text-6xl font-extrabold text-[#7C3AED] leading-none mb-1 md:mb-2"
                initial={{ scale: 0.5 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                $0
              </motion.p>
              <p className="text-sm md:text-base text-[#6B7280] mb-2 md:mb-3">Then pay only for what you use</p>
              <p className="text-base md:text-lg font-semibold text-[#1A1A1A] mb-2">
                Then just $3/account/month — pay for what you use
              </p>
              <div className="inline-block px-2 md:px-3 py-1 md:py-1.5 rounded-lg bg-green-100 text-green-600 text-xs md:text-sm font-medium">
                Volume discounts automatically applied at 1M+
              </div>
            </div>

            {/* Features List */}
            <ul className="grid gap-2 md:gap-3 mb-4 md:mb-6">
              {features.map((feature, index) => (
                <motion.li 
                  key={index} 
                  className="flex items-start gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5 md:w-3 md:h-3 text-green-600" />
                  </div>
                  <span className="text-[#1A1A1A] text-xs md:text-sm font-medium">{feature}</span>
                </motion.li>
              ))}
            </ul>

            {/* Payment Terms Box */}
            <motion.div 
              className="p-3 md:p-5 rounded-lg md:rounded-xl bg-[#F5F3FF] border-l-4 border-[#7C3AED] mb-4 md:mb-6"
              whileHover={{ x: 5 }}
            >
              <h4 className="text-sm md:text-base font-bold text-[#1A1A1A] mb-2 md:mb-3">How Payment Works</h4>
              <ul className="space-y-1.5 md:space-y-2">
                {paymentTimeline.map((item, index) => (
                  <li key={index} className="text-[#6B7280] text-xs md:text-sm">
                    <span className="font-semibold text-[#1A1A1A]">{item.day}:</span> {item.text}
                  </li>
                ))}
              </ul>
              <p className="mt-2 md:mt-3 text-xs md:text-sm font-semibold text-green-600">
                💚 Your satisfaction is guaranteed - we earn your payment
              </p>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <a href="https://calendly.com/10x-cold-email-infrastructure/15min" target="_blank" rel="noopener noreferrer">
                <Button variant="cta" size="xl" className="w-full group text-xs md:text-base">
                  CLAIM YOUR 100 FREE ACCOUNTS NOW
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-2 transition-transform" />
                </Button>
              </a>
            </motion.div>

            {/* Trust Text */}
            <p className="text-center text-xs md:text-sm text-[#6B7280] mt-4 md:mt-5">
              ✓ No credit card required • ✓ Cancel anytime • ✓ 30-day money-back guarantee
            </p>
            <p className="text-center text-[10px] md:text-xs text-[#6B7280] mt-1">
              Join 300+ agencies already scaling with Mailinfra
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;