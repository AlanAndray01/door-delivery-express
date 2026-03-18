import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const cities = ["Lahore", "Islamabad", "Rawalpindi", "Gujranwala", "Faisalabad", "Multan", "Bahawalpur"];

const CitiesSection = () => (
  <section id="cities" className="py-20 md:py-28 bg-muted/40">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="text-sm font-semibold text-primary uppercase tracking-wider">Coverage</span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mt-2">Cities We Serve</h2>
        <p className="text-muted-foreground mt-3">Expanding across Pakistan with reliable door-to-door delivery.</p>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
        {cities.map((city, i) => (
          <motion.div
            key={city}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            whileHover={{ scale: 1.05 }}
            className="bg-card border border-border/60 rounded-xl px-6 py-4 shadow-card flex items-center gap-3 cursor-pointer"
          >
            <MapPin size={18} className="text-primary" />
            <span className="font-semibold text-foreground">{city}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CitiesSection;
