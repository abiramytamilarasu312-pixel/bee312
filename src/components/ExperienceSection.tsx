import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      company: "SRF Limited – Textile Division",
      location: "Viralimalai",
      duration: "June 2025 – July 2025",
      role: "Industrial Internship",
      responsibilities: [
        "Studied twisting process operations on MEERA twisting machine",
        "Monitored machine performance and operational parameters",
        "Analyzed bobbin yarn wastage patterns",
        "Compared old vs new machine mechanisms",
        "Proposed improvements for waste reduction",
      ],
    },
    {
      company: "BHEL Trichy",
      location: "Trichy",
      duration: "August 2024 (15 Days)",
      role: "Industrial Exposure Program",
      responsibilities: [
        "Gained basic industrial exposure",
        "Studied manufacturing and plant operations",
        "Observed large-scale production processes",
      ],
    },
  ];

  return (
    <section id="experience" className="section-padding bg-secondary/20 relative" ref={ref}>
      <div className="absolute inset-0 blueprint-grid opacity-10" />
      
      <div className="container max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Internship <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-24 h-1 accent-gradient mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-primary to-accent/50" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
                className="relative pl-12 md:pl-20"
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-8 -translate-x-1/2 w-4 h-4 rounded-full bg-accent border-4 border-background z-10 top-8" />

                <div className="glass-card rounded-2xl p-6 md:p-8 hover-lift">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-12 h-12 rounded-lg blue-gradient flex items-center justify-center">
                          <Briefcase className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <div>
                          <h3 className="font-display text-xl md:text-2xl font-semibold">{exp.company}</h3>
                          <p className="text-accent font-display">{exp.role}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {exp.responsibilities.map((resp, respIndex) => (
                      <motion.div
                        key={respIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.4, delay: 0.5 + index * 0.2 + respIndex * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{resp}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
