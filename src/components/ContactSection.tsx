import { motion } from "framer-motion";
import { Send, Phone } from "lucide-react";
import { useState, useRef } from "react";

const WhatsAppIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c0-5.445 4.454-9.888 9.9-9.89 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.895 9.89" />
  </svg>
);

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    if (formRef.current) {
      formRef.current.reset();
    }
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
            ref={formRef}
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
              <div className="w-12 h-12 rounded-xl bg-[#25D366] text-white flex items-center justify-center shrink-0">
                <WhatsAppIcon size={28} />
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
