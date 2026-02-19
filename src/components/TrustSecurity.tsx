import { motion } from "framer-motion";
import { CreditCard, Calendar, ShieldCheck, XCircle } from "lucide-react";

const TrustSecurity = () => {
  const badges = [
    {
      icon: CreditCard,
      title: "Zero Upfront",
      description: "No payment required to start",
    },
    {
      icon: Calendar,
      title: "Full 30-Day Trial",
      description: "Test everything risk-free",
    },
    {
      icon: ShieldCheck,
      title: "99.9% Deliverability",
      description: "Guaranteed inbox placement",
    },
    {
      icon: XCircle,
      title: "Cancel Anytime",
      description: "No contracts or commitments",
    },
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-8 md:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 md:mb-4 px-2">
            Zero Risk. Zero Commitment.{" "}
            <span className="text-highlight">Zero Upfront Cost.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 max-w-5xl mx-auto mb-8 md:mb-12">
          {badges.map((badge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-4 md:p-6 rounded-lg md:rounded-xl bg-muted"
            >
              <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-highlight/10 flex items-center justify-center mx-auto mb-2 md:mb-4">
                <badge.icon className="w-5 h-5 md:w-7 md:h-7 text-highlight" />
              </div>
              <h3 className="font-bold text-foreground text-sm md:text-base mb-0.5 md:mb-1">{badge.title}</h3>
              <p className="text-xs md:text-sm text-muted-foreground">
                {badge.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSecurity;
