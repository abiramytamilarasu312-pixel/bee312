import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, MapPin, Linkedin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "abiramytamilarasu312@gmail.com",
      href: "mailto:abiramytamilarasu312@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9080523212",
      href: "tel:+919080523212",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Thuraiyur, Trichy – 621008",
      href: null,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/abiramytamilarasu312",
      href: "https://www.linkedin.com/in/abiramytamilarasu312",
    },
  ];

  return (
    <section id="contact" className="section-padding bg-secondary/20 relative" ref={ref}>
      <div className="absolute inset-0 blueprint-grid opacity-10" />
      
      <div className="container max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-24 h-1 accent-gradient mx-auto rounded-full" />
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            Looking for internship opportunities and entry-level positions in design engineering. 
            Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="glass-card rounded-xl p-5 flex items-center gap-4 hover-lift group block"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <item.icon className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground font-display uppercase tracking-wider">
                        {item.label}
                      </p>
                      <p className="font-medium group-hover:text-accent transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ) : (
                  <div className="glass-card rounded-xl p-5 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground font-display uppercase tracking-wider">
                        {item.label}
                      </p>
                      <p className="font-medium">{item.value}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Quick Contact Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass-card rounded-2xl p-8"
          >
            <h3 className="font-display text-2xl font-semibold mb-6">Send a Quick Message</h3>
            
            <form className="space-y-4">
              <div>
                <label className="text-sm text-muted-foreground font-display uppercase tracking-wider block mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-accent transition-colors"
                  placeholder="Enter your name"
                />
              </div>
              
              <div>
                <label className="text-sm text-muted-foreground font-display uppercase tracking-wider block mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-accent transition-colors"
                  placeholder="Enter your email"
                />
              </div>
              
              <div>
                <label className="text-sm text-muted-foreground font-display uppercase tracking-wider block mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-accent transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>

              <Button variant="hero" size="lg" className="w-full group">
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
