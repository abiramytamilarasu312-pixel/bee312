import { motion } from "framer-motion";
import { Download, FolderOpen, Mail, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import GearIcon from "./GearIcon";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 blueprint-grid opacity-30" />
      <div className="absolute inset-0 gear-pattern opacity-20" />
      
      {/* Floating Gears */}
      <div className="absolute top-20 left-10 opacity-20">
        <GearIcon size={120} className="animate-gear-rotate" />
      </div>
      <div className="absolute bottom-32 right-10 opacity-15">
        <GearIcon size={180} className="animate-gear-rotate" style={{ animationDirection: 'reverse' }} />
      </div>
      <div className="absolute top-1/3 right-1/4 opacity-10">
        <GearIcon size={80} className="animate-gear-rotate" />
      </div>
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-accent font-display text-lg md:text-xl tracking-[0.3em] uppercase mb-4">
            Mechanical Engineering Student
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight"
        >
          <span className="text-foreground">ABIRAMY</span>
          <br />
          <span className="text-gradient">TAMILARASU</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4 font-body"
        >
          B.E Mechanical Engineering – Final Year Student
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-base md:text-lg text-muted-foreground/80 max-w-xl mx-auto mb-10 font-body italic"
        >
          "Passionate mechanical engineering student focused on design, analysis, and continuous learning."
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button variant="hero" size="xl" className="group">
            <Download className="w-5 h-5 group-hover:animate-bounce" />
            Download Resume
          </Button>
          <Button
            variant="heroOutline"
            size="xl"
            onClick={() => scrollToSection("projects")}
          >
            <FolderOpen className="w-5 h-5" />
            View Projects
          </Button>
          <Button
            variant="steel"
            size="xl"
            onClick={() => scrollToSection("contact")}
          >
            <Mail className="w-5 h-5" />
            Contact Me
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
        onClick={() => scrollToSection("about")}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-muted-foreground hover:text-accent transition-colors"
        >
          <span className="text-sm font-display tracking-wider uppercase mb-2">Scroll Down</span>
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
