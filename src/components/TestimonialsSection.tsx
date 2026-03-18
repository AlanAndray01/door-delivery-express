import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  { name: "Ahmed Khan", city: "Lahore", text: "Door To Door delivered my parcel within 2 hours. Absolutely incredible service! Will use again for sure.", rating: 5 },
  { name: "Sara Ali", city: "Islamabad", text: "I sent a birthday gift to my sister in Multan and it arrived perfectly on time. The packaging was safe and professional.", rating: 5 },
  { name: "Usman Raza", city: "Faisalabad", text: "Very affordable and reliable. Their tracking system keeps you updated at every step. Highly recommended!", rating: 5 },
];

const TestimonialsSection = () => (
  <section id="testimonials" className="py-20 md:py-28 bg-muted/40">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="text-sm font-semibold text-primary uppercase tracking-wider">Testimonials</span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mt-2">What Our Customers Say</h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card rounded-2xl p-7 shadow-card border border-border/50"
          >
            <div className="flex gap-1 mb-4">
              {Array.from({ length: t.rating }).map((_, j) => (
                <Star key={j} size={16} className="fill-primary text-primary" />
              ))}
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">"{t.text}"</p>
            <div className="mt-5 pt-4 border-t border-border/50">
              <p className="font-bold text-foreground text-sm">{t.name}</p>
              <p className="text-xs text-muted-foreground">{t.city}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
