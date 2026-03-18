import { motion } from "framer-motion";
import { CalendarCheck, Bike, PackageCheck } from "lucide-react";

const steps = [
  { icon: <CalendarCheck size={32} />, title: "Book the Service", desc: "Place your order via our form, WhatsApp, or call." },
  { icon: <Bike size={32} />, title: "We Pick It Up", desc: "Our rider arrives at your location to collect the parcel." },
  { icon: <PackageCheck size={32} />, title: "Delivered Safely", desc: "Your package is delivered to the destination on time." },
];

const HowItWorksSection = () => (
  <section id="how-it-works" className="py-20 md:py-28 bg-muted/40">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="text-sm font-semibold text-primary uppercase tracking-wider">How It Works</span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mt-2">Simple 3-Step Process</h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {steps.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="text-center"
          >
            <div className="relative inline-flex">
              <div className="w-20 h-20 rounded-2xl gradient-primary flex items-center justify-center text-primary-foreground shadow-button mx-auto">
                {s.icon}
              </div>
              <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-foreground text-background text-xs font-bold flex items-center justify-center">
                {i + 1}
              </span>
            </div>
            <h3 className="text-lg font-bold text-foreground mt-5">{s.title}</h3>
            <p className="text-sm text-muted-foreground mt-2">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
