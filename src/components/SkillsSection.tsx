import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Wrench, 
  Monitor, 
  FileSpreadsheet, 
  Cog, 
  MessageSquare, 
  Users, 
  RefreshCw, 
  Lightbulb 
} from "lucide-react";

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const technicalSkills = [
    { name: "SolidWorks", level: 85, icon: Cog },
    { name: "NX CAD", level: 75, icon: Wrench },
    { name: "MS Office Tools", level: 90, icon: FileSpreadsheet },
    { name: "Mechanical Design Basics", level: 80, icon: Monitor },
    { name: "AI - Powered Development", level: 60, icon: Lightbulb },
  ];

  const softSkills = [
    { name: "Good Communication", icon: MessageSquare },
    { name: "Teamwork", icon: Users },
    { name: "Adaptability", icon: RefreshCw },
    { name: "Problem Solving", icon: Lightbulb },
  ];

  return (
    <section id="skills" className="section-padding relative" ref={ref}>
      <div className="absolute inset-0 gear-pattern opacity-5" />
      
      <div className="container max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-24 h-1 accent-gradient mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-display text-2xl font-semibold mb-8 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg blue-gradient flex items-center justify-center">
                <Wrench className="w-5 h-5 text-primary-foreground" />
              </div>
              Technical Skills
            </h3>

            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="glass-card rounded-xl p-5"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                        <skill.icon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="font-display font-semibold">{skill.name}</span>
                    </div>
                    <span className="text-accent font-display font-bold">{skill.level}%</span>
                  </div>
                  
                  <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1, ease: "easeOut" }}
                      className="h-full accent-gradient rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="font-display text-2xl font-semibold mb-8 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg accent-gradient flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-accent-foreground" />
              </div>
              Soft Skills
            </h3>

            <div className="grid grid-cols-2 gap-4">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="glass-card rounded-xl p-6 text-center hover-lift group"
                >
                  <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/30 transition-colors">
                    <skill.icon className="w-7 h-7 text-accent" />
                  </div>
                  <h4 className="font-display font-semibold">{skill.name}</h4>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
