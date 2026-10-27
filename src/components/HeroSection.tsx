import { motion } from "framer-motion";
import { Download, FolderOpen, Mail, ChevronDown, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Dark Overlay for readability */}
      <div className="absolute inset-0 bg-background/70" />
      
      {/* Subtle Blueprint Grid */}
      <div className="absolute inset-0 blueprint-grid opacity-10" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-accent font-display text-lg md:text-xl tracking-[0.3em] uppercase mb-4">
            Mechanical Engineer
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-name text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight"
        >
          <span className="text-foreground">ABIRAMY</span>
          <br />
          <span className="text-accent">TAMILARASU</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4 font-body"
        >
          B.E Mechanical Engineering
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-base md:text-lg text-muted-foreground/80 max-w-xl mx-auto mb-10 font-body italic"
        >
          "Passionate mechanical engineer focused on design, analysis, and continuous learning."
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center flex-wrap"
        >
          <a href="/documents/Abiramy_Tamilarasu_Resume.pdf" download="Abiramy_Tamilarasu_Resume.pdf">
            <Button variant="hero" size="xl" className="group">
              <Download className="w-5 h-5 group-hover:animate-bounce" />
              Download Resume
            </Button>
          </a>
          <a href="https://drive.google.com/file/d/10DIs-uVhzWePFvsrKPSnG3xS1XRqndrS/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            <Button variant="heroOutline" size="xl" className="group">
              <Eye className="w-5 h-5" />
              View Resume
            </Button>
          </a>
          <Button
            variant="steel"
            size="xl"
            onClick={() => scrollToSection("projects")}
          >
            <FolderOpen className="w-5 h-5" />
            View Projects
          </Button>
          <Button
            variant="secondary"
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
