import { motion } from "framer-motion";
import { Send, Phone, MessageCircle } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-muted/40">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Get In Touch</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mt-2">Book Your Delivery</h2>
          <p className="text-muted-foreground mt-3">Fill out the form or reach us directly via WhatsApp or call.</p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="lg:col-span-3 bg-card rounded-2xl shadow-card border border-border/50 p-8 space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <input type="text" placeholder="Your Name" required className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
              <input type="tel" placeholder="Phone Number" required className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <input type="text" placeholder="Pickup City" required className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
              <input type="text" placeholder="Delivery City" required className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
            </div>
            <select required className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring">
              <option value="">Select Service Type</option>
              <option>Parcel Delivery</option>
              <option>Gift Delivery</option>
              <option>Document Delivery</option>
              <option>Express Delivery</option>
              <option>Pickup & Drop</option>
              <option>City-to-City Delivery</option>
            </select>
            <textarea placeholder="Additional Message (optional)" rows={3} className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none" />
            <button
              type="submit"
              className="w-full gradient-primary text-primary-foreground font-semibold py-3.5 rounded-xl shadow-button hover:opacity-90 transition-opacity flex items-center justify-center gap-2 text-sm"
            >
              {submitted ? "Request Sent! ✓" : <><Send size={16} /> Send Request</>}
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2 space-y-4"
          >
            <a
              href="https://wa.me/923001234567"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-card rounded-2xl shadow-card border border-border/50 p-6 hover:shadow-card-hover transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-green-500 text-primary-foreground flex items-center justify-center shrink-0">
                <MessageCircle size={24} />
              </div>
              <div>
                <p className="font-bold text-foreground">WhatsApp</p>
                <p className="text-sm text-muted-foreground">Chat with us instantly</p>
              </div>
            </a>

            <a
              href="tel:+923001234567"
              className="flex items-center gap-4 bg-card rounded-2xl shadow-card border border-border/50 p-6 hover:shadow-card-hover transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl gradient-primary text-primary-foreground flex items-center justify-center shrink-0">
                <Phone size={24} />
              </div>
              <div>
                <p className="font-bold text-foreground">Call Now</p>
                <p className="text-sm text-muted-foreground">+92 300 1234567</p>
              </div>
            </a>

            <div className="bg-card rounded-2xl shadow-card border border-border/50 p-6">
              <p className="font-bold text-foreground mb-2">Working Hours</p>
              <p className="text-sm text-muted-foreground">Monday - Saturday: 8AM - 10PM</p>
              <p className="text-sm text-muted-foreground">Sunday: 10AM - 6PM</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
