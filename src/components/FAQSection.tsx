import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Do you really offer unlimited sending?",
      answer:
        "No—and that's a good thing. We enforce safe volume limits (40-120 emails/day per inbox depending on reputation) to protect your domain health. \"Unlimited\" sending is how domains get burned. We scale you horizontally across multiple inboxes, not vertically into spam territory.",
    },
    {
      question: "What if I need to send more than your limits?",
      answer:
        "We add more inboxes to your pool at $3/account. If you need 500 emails/day, we'll provision 6-8 inboxes sending 60-80 each. This distributed approach maintains deliverability while hitting your volume goals.",
    },
    {
      question: "Do you build prospect lists for us?",
      answer:
        "No. We provide the infrastructure (domains, inboxes, warm-up, monitoring). You provide the lists. We recommend using verified data from Apollo, ZoomInfo, Clay, or your own enrichment stack.",
    },
    {
      question: "Why don't you require a credit card?",
      answer:
        "We believe in proving value first. If we're as good as we say, you'll want to pay. If not, you walk away free. It's simple trust-based business. We've maintained 95%+ inbox placement for 300+ agencies - we're confident you'll love the service.",
    },
    {
      question: "What happens on day 31?",
      answer:
        "You receive a detailed invoice for your usage at $3/month per Google Workspace account. Payment is due NET 15 (day 45). You'll have access to your complete analytics dashboard showing deliverability rates and performance metrics to confirm value before paying.",
    },
    {
      question: "Is there a catch? Any hidden fees?",
      answer:
        "Zero catches. No setup fees, no hidden costs, no contracts, no cancellation fees. You pay $3/month per inbox after day 30. What you see is what you pay.",
    },
    {
      question: "What if I'm not satisfied with the service?",
      answer:
        "Don't pay. Seriously. If our deliverability, support, or features don't meet your expectations, walk away. No penalties, no questions asked. We only want customers who see real value in our service.",
    },
    {
      question: "How fast can I start sending emails?",
      answer:
        "About 5 minutes total. Sign up (30 seconds), verify your domain via DNS records (2 minutes), configure SMTP or integrate our API (2 minutes), send your first email (30 seconds). We have one-click integrations for popular platforms and clear documentation.",
    },
    {
      question: "What's your actual deliverability rate?",
      answer:
        "95%+ inbox placement through our reputation-first approach. We achieve this through fully warmed Google Workspace accounts, automatic warm-up protocols, real-time reputation monitoring, and safe volume limits per inbox. You can track your exact deliverability on your dashboard in real-time.",
    },
    {
      question: "Can I cancel anytime without penalty?",
      answer:
        "Yes, absolutely. No contracts ever. Cancel before day 30 and pay nothing. Cancel after day 30 and you're only responsible for usage up to the cancellation date. No early termination fees, no questions asked.",
    },
  ];

  return (
    <section id="faq" className="py-12 md:py-16 lg:py-20 bg-[#F8F9FA]">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center max-w-[800px] mx-auto mb-8 md:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#1A1A1A] mb-3 md:mb-4 px-2">
            Frequently Asked Questions
          </h2>
          <p className="text-base md:text-lg text-[#6B7280] px-4">
            Everything you need to know about the 30-day free trial
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-[800px] mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-2 md:space-y-3">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="bg-white rounded-lg md:rounded-xl border border-[#E5E7EB] hover:border-[#7C3AED] hover:shadow-md transition-all duration-300 overflow-hidden"
                >
                  <AccordionTrigger className="text-left font-semibold text-[#1A1A1A] text-sm md:text-base hover:text-[#7C3AED] hover:no-underline px-4 md:px-6 py-3 md:py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#6B7280] text-xs md:text-sm px-4 md:px-6 pb-3 md:pb-4 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;