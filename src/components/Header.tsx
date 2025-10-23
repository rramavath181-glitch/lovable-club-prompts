import { useState } from "react";
import { Menu, X, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection("hero")}>
            <Code2 className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-foreground">XYZ Coding Club</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection("about")} className="text-foreground hover:text-primary transition-smooth">
              About
            </button>
            <button onClick={() => scrollToSection("events")} className="text-foreground hover:text-primary transition-smooth">
              Events
            </button>
            <button onClick={() => scrollToSection("team")} className="text-foreground hover:text-primary transition-smooth">
              Team
            </button>
            <button onClick={() => scrollToSection("gallery")} className="text-foreground hover:text-primary transition-smooth">
              Gallery
            </button>
            <Button onClick={() => scrollToSection("contact")} size="sm">
              Contact Us
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <button onClick={() => scrollToSection("about")} className="text-left text-foreground hover:text-primary transition-smooth">
                About
              </button>
              <button onClick={() => scrollToSection("events")} className="text-left text-foreground hover:text-primary transition-smooth">
                Events
              </button>
              <button onClick={() => scrollToSection("team")} className="text-left text-foreground hover:text-primary transition-smooth">
                Team
              </button>
              <button onClick={() => scrollToSection("gallery")} className="text-left text-foreground hover:text-primary transition-smooth">
                Gallery
              </button>
              <Button onClick={() => scrollToSection("contact")} className="w-full">
                Contact Us
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
