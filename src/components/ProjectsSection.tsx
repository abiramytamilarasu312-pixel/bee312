import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FolderOpen, ExternalLink, Cog } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "Yarn Wastage Monitoring in Twisting Process",
      description:
        "Comprehensive study of yarn wastage patterns during the twisting process on MEERA machines. Involved data collection, analysis, and identification of waste reduction opportunities.",
      tags: ["Process Analysis", "Data Collection", "Quality Control"],
      type: "Internship Project",
    },
    {
      title: "Bobbin Waste Reduction Analysis",
      description:
        "Analyzed bobbin yarn wastage across different machine batches, compared old vs new machine mechanisms, and proposed improvements for minimizing material waste.",
      tags: ["Waste Analysis", "Machine Comparison", "Optimization"],
      type: "Internship Project",
    },
    {
      title: "Mechanical Process Observation & Reporting",
      description:
        "Documented and reported on various mechanical processes observed during industrial internships, including manufacturing operations at BHEL Trichy.",
      tags: ["Documentation", "Industrial Exposure", "Reporting"],
      type: "Internship Project",
    },
  ];

  return (
    <section id="projects" className="section-padding relative" ref={ref}>
      <div className="absolute inset-0 gear-pattern opacity-5" />
      
      <div className="container max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-24 h-1 accent-gradient mx-auto rounded-full" />
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            Real-world projects and analyses completed during industrial internships
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="group"
            >
              <div className="glass-card rounded-2xl p-6 h-full flex flex-col hover-lift border-transparent hover:border-accent/30 transition-colors">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <FolderOpen className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
                  </div>
                  <span className="text-xs font-display uppercase tracking-wider text-accent bg-accent/10 px-3 py-1 rounded-full">
                    {project.type}
                  </span>
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-semibold mb-3 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm flex-grow mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 bg-secondary/80 text-muted-foreground rounded-full font-display"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center gap-2 text-primary group-hover:text-accent transition-colors">
                  <Cog className="w-4 h-4" />
                  <span className="text-sm font-display">Engineering Project</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
