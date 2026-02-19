import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-xl shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14 md:h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 md:gap-3 group">
            <Mail className={`w-6 h-6 md:w-8 md:h-8 ${isScrolled ? "text-[#0000FF]" : "text-white"} group-hover:scale-110 transition-transform`} strokeWidth={2} />
            <span className={`text-xl md:text-2xl font-bold tracking-tight ${isScrolled ? "text-[#1A1A1A]" : "text-white"}`}>
              Mailinfra
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`font-medium transition-colors text-sm lg:text-base ${
                  isScrolled 
                    ? "text-[#6B7280] hover:text-[#1A1A1A]" 
                    : "text-white/80 hover:text-white"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a href="https://calendly.com/10x-cold-email-infrastructure/15min" target="_blank" rel="noopener noreferrer">
              <Button variant="cta" size="default" className="text-sm lg:text-base">
                Start Free Trial →
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 min-h-[44px] min-w-[44px] flex items-center justify-center ${isScrolled ? "text-[#1A1A1A]" : "text-white"}`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-[#E5E7EB]"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-[#6B7280] hover:text-[#1A1A1A] font-medium py-3 px-2 transition-colors min-h-[44px] flex items-center"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-3 border-t border-[#E5E7EB]">
                <a href="https://calendly.com/10x-cold-email-infrastructure/15min" target="_blank" rel="noopener noreferrer">
                  <Button variant="cta" size="lg" className="w-full">
                    Start Free Trial →
                  </Button>
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;