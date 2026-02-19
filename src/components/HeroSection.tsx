import { motion } from "framer-motion";
import { Check, ArrowRight, Play, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const features = [
    "No credit card required - Start immediately",
    "99.9% deliverability rate with dedicated IPs",
    "Full 30 days to test - Pay only if satisfied",
  ];

  return (
    <section className="relative min-h-screen bg-[#0000FF] overflow-hidden pt-16 md:pt-20">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 right-10 md:right-20 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 md:left-20 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-8 lg:gap-8 items-center min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-5rem)] py-8 md:py-16 lg:py-24">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-white/20 backdrop-blur-sm mb-6 md:mb-8"
            >
              <span className="text-xs md:text-sm font-semibold text-white tracking-wide">
                🚀 TRUSTED BY 300+ OUTBOUND & LEAD GEN AGENCIES
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-[1.1] mb-4 md:mb-6"
            >
              Claim Your 100 Free Google Workspace Accounts,{" "}
              <span className="inline-block px-2 md:px-3 py-0.5 md:py-1 bg-[#FFD700] text-[#1A1A1A] rounded-lg text-[0.9em]">
                Pay After 30 Days
              </span>
              —Just $3/Account
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-base md:text-lg lg:text-xl text-white/90 mb-4 max-w-[600px] mx-auto lg:mx-0 leading-relaxed"
            >
              Get 100 Google Workspace accounts free for 30 days. No credit card required. No hidden fees. Only $3/account/month after you see results.
            </motion.p>
            
            {/* Target Audience Clarification */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-sm md:text-base text-white/70 mb-6 md:mb-8 max-w-[600px] mx-auto lg:mx-0"
            >
              For outbound agencies, lead gen teams, and GTM engineers who need bulletproof cold email infrastructure—not risky volume plays.
            </motion.p>

            {/* Feature checkmarks */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col gap-3 md:gap-4 mb-8 md:mb-10"
            >
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 md:gap-3 text-white justify-center lg:justify-start"
                >
                  <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-[#FFD700] flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 md:w-4 md:h-4 text-[#1A1A1A]" />
                  </div>
                  <span className="text-sm md:text-base lg:text-lg font-medium">{feature}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-3 md:gap-4 items-center lg:items-start"
            >
              <a href="https://calendly.com/10x-cold-email-infrastructure/15min" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button variant="cta" size="xl" className="group w-full text-sm md:text-base lg:text-lg h-12 md:h-14 lg:h-16 px-6 md:px-10 lg:px-12">
                  CLAIM YOUR 100 FREE ACCOUNTS
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <a href="https://calendly.com/10x-cold-email-infrastructure/15min" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button variant="outline-light" size="lg" className="w-full h-11 md:h-12 lg:h-14">
                  <Play className="w-4 h-4" />
                  Book a Demo
                </Button>
              </a>
            </motion.div>

            {/* Trust text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="mt-4 md:mt-6 text-xs md:text-sm text-white/70"
            >
              Join 300+ agencies • 100 free accounts • Pay only after 30 days
            </motion.p>
          </motion.div>

          {/* Right Content - Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="relative lg:pl-8 mt-4 lg:mt-0"
          >
            {/* Main dashboard card */}
            <div className="relative bg-white rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden animate-float max-w-md mx-auto lg:max-w-none">
              <div className="p-4 sm:p-6 md:p-8">
                {/* Dashboard header */}
                <div className="flex items-center justify-between mb-4 md:mb-6">
                  <h3 className="text-base md:text-xl font-semibold text-[#1A1A1A]">Email Dashboard</h3>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-xs md:text-sm font-medium text-green-500">Live</span>
                  </div>
                </div>

                {/* Metrics row */}
                <div className="grid grid-cols-3 gap-2 md:gap-4 mb-4 md:mb-6">
                  <div className="p-2 md:p-4 rounded-lg md:rounded-xl bg-[#F8F9FA] text-center">
                    <p className="text-lg md:text-2xl lg:text-3xl font-bold text-[#0000FF]">2.5M</p>
                    <p className="text-[10px] md:text-xs text-[#6B7280] mt-0.5 md:mt-1">Emails Sent</p>
                    <p className="text-[10px] md:text-xs text-[#6B7280] hidden sm:block">This month</p>
                  </div>
                  <div className="p-2 md:p-4 rounded-lg md:rounded-xl bg-[#F8F9FA] text-center">
                    <p className="text-lg md:text-2xl lg:text-3xl font-bold text-green-500">99.9%</p>
                    <p className="text-[10px] md:text-xs text-[#6B7280] mt-0.5 md:mt-1">Deliverability</p>
                    <p className="text-[10px] md:text-xs text-[#6B7280] hidden sm:block">Inbox rate</p>
                  </div>
                  <div className="p-2 md:p-4 rounded-lg md:rounded-xl bg-[#F8F9FA] text-center">
                    <p className="text-lg md:text-2xl lg:text-3xl font-bold text-[#FFD700]">Day 31</p>
                    <p className="text-[10px] md:text-xs text-[#6B7280] mt-0.5 md:mt-1">Payment Due</p>
                    <p className="text-[10px] md:text-xs text-[#6B7280] hidden sm:block">Try risk-free</p>
                  </div>
                </div>

                {/* Graph placeholder */}
                <div className="h-24 sm:h-32 md:h-40 bg-gradient-to-t from-[#0000FF]/5 to-transparent rounded-lg md:rounded-xl mb-3 md:mb-4 flex items-end justify-between px-2 md:px-4 pb-2 md:pb-4">
                  {[40, 65, 45, 80, 55, 90, 70].map((height, i) => (
                    <div
                      key={i}
                      className="w-4 sm:w-6 md:w-8 bg-gradient-to-t from-[#0000FF] to-[#4040FF] rounded-t-lg transition-all duration-500"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>

                {/* Bottom stats */}
                <div className="flex justify-between items-center pt-3 md:pt-4 border-t border-[#E5E7EB]">
                  <div className="flex items-center gap-1 md:gap-2 text-green-500">
                    <TrendingUp className="w-3 h-3 md:w-4 md:h-4" />
                    <span className="text-xs md:text-sm font-medium">↑ 23% vs last month</span>
                  </div>
                  <span className="text-xs md:text-sm font-bold text-[#FFD700]">$0 spent yet</span>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="absolute -top-2 md:-top-4 -right-2 md:-right-4 px-3 md:px-5 py-2 md:py-3 rounded-xl md:rounded-2xl bg-[#FFD700] shadow-lg"
            >
              <span className="text-xs md:text-sm font-bold text-[#1A1A1A]">
                Pay After 30 Days ✨
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;