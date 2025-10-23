import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail } from "lucide-react";
import member1 from "@/assets/member-1.jpg";
import member2 from "@/assets/member-2.jpg";
import member3 from "@/assets/member-3.jpg";
import member4 from "@/assets/member-4.jpg";

const Team = () => {
  const teamMembers = [
    {
      name: "Rahul Sharma",
      role: "President",
      image: member1,
      bio: "Full-stack developer with a passion for React and Node.js",
      type: "student",
    },
    {
      name: "Priya Patel",
      role: "Vice President",
      image: member2,
      bio: "UI/UX enthusiast and competitive programmer",
      type: "student",
    },
    {
      name: "Arjun Kumar",
      role: "Technical Lead",
      image: member3,
      bio: "AI/ML researcher and hackathon champion",
      type: "student",
    },
    {
      name: "Dr. Sarah Johnson",
      role: "Faculty Coordinator",
      image: member4,
      bio: "Computer Science Professor with 15+ years of experience",
      type: "faculty",
    },
  ];

  return (
    <section id="team" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Meet Our Team</h2>
          <p className="text-lg text-muted-foreground">
            Dedicated individuals working together to create an amazing coding community.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="overflow-hidden shadow-card hover:shadow-card-hover transition-smooth border-2 group">
              <div className="relative">
                <div className="aspect-square overflow-hidden bg-muted">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-smooth group-hover:scale-105"
                  />
                </div>
                <div className="absolute top-4 right-4">
                  <Badge variant={member.type === "faculty" ? "default" : "secondary"}>
                    {member.type === "faculty" ? "Faculty" : "Student"}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-6 space-y-3">
                <div>
                  <h3 className="text-xl font-bold text-foreground">{member.name}</h3>
                  <p className="text-primary font-semibold text-sm">{member.role}</p>
                </div>
                <p className="text-sm text-muted-foreground">{member.bio}</p>
                <div className="flex gap-3 pt-2">
                  <button className="w-8 h-8 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-smooth flex items-center justify-center">
                    <Mail className="h-4 w-4" />
                  </button>
                  <button className="w-8 h-8 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-smooth flex items-center justify-center">
                    <Linkedin className="h-4 w-4" />
                  </button>
                  <button className="w-8 h-8 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-smooth flex items-center justify-center">
                    <Github className="h-4 w-4" />
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
