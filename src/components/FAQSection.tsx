import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  { q: "How do I place an order?", a: "You can place an order through our website contact form, WhatsApp, or by calling us directly. It takes less than a minute!" },
  { q: "Which cities do you serve?", a: "We currently serve Lahore, Islamabad, Rawalpindi, Gujranwala, Faisalabad, Multan, and Bahawalpur — with more cities coming soon." },
  { q: "Do you offer urgent delivery?", a: "Yes! Our Express Delivery service ensures your parcel is delivered within hours for same-city deliveries." },
  { q: "Can I send gifts or documents?", a: "Absolutely. We handle gifts, documents, parcels, and more with utmost care and secure packaging." },
  { q: "How can I contact support?", a: "You can reach us via WhatsApp, phone call, or the contact form on this page. Our support team is available 24/7." },
];

const FAQSection = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 md:py-28 bg-background">
      <div className="container max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">FAQ</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mt-2">Frequently Asked Questions</h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="border border-border/60 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-muted/30 transition-colors"
              >
                <span className="font-semibold text-foreground text-sm">{faq.q}</span>
                <ChevronDown
                  size={18}
                  className={`text-muted-foreground transition-transform shrink-0 ml-4 ${open === i ? "rotate-180" : ""}`}
                />
              </button>
              {open === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  className="px-5 pb-5"
                >
                  <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
