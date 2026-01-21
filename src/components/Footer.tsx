import GearIcon from "./GearIcon";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <GearIcon size={24} />
            <span className="font-display text-lg">
              <span className="text-accent">Abiramy</span> Tamilarasu
            </span>
          </div>
          
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} All rights reserved. Built with passion for engineering.
          </p>
          
          <div className="flex items-center gap-4">
            <a
              href="mailto:abiramytamilarasu312@gmail.com"
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/abiramytamilarasu312"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
