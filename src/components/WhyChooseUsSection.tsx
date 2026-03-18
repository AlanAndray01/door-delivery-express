import { motion } from "framer-motion";
import { Zap, ShieldCheck, HandCoins, Headphones, Clock, Smartphone } from "lucide-react";

const reasons = [
  { icon: <Zap size={24} />, title: "Fast Delivery", desc: "Same-day and express delivery options." },
  { icon: <ShieldCheck size={24} />, title: "Reliable Service", desc: "Trusted by thousands of customers." },
  { icon: <HandCoins size={24} />, title: "Affordable Pricing", desc: "Competitive rates, no hidden charges." },
  { icon: <Headphones size={24} />, title: "Professional Support", desc: "24/7 customer support via chat and phone." },
  { icon: <Clock size={24} />, title: "On-Time Guarantee", desc: "We respect your time, every time." },
  { icon: <Smartphone size={24} />, title: "Easy Booking", desc: "Book in seconds via form or WhatsApp." },
];

const WhyChooseUsSection = () => (
  <section id="why-us" className="py-20 md:py-28 bg-background">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="text-sm font-semibold text-primary uppercase tracking-wider">Why Choose Us</span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mt-2">The Door To Door Advantage</h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {reasons.map((r, i) => (
          <motion.div
            key={r.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07 }}
            className="flex items-start gap-4 p-5 rounded-xl hover:bg-muted/50 transition-colors"
          >
            <div className="w-11 h-11 rounded-lg bg-accent text-accent-foreground flex items-center justify-center shrink-0">
              {r.icon}
            </div>
            <div>
              <h3 className="font-bold text-foreground">{r.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{r.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUsSection;
