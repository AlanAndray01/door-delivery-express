import { motion } from "framer-motion";
import { Package, Gift, FileText, Zap, ArrowLeftRight, MapPin } from "lucide-react";
import { ReactNode } from "react";

const services: { icon: ReactNode; title: string; desc: string }[] = [
  { icon: <Package size={28} />, title: "Parcel Delivery", desc: "Safe and timely delivery of your parcels across cities." },
  { icon: <Gift size={28} />, title: "Gift Delivery", desc: "Surprise your loved ones with doorstep gift delivery." },
  { icon: <FileText size={28} />, title: "Document Delivery", desc: "Secure handling and fast delivery of important documents." },
  { icon: <Zap size={28} />, title: "Express Delivery", desc: "Need it fast? Our express service gets it there in hours." },
  { icon: <ArrowLeftRight size={28} />, title: "Pickup & Drop", desc: "We pick up from your location and drop to the destination." },
  { icon: <MapPin size={28} />, title: "City-to-City Delivery", desc: "Inter-city delivery across all major cities in Pakistan." },
];

const ServicesSection = () => (
  <section id="services" className="py-20 md:py-28 bg-background">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <span className="text-sm font-semibold text-primary uppercase tracking-wider">Our Services</span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mt-2">What We Deliver</h2>
        <p className="text-muted-foreground mt-3 max-w-lg mx-auto">From parcels to gifts, we handle everything with care and speed.</p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ y: -4 }}
            className="bg-card rounded-2xl p-7 shadow-card hover:shadow-card-hover transition-shadow border border-border/50 group cursor-pointer"
          >
            <div className="w-12 h-12 rounded-xl bg-accent text-accent-foreground flex items-center justify-center group-hover:gradient-primary group-hover:text-primary-foreground transition-all">
              {s.icon}
            </div>
            <h3 className="text-lg font-bold text-foreground mt-5">{s.title}</h3>
            <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
