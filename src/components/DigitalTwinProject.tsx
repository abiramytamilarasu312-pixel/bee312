import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  Activity,
  Volume2,
  Cpu,
  Cloud,
  Mail,
  AlertTriangle,
  Wifi,
  BarChart3,
  Box,
  Github,
  ExternalLink,
  ChevronRight,
  Gauge,
  Wrench,
  Signal,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";

// Sample data for charts
const rmsData = Array.from({ length: 20 }, (_, i) => ({
  time: `${i * 5}s`,
  rms: +(0.3 + Math.sin(i * 0.5) * 0.15 + Math.random() * 0.08).toFixed(3),
}));

const toolWearData = Array.from({ length: 15 }, (_, i) => ({
  pass: `Pass ${i + 1}`,
  wear: +(0.01 + i * 0.012 + Math.random() * 0.005).toFixed(3),
}));

const healthTimeline = [
  { time: "0 min", status: "Normal", color: "hsl(142 71% 45%)" },
  { time: "5 min", status: "Normal", color: "hsl(142 71% 45%)" },
  { time: "10 min", status: "Warning", color: "hsl(45 93% 47%)" },
  { time: "15 min", status: "Warning", color: "hsl(45 93% 47%)" },
  { time: "20 min", status: "Critical", color: "hsl(0 84% 60%)" },
];

const AnimatedCounter = ({ end, suffix = "", label }: { end: number; suffix?: string; label: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, end]);

  return (
    <div ref={ref} className="text-center">
      <div className="font-display text-3xl md:text-4xl font-bold text-accent">
        {count}{suffix}
      </div>
      <div className="text-muted-foreground text-sm mt-1 font-display">{label}</div>
    </div>
  );
};

const DigitalTwinProject = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    { icon: Activity, title: "Vibration RMS Monitoring", desc: "Real-time vibration data in g using MPU6050 accelerometer" },
    { icon: Volume2, title: "Sound Level Monitoring", desc: "Normalized 0–1 sound analysis via analog sensor" },
    { icon: Wrench, title: "Tool Wear Estimation", desc: "Predictive wear tracking in mm using sensor fusion" },
    { icon: ShieldCheck, title: "Health Classification", desc: "Normal / Warning / Critical status detection" },
    { icon: Cloud, title: "ThingSpeak Integration", desc: "Live cloud data streaming and storage" },
    { icon: Gauge, title: "Offline CSV Mode", desc: "Simulation mode using pre-recorded datasets" },
    { icon: BarChart3, title: "Predictive Simulation", desc: "Tool wear progression forecasting" },
    { icon: Mail, title: "Email Alerts", desc: "EmailJS-powered notifications for abnormal conditions" },
  ];

  const technologies = [
    { category: "Hardware", items: ["ESP32 Microcontroller", "MPU6050 (Vibration)", "Analog Sound Sensor"], icon: Cpu },
    { category: "Frontend", items: ["React + Vite + TypeScript", "Three.js (R3F)", "Recharts"], icon: Box },
    { category: "Cloud & IoT", items: ["ThingSpeak API", "Real-time Data Streaming", "CSV Data Pipeline"], icon: Cloud },
    { category: "Alerts", items: ["EmailJS Integration", "Threshold-based Triggers", "Status Notifications"], icon: Mail },
  ];

  return (
    <section id="digital-twin" className="section-padding relative" ref={ref}>
      <div className="absolute inset-0 gear-pattern opacity-5" />

      <div className="container max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-xs font-display uppercase tracking-[0.3em] text-accent mb-4 block">
            Featured Project
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Digital Twin & <span className="text-gradient">IoT-Based</span> Tool Wear Monitoring
          </h2>
          <div className="w-24 h-1 accent-gradient mx-auto rounded-full" />
          <p className="text-muted-foreground mt-6 max-w-3xl mx-auto leading-relaxed">
            This project focuses on developing a digital twin model of a conventional milling machine to monitor tool
            condition in real time. Sensor data such as vibration and sound are collected using an ESP32-based system
            and sent to the cloud. The digital twin replicates machine behavior and helps in predicting tool wear and
            machine health. The system also provides alerts to prevent tool failure.
          </p>
        </motion.div>

        {/* Animated Counters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
        >
          <div className="glass-card rounded-xl p-5">
            <AnimatedCounter end={3} label="IoT Sensors" />
          </div>
          <div className="glass-card rounded-xl p-5">
            <AnimatedCounter end={100} suffix="ms" label="Response Time" />
          </div>
          <div className="glass-card rounded-xl p-5">
            <AnimatedCounter end={3} label="Health States" />
          </div>
          <div className="glass-card rounded-xl p-5">
            <AnimatedCounter end={24} suffix="/7" label="Monitoring" />
          </div>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="w-full flex flex-wrap justify-center bg-secondary/50 border border-border rounded-xl p-1 mb-8 h-auto gap-1">
              <TabsTrigger value="overview" className="font-display text-xs uppercase tracking-wider data-[state=active]:bg-accent data-[state=active]:text-accent-foreground rounded-lg px-4 py-2">
                Overview
              </TabsTrigger>
              <TabsTrigger value="features" className="font-display text-xs uppercase tracking-wider data-[state=active]:bg-accent data-[state=active]:text-accent-foreground rounded-lg px-4 py-2">
                Features
              </TabsTrigger>
              <TabsTrigger value="tech" className="font-display text-xs uppercase tracking-wider data-[state=active]:bg-accent data-[state=active]:text-accent-foreground rounded-lg px-4 py-2">
                Technologies
              </TabsTrigger>
              <TabsTrigger value="results" className="font-display text-xs uppercase tracking-wider data-[state=active]:bg-accent data-[state=active]:text-accent-foreground rounded-lg px-4 py-2">
                Results
              </TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview">
              <div className="grid md:grid-cols-2 gap-6">
                {/* 3D Preview Placeholder */}
                <div className="glass-card rounded-2xl p-6 flex flex-col items-center justify-center min-h-[320px] border border-border/50">
                  <div className="relative w-full h-full flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 rounded-xl" />
                    <div className="relative text-center">
                      <motion.div
                        animate={{ rotateY: [0, 360] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                        className="w-24 h-24 mx-auto mb-4 border-2 border-accent/40 rounded-xl flex items-center justify-center"
                      >
                        <Box className="w-12 h-12 text-accent" />
                      </motion.div>
                      <p className="font-display text-lg font-semibold text-foreground">Digital Twin 3D Model</p>
                      <p className="text-muted-foreground text-sm mt-1">Milling Machine Visualization</p>
                      <div className="flex items-center justify-center gap-2 mt-3">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-xs text-muted-foreground font-display">Live Preview</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* System Architecture */}
                <div className="glass-card rounded-2xl p-6 border border-border/50">
                  <h3 className="font-display text-xl font-semibold mb-6 flex items-center gap-2">
                    <Signal className="w-5 h-5 text-accent" />
                    System Architecture
                  </h3>
                  <div className="space-y-4">
                    {[
                      { icon: Cpu, label: "ESP32 + Sensors", sub: "Data Acquisition", step: 1 },
                      { icon: Wifi, label: "ThingSpeak Cloud", sub: "Data Transmission", step: 2 },
                      { icon: BarChart3, label: "React Dashboard", sub: "Analysis & Visualization", step: 3 },
                      { icon: Box, label: "Digital Twin", sub: "3D Simulation", step: 4 },
                      { icon: AlertTriangle, label: "Alert System", sub: "EmailJS Notifications", step: 5 },
                    ].map((item, i) => (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.4 + i * 0.1 }}
                        className="flex items-center gap-4 p-3 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors"
                      >
                        <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center shrink-0">
                          <span className="font-display text-xs font-bold text-accent">{item.step}</span>
                        </div>
                        <item.icon className="w-5 h-5 text-accent shrink-0" />
                        <div>
                          <p className="font-display text-sm font-semibold">{item.label}</p>
                          <p className="text-xs text-muted-foreground">{item.sub}</p>
                        </div>
                        {i < 4 && <ChevronRight className="w-4 h-4 text-muted-foreground ml-auto" />}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Features Tab */}
            <TabsContent value="features">
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {features.map((f, i) => (
                  <motion.div
                    key={f.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.1 + i * 0.05 }}
                    className="glass-card rounded-xl p-5 hover-lift border border-transparent hover:border-accent/30 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-accent/15 flex items-center justify-center mb-3">
                      <f.icon className="w-5 h-5 text-accent" />
                    </div>
                    <h4 className="font-display text-sm font-semibold mb-1">{f.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            {/* Technologies Tab */}
            <TabsContent value="tech">
              <div className="grid sm:grid-cols-2 gap-6">
                {technologies.map((tech, i) => (
                  <motion.div
                    key={tech.category}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.1 + i * 0.1 }}
                    className="glass-card rounded-2xl p-6 border border-border/50"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-accent/15 flex items-center justify-center">
                        <tech.icon className="w-5 h-5 text-accent" />
                      </div>
                      <h4 className="font-display text-lg font-semibold">{tech.category}</h4>
                    </div>
                    <ul className="space-y-2">
                      {tech.items.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            {/* Results Tab */}
            <TabsContent value="results">
              <div className="space-y-6">
                {/* Charts Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  {/* RMS Chart */}
                  <div className="glass-card rounded-2xl p-6 border border-border/50">
                    <h4 className="font-display text-sm font-semibold mb-4 flex items-center gap-2">
                      <Activity className="w-4 h-4 text-accent" />
                      RMS Vibration vs Time
                    </h4>
                    <div className="h-56">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={rmsData}>
                          <CartesianGrid strokeDasharray="3 3" stroke="hsl(215 20% 20%)" />
                          <XAxis dataKey="time" tick={{ fontSize: 10, fill: "hsl(215 15% 60%)" }} />
                          <YAxis tick={{ fontSize: 10, fill: "hsl(215 15% 60%)" }} domain={[0, 0.6]} />
                          <Tooltip
                            contentStyle={{
                              background: "hsl(222 20% 12%)",
                              border: "1px solid hsl(215 20% 20%)",
                              borderRadius: "8px",
                              fontSize: "12px",
                            }}
                          />
                          <Line
                            type="monotone"
                            dataKey="rms"
                            stroke="hsl(217 71% 53%)"
                            strokeWidth={2}
                            dot={{ r: 3, fill: "hsl(217 71% 53%)" }}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </div>

                  {/* Tool Wear Chart */}
                  <div className="glass-card rounded-2xl p-6 border border-border/50">
                    <h4 className="font-display text-sm font-semibold mb-4 flex items-center gap-2">
                      <Wrench className="w-4 h-4 text-accent" />
                      Tool Wear Progression
                    </h4>
                    <div className="h-56">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={toolWearData}>
                          <CartesianGrid strokeDasharray="3 3" stroke="hsl(215 20% 20%)" />
                          <XAxis dataKey="pass" tick={{ fontSize: 10, fill: "hsl(215 15% 60%)" }} />
                          <YAxis tick={{ fontSize: 10, fill: "hsl(215 15% 60%)" }} />
                          <Tooltip
                            contentStyle={{
                              background: "hsl(222 20% 12%)",
                              border: "1px solid hsl(215 20% 20%)",
                              borderRadius: "8px",
                              fontSize: "12px",
                            }}
                          />
                          <Area
                            type="monotone"
                            dataKey="wear"
                            stroke="hsl(45 93% 47%)"
                            fill="hsl(45 93% 47% / 0.15)"
                            strokeWidth={2}
                          />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>

                {/* Health Status Timeline */}
                <div className="glass-card rounded-2xl p-6 border border-border/50">
                  <h4 className="font-display text-sm font-semibold mb-4 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-accent" />
                    Health Status Transitions
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {healthTimeline.map((h, i) => (
                      <motion.div
                        key={h.time}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.5 + i * 0.1 }}
                        className="flex items-center gap-3 bg-secondary/40 rounded-lg px-4 py-3"
                      >
                        <span className="w-3 h-3 rounded-full" style={{ backgroundColor: h.color }} />
                        <div>
                          <p className="text-xs text-muted-foreground">{h.time}</p>
                          <p className="font-display text-sm font-semibold" style={{ color: h.color }}>
                            {h.status}
                          </p>
                        </div>
                        {i < healthTimeline.length - 1 && (
                          <ChevronRight className="w-4 h-4 text-muted-foreground" />
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-4 mt-10"
        >
          <Button variant="hero" size="lg" className="gap-2" onClick={() => window.open("#", "_blank")}>
            <ExternalLink className="w-4 h-4" />
            View Live Demo
          </Button>
          <Button variant="heroOutline" size="lg" className="gap-2" onClick={() => window.open("#", "_blank")}>
            <Github className="w-4 h-4" />
            View Code
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default DigitalTwinProject;
