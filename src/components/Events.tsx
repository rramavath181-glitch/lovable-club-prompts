import { Calendar, Clock, MapPin } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import workshopImage from "@/assets/event-workshop.jpg";
import hackathonImage from "@/assets/event-hackathon.jpg";

const Events = () => {
  const upcomingEvents = [
    {
      title: "Web Development Workshop",
      date: "December 15, 2025",
      time: "2:00 PM - 5:00 PM",
      location: "Computer Lab 301",
      description: "Learn modern web development with React, TypeScript, and Tailwind CSS. Hands-on workshop for all skill levels.",
      image: workshopImage,
      type: "Workshop",
    },
    {
      title: "Annual Hackathon 2025",
      date: "January 20-21, 2026",
      time: "24 Hours",
      location: "Main Auditorium",
      description: "48 hours of non-stop coding! Build innovative solutions, win prizes, and network with industry professionals.",
      image: hackathonImage,
      type: "Hackathon",
    },
  ];

  const pastEvents = [
    {
      title: "AI/ML Bootcamp",
      date: "October 2025",
      participants: "120+ students",
      description: "Intensive bootcamp covering machine learning fundamentals and practical AI applications.",
    },
    {
      title: "Tech Talk: Career in Software",
      date: "September 2025",
      participants: "200+ attendees",
      description: "Industry experts shared insights on building successful careers in software development.",
    },
    {
      title: "Code Sprint Challenge",
      date: "August 2025",
      participants: "80+ coders",
      description: "Fast-paced coding competition testing problem-solving skills and algorithmic thinking.",
    },
  ];

  return (
    <section id="events" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Upcoming Events</h2>
          <p className="text-lg text-muted-foreground">
            Join us for exciting workshops, hackathons, and tech talks designed to enhance your coding skills.
          </p>
        </div>

        {/* Upcoming Events */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {upcomingEvents.map((event, index) => (
            <Card key={index} className="overflow-hidden shadow-card hover:shadow-card-hover transition-smooth border-2">
              <div className="h-48 overflow-hidden">
                <img src={event.image} alt={event.title} className="w-full h-full object-cover transition-smooth hover:scale-105" />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="bg-primary/10 text-primary">
                    {event.type}
                  </Badge>
                </div>
                <h3 className="text-2xl font-bold text-foreground">{event.title}</h3>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-4 w-4 text-primary" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="h-4 w-4 text-primary" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>{event.location}</span>
                </div>
                <p className="text-muted-foreground pt-2">{event.description}</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Register Now</Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Past Events */}
        <div>
          <h3 className="text-3xl font-bold text-foreground mb-8 text-center">Past Events</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {pastEvents.map((event, index) => (
              <Card key={index} className="shadow-card hover:shadow-card-hover transition-smooth">
                <CardHeader>
                  <Badge variant="outline" className="w-fit mb-2">
                    Completed
                  </Badge>
                  <h4 className="text-xl font-bold text-foreground">{event.title}</h4>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-primary font-semibold">{event.date}</p>
                  <p className="text-sm text-accent font-semibold">{event.participants}</p>
                  <p className="text-sm text-muted-foreground">{event.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
