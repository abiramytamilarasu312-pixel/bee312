import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const education = [
    {
      degree: "B.E Mechanical Engineering",
      institution: "Government College of Engineering, Srirangam",
      year: "2022 – 2026",
      score: "CGPA: 7.8",
      type: "cgpa",
      current: true,
      academicYear: "2022-2026",
    },
    {
      degree: "Higher Secondary Education",
      institution: "Sri Vidya Mandir Matriculation Higher Secondary School",
      year: "2021 – 2022",
      score: "86.92%",
      type: "percentage",
      current: false,
    },
    {
      degree: "Secondary School Education (SSLC)",
      institution: "Sri Vidya Mandir Matriculation Higher Secondary School",
      year: "2019 – 2020",
      score: "87.6%",
      type: "percentage",
      current: false,
    },
  ];

  return (
    <section id="education" className="section-padding bg-secondary/20 relative" ref={ref}>
      <div className="absolute inset-0 blueprint-grid opacity-10" />
      
      <div className="container max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Education</span>
          </h2>
          <div className="w-24 h-1 accent-gradient mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-primary to-accent/50" />

          {/* Education Items */}
          <div className="space-y-12">
            {education.map((item, index) => (
              <motion.div
                key={item.degree}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-accent border-4 border-background z-10" />

                {/* Content Card */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <div className={`glass-card rounded-2xl p-6 hover-lift ${item.current ? "border-accent/50" : ""}`}>
                    {item.current && (
                      <span className="inline-block px-3 py-1 text-xs font-display uppercase tracking-wider bg-accent/20 text-accent rounded-full mb-4">
                        Current
                      </span>
                    )}
                    
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg blue-gradient flex items-center justify-center flex-shrink-0">
                        <GraduationCap className="w-6 h-6 text-primary-foreground" />
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="font-display text-xl font-semibold mb-2">{item.degree}</h3>
                        
                        <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
                          <MapPin className="w-4 h-4" />
                          <span>{item.institution}</span>
                        </div>
                        
                        <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
                          <Calendar className="w-4 h-4" />
                          <span>{item.year}</span>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <Award className="w-5 h-5 text-accent" />
                          <span className="font-display text-lg font-semibold text-accent">{item.score}</span>
                        </div>
                      </div>
                    </div>
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

export default EducationSection;
