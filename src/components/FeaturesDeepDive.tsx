import { motion } from "framer-motion";
import { Check, Shield, Zap, Headphones } from "lucide-react";

const FeaturesDeepDive = () => {
  const featureGroups = [
    {
      icon: Shield,
      title: "Enterprise Infrastructure",
      features: [
        "Dedicated IP addresses included",
        "Custom domain authentication (DKIM, SPF, DMARC)",
        "Automatic IP warm-up",
        "ISP reputation management",
      ],
    },
    {
      icon: Zap,
      title: "Security & Compliance",
      features: [
        "SOC 2 Type II certified",
        "GDPR & CCPA compliant",
        "End-to-end encryption",
        "Two-factor authentication",
      ],
    },
    {
      icon: Headphones,
      title: "Support & Success",
      features: [
        "24/7 priority support",
        "Dedicated account manager",
        "Deliverability consulting",
        "Migration assistance",
      ],
    },
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-[800px] mx-auto mb-10 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-4 md:mb-6 px-2">
            Everything You Need to{" "}
            <span className="text-primary">Scale with Confidence</span>
          </h2>
          <p className="text-base md:text-xl text-muted-foreground px-4">
            Enterprise-grade features available from day one
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 max-w-5xl mx-auto">
          {featureGroups.map((group, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-5 md:p-8 rounded-xl md:rounded-2xl bg-muted"
            >
              <div className="w-10 h-10 md:w-14 md:h-14 rounded-lg md:rounded-xl bg-primary/10 flex items-center justify-center mb-4 md:mb-6">
                <group.icon className="w-5 h-5 md:w-7 md:h-7 text-primary" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-foreground mb-4 md:mb-6">{group.title}</h3>
              <ul className="space-y-2 md:space-y-4">
                {group.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-2 md:gap-3">
                    <Check className="w-4 h-4 md:w-5 md:h-5 text-success flex-shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesDeepDive;