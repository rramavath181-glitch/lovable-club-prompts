import { Button } from "@/components/ui/button";
import { Code2, Users, Calendar } from "lucide-react";
import heroImage from "@/assets/hero-coding.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img src={heroImage} alt="Coding Club Hero" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/70 to-background/95" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 backdrop-blur-sm rounded-full border border-accent/30">
            <Code2 className="h-5 w-5 text-accent-foreground" />
            <span className="text-accent-foreground font-medium">XYZ College Coding Club</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground leading-tight">
            Code. Create. Collaborate.
          </h1>

          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-2xl mx-auto">
            Join us in building the future through code. Learn, innovate, and grow together with fellow tech enthusiasts.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button variant="hero" size="lg" onClick={() => scrollToSection("events")}>
              <Calendar className="h-5 w-5" />
              View Events
            </Button>
            <Button variant="outline" size="lg" onClick={() => scrollToSection("contact")} className="bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground border-primary-foreground/30">
              <Users className="h-5 w-5" />
              Join Us
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-accent-foreground">150+</div>
              <div className="text-sm text-primary-foreground/80">Active Members</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-accent-foreground">50+</div>
              <div className="text-sm text-primary-foreground/80">Events Hosted</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-accent-foreground">20+</div>
              <div className="text-sm text-primary-foreground/80">Projects Built</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
