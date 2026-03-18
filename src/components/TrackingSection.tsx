import { motion } from "framer-motion";
import { CheckCircle2, User, Bike, Truck, Package } from "lucide-react";

const trackingSteps = [
  { icon: <CheckCircle2 size={22} />, label: "Order Confirmed", time: "10:00 AM", done: true },
  { icon: <User size={22} />, label: "Rider Assigned", time: "10:05 AM", done: true },
  { icon: <Bike size={22} />, label: "On the Way", time: "10:20 AM", done: true },
  { icon: <Package size={22} />, label: "Delivered", time: "10:45 AM", done: false },
];

const TrackingSection = () => (
  <section className="py-20 md:py-28 bg-background">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="text-sm font-semibold text-primary uppercase tracking-wider">Live Tracking</span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mt-2">Track Your Delivery</h2>
        <p className="text-muted-foreground mt-3">Real-time updates on every step of your delivery.</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-md mx-auto bg-card rounded-2xl shadow-card border border-border/50 p-8"
      >
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-xs text-muted-foreground">Tracking ID</p>
            <p className="font-bold text-foreground">#DTD-20240318</p>
          </div>
          <span className="bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full">In Transit</span>
        </div>

        <div className="space-y-0">
          {trackingSteps.map((step, i) => (
            <div key={step.label} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
                  step.done ? "gradient-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                }`}>
                  {step.icon}
                </div>
                {i < trackingSteps.length - 1 && (
                  <div className={`w-0.5 h-10 ${step.done ? "bg-primary/30" : "bg-border"}`} />
                )}
              </div>
              <div className="pb-8">
                <p className={`font-semibold text-sm ${step.done ? "text-foreground" : "text-muted-foreground"}`}>
                  {step.label}
                </p>
                <p className="text-xs text-muted-foreground">{step.time}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default TrackingSection;
