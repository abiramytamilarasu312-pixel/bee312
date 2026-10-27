import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Lightbulb, Smile, BookOpen } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    {
      icon: Target,
      title: "Problem Solver",
      description: "Strong analytical mindset with attention to detail",
    },
    {
      icon: Lightbulb,
      title: "Design Focused",
      description: "Interested in design engineering field",
    },
    {
      icon: Smile,
      title: "Optimistic",
      description: "Positive attitude with a ready-to-learn mindset",
    },
    {
      icon: BookOpen,
      title: "Continuous Learner",
      description: "Always eager to expand knowledge and skills",
    },
  ];

  return (
    <section id="about" className="section-padding relative" ref={ref}>
      <div className="absolute inset-0 gear-pattern opacity-5" />
      
      <div className="container max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-24 h-1 accent-gradient mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass-card rounded-2xl p-8">
              <h3 className="font-display text-2xl font-semibold text-accent mb-6">
                Mechanical Engineering Final Year Student
              </h3>
              
              <div className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed">
                  I'm a final year B.E Mechanical Engineering student (2022–2026) at
                  <span className="text-foreground font-medium"> Government College of Engineering, Srirangam</span>,
                  with a CGPA of <span className="text-accent font-semibold">7.8</span>.
                </p>
                
                <p className="leading-relaxed">
                  My passion lies in design engineering, where I combine technical knowledge
                  with creative problem-solving to develop innovative mechanical solutions.
                </p>
                
                <p className="leading-relaxed">
                  With a strong foundation in CAD software like SolidWorks and NX CAD, I'm
                  equipped to tackle complex design challenges and contribute meaningfully
                  to engineering projects.
                </p>
              </div>

              <div className="mt-8 flex items-center gap-4 p-4 bg-secondary/50 rounded-lg border border-border">
                <div className="w-16 h-16 rounded-full blue-gradient flex items-center justify-center text-2xl font-display font-bold">
                  7.8
                </div>
                <div>
                  <p className="font-display text-lg font-semibold">Current CGPA</p>
                  <p className="text-sm text-muted-foreground">B.E Mechanical Engineering</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="glass-card rounded-xl p-6 hover-lift group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
                </div>
                <h4 className="font-display text-lg font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
