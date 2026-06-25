import { ChevronDown } from "lucide-react";
import { motion } from "motion/react";

export default function HeroSection() {
  const handleScrollToAbout = () => {
    const el = document.querySelector("#about");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image — larger, centered for scrolling */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="/assets/images/hero-performer.jpg"
          alt="Theatrical stage performance"
          className="h-[120%] w-full object-cover object-[center_25%]"
        />
        <div className="absolute inset-0 gradient-hero" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-left">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="font-mono text-xs tracking-[0.35em] uppercase text-primary mb-8">
            multimedia actress and recording artist
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          className="font-hero italic text-7xl md:text-9xl lg:text-[10rem] text-foreground mb-8 leading-[0.9] tracking-tight"
        >
          Nyla
          <br />
          <span className="text-gradient-primary">Sostre</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="max-w-2xl mb-10"
        >
          <p className="text-lg md:text-xl text-muted-foreground leading-[1.7] font-light tracking-wide">
            Currently standby in{" "}
            <span className="text-primary font-medium">MJ the Musical</span> on
            Broadway for{" "}
            <span className="text-foreground">Katherine Jackson</span> and{" "}
            <span className="text-foreground">Rachel</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-start gap-5"
        >
          <button
            type="button"
            onClick={() => {
              const el = document.querySelector("#discography");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center px-8 py-3.5 bg-primary text-primary-foreground font-body text-sm tracking-[0.15em] uppercase rounded-md hover:brightness-110 transition-smooth shadow-glow hover:shadow-elevated"
            data-ocid="hero.discography.button"
          >
            Explore Music
          </button>
          <button
            type="button"
            onClick={() => {
              const el = document.querySelector("#contact");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center px-8 py-3.5 border border-primary/40 text-primary font-body text-sm tracking-[0.15em] uppercase rounded-md hover:bg-primary/10 hover:border-primary/60 transition-smooth backdrop-blur-sm"
            data-ocid="hero.contact.button"
          >
            Get In Touch
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        onClick={handleScrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-smooth"
        aria-label="Scroll to about section"
        data-ocid="hero.scroll.button"
      >
        <ChevronDown size={32} className="animate-float" />
      </motion.button>
    </section>
  );
}
