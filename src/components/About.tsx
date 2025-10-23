import { Target, Eye, TrendingUp, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">About Our Club</h2>
          <p className="text-lg text-muted-foreground">
            The XYZ College Coding Club is a vibrant community of passionate students dedicated to learning, building, and sharing knowledge about programming and technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card className="shadow-card hover:shadow-card-hover transition-smooth border-2">
            <CardContent className="p-6 text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Our Mission</h3>
              <p className="text-muted-foreground">
                To foster a culture of innovation and collaboration while empowering students to excel in the tech industry.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-card hover:shadow-card-hover transition-smooth border-2">
            <CardContent className="p-6 text-center space-y-4">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                <Eye className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Our Vision</h3>
              <p className="text-muted-foreground">
                To be the leading platform for tech education and innovation in our college, inspiring the next generation of developers.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-card hover:shadow-card-hover transition-smooth border-2">
            <CardContent className="p-6 text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Our Goals</h3>
              <p className="text-muted-foreground">
                Organize workshops, hackathons, and coding competitions to enhance practical skills and industry readiness.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-card hover:shadow-card-hover transition-smooth border-2">
            <CardContent className="p-6 text-center space-y-4">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                <Award className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Our History</h3>
              <p className="text-muted-foreground">
                Founded in 2020, we've grown from a small group of enthusiasts to one of the most active clubs on campus.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-gradient-card rounded-2xl p-8 md:p-12 shadow-card">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 text-center">What We Offer</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary-foreground text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Weekly Coding Sessions</h4>
                  <p className="text-muted-foreground text-sm">Learn new technologies and solve problems together</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary-foreground text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Industry Expert Talks</h4>
                  <p className="text-muted-foreground text-sm">Connect with professionals and learn from their experiences</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary-foreground text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Project Collaboration</h4>
                  <p className="text-muted-foreground text-sm">Work on real-world projects with your peers</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-accent-foreground text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Hackathons & Competitions</h4>
                  <p className="text-muted-foreground text-sm">Test your skills and win exciting prizes</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-accent-foreground text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Career Guidance</h4>
                  <p className="text-muted-foreground text-sm">Get mentorship and interview preparation support</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-accent-foreground text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Networking Opportunities</h4>
                  <p className="text-muted-foreground text-sm">Build connections that last beyond college</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
