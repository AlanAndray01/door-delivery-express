import { motion } from "framer-motion";
import { ArrowRight, Phone, Bike, MapPin, Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center gradient-hero overflow-hidden pt-16">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-[10%] w-16 h-16 rounded-full bg-primary/5"
        />
        <motion.div
          animate={{ y: [0, 15, 0], x: [0, -8, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-1/3 left-[5%] w-10 h-10 rounded-full bg-primary/5"
        />
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/4 left-[15%] w-20 h-20 rounded-full bg-primary/3"
        />
        {/* Dashed route line */}
        <svg className="absolute bottom-0 left-0 w-full h-32 opacity-[0.04]" viewBox="0 0 1200 120">
          <path d="M0,80 Q300,20 600,60 T1200,40" fill="none" stroke="hsl(221,83%,53%)" strokeWidth="3" strokeDasharray="12 8" />
        </svg>
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.3 }}
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2.5 }}
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground text-sm font-semibold px-4 py-1.5 rounded-full mb-6"
            >
              <Zap size={14} />
              #1 Delivery Service in Pakistan
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-[1.1] tracking-tight">
              Fast & Reliable{" "}
              <span className="text-primary">Door To Door</span>{" "}
              Delivery
            </h1>

            <p className="mt-5 text-lg text-muted-foreground max-w-lg leading-relaxed">
              We deliver your parcels, gifts, and documents safely across major cities in Pakistan. Quick booking, real-time tracking, and guaranteed satisfaction.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="#contact"
                className="gradient-primary text-primary-foreground font-semibold px-7 py-3.5 rounded-xl shadow-button hover:opacity-90 transition-opacity inline-flex items-center gap-2 text-sm"
              >
                Book Now <ArrowRight size={16} />
              </a>
              <a
                href="#contact"
                className="border-2 border-primary/20 text-primary font-semibold px-7 py-3.5 rounded-xl hover:bg-accent transition-colors inline-flex items-center gap-2 text-sm"
              >
                <Phone size={16} /> Contact Us
              </a>
            </div>

            <div className="flex items-center gap-8 mt-10 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-primary" />
                7+ Cities
              </div>
              <div className="flex items-center gap-2">
                <Bike size={16} className="text-primary" />
                Same Day Delivery
              </div>
              <div className="flex items-center gap-2">
                <Zap size={16} className="text-primary" />
                Live Tracking
              </div>
            </div>
          </motion.div>

          {/* Right - Bike illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 2.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex items-center justify-center"
          >
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-primary/5 animate-pulse-ring" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-primary/8" />
              </div>

              {/* Main bike visual */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10 w-72 h-72 md:w-96 md:h-96 flex items-center justify-center"
              >
                <div className="gradient-primary rounded-full w-48 h-48 md:w-64 md:h-64 flex items-center justify-center shadow-2xl">
                  <Bike className="text-primary-foreground" size={96} strokeWidth={1.2} />
                </div>
              </motion.div>

              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -8, 0], x: [0, 5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute top-4 right-4 bg-background rounded-xl shadow-card p-3 flex items-center gap-2"
              >
                <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center">
                  <Zap className="text-primary-foreground" size={14} />
                </div>
                <div>
                  <p className="text-xs font-bold text-foreground">Express</p>
                  <p className="text-[10px] text-muted-foreground">30 min</p>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0], x: [0, -5, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-8 left-0 bg-background rounded-xl shadow-card p-3 flex items-center gap-2"
              >
                <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
                  <MapPin className="text-primary-foreground" size={14} />
                </div>
                <div>
                  <p className="text-xs font-bold text-foreground">Delivered!</p>
                  <p className="text-[10px] text-muted-foreground">Safe & Sound</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
