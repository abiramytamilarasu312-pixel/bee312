import { motion } from "framer-motion";
import { Download, ArrowLeft, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import GearIcon from "@/components/GearIcon";

const Resume = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 glass-card py-4"
      >
        <div className="container max-w-6xl mx-auto px-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <GearIcon size={32} className="group-hover:animate-gear-rotate" />
            <span className="font-display text-xl font-bold">
              <span className="text-accent">AT</span>
            </span>
          </Link>

          <div className="flex items-center gap-3">
            <Link to="/">
              <Button variant="ghost" size="sm" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Portfolio
              </Button>
            </Link>
            <a href="/resume/RESUME_702.pdf" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm" className="gap-2">
                <ExternalLink className="w-4 h-4" />
                Open in New Tab
              </Button>
            </a>
            <a href="/resume/RESUME_702.pdf" download="Abiramy_Tamilarasu_Resume.pdf">
              <Button variant="hero" size="sm" className="gap-2">
                <Download className="w-4 h-4" />
                Download PDF
              </Button>
            </a>
          </div>
        </div>
      </motion.header>

      {/* PDF Viewer Section */}
      <main className="pt-24 pb-8 px-4">
        <div className="container max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-8"
          >
            <h1 className="font-display text-3xl md:text-4xl font-bold mb-2">
              <span className="text-foreground">My </span>
              <span className="text-accent">Resume</span>
            </h1>
            <p className="text-muted-foreground">
              Abiramy Tamilarasu — B.E Mechanical Engineering
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass-card rounded-xl overflow-hidden shadow-2xl"
          >
            <div className="bg-muted/30 px-4 py-3 border-b border-border flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <span className="text-sm text-muted-foreground font-mono">
                Abiramy_Tamilarasu_Resume.pdf
              </span>
              <div className="w-16" />
            </div>
            
            <div className="relative" style={{ height: "calc(100vh - 220px)", minHeight: "600px" }}>
              <iframe
                src="/resume/RESUME_702.pdf"
                className="w-full h-full border-0"
                title="Abiramy Tamilarasu Resume"
              />
              
              {/* Fallback for browsers that don't support PDF embedding */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-background/90 backdrop-blur-sm opacity-0 pointer-events-none [.pdf-fallback_&]:opacity-100 [.pdf-fallback_&]:pointer-events-auto">
                <p className="text-muted-foreground mb-4">
                  Unable to display PDF in browser
                </p>
                <div className="flex gap-3">
                  <a href="/resume/RESUME_702.pdf" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Open PDF
                    </Button>
                  </a>
                  <a href="/resume/RESUME_702.pdf" download="Abiramy_Tamilarasu_Resume.pdf">
                    <Button variant="hero">
                      <Download className="w-4 h-4 mr-2" />
                      Download PDF
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8 text-center"
          >
            <p className="text-muted-foreground mb-4">
              Interested in working together?
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link to="/#contact">
                <Button variant="heroOutline" size="lg">
                  Get in Touch
                </Button>
              </Link>
              <Link to="/#projects">
                <Button variant="steel" size="lg">
                  View My Projects
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Resume;
