import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, Globe } from "lucide-react";

const Portfolio = () => {
  const contributors = [
    {
      name: "Rajesh Kumar",
      role: "Founder & Lead Developer",
      skills: ["Full Stack Development", "Content Strategy", "Project Management"],
      bio: "Passionate about democratizing education through technology. B.Tech graduate with 5+ years of experience in EdTech.",
      links: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        email: "rajesh@knowledgegainers.com"
      }
    },
    {
      name: "Priya Sharma",
      role: "Academic Coordinator",
      skills: ["Content Curation", "Exam Strategy", "Student Mentoring"],
      bio: "Former SSC topper and competitive exam expert. Dedicated to helping students achieve their goals.",
      links: {
        linkedin: "https://linkedin.com",
        email: "priya@knowledgegainers.com"
      }
    },
    {
      name: "Amit Patel",
      role: "Technical Lead",
      skills: ["React", "Node.js", "Database Design"],
      bio: "Software engineer committed to building scalable and user-friendly educational platforms.",
      links: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        website: "https://amitpatel.dev"
      }
    },
    {
      name: "Sneha Reddy",
      role: "Content Curator",
      skills: ["Research", "Writing", "Current Affairs"],
      bio: "Education specialist focused on creating high-quality study materials and daily current affairs updates.",
      links: {
        linkedin: "https://linkedin.com",
        email: "sneha@knowledgegainers.com"
      }
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 py-8 px-4">
        <div className="container mx-auto">
          {/* Header */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold mb-4 text-foreground">Our Contributors</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Meet the dedicated team behind Knowledge Gainers who work tirelessly to bring you 
              quality educational resources.
            </p>
          </div>

          {/* Contributors Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {contributors.map((contributor, index) => (
              <Card key={index} className="hover:shadow-[var(--shadow-hover)] transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl font-bold text-primary">
                        {contributor.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-1">{contributor.name}</CardTitle>
                      <p className="text-primary font-medium text-sm mb-3">{contributor.role}</p>
                      <div className="flex flex-wrap gap-2">
                        {contributor.skills.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {contributor.bio}
                  </p>
                  <div className="flex gap-3 pt-2">
                    {contributor.links.github && (
                      <a
                        href={contributor.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg hover:bg-secondary transition-colors"
                        aria-label="GitHub"
                      >
                        <Github className="w-5 h-5 text-muted-foreground hover:text-foreground" />
                      </a>
                    )}
                    {contributor.links.linkedin && (
                      <a
                        href={contributor.links.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg hover:bg-secondary transition-colors"
                        aria-label="LinkedIn"
                      >
                        <Linkedin className="w-5 h-5 text-muted-foreground hover:text-foreground" />
                      </a>
                    )}
                    {contributor.links.website && (
                      <a
                        href={contributor.links.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg hover:bg-secondary transition-colors"
                        aria-label="Website"
                      >
                        <Globe className="w-5 h-5 text-muted-foreground hover:text-foreground" />
                      </a>
                    )}
                    {contributor.links.email && (
                      <a
                        href={`mailto:${contributor.links.email}`}
                        className="p-2 rounded-lg hover:bg-secondary transition-colors"
                        aria-label="Email"
                      >
                        <Mail className="w-5 h-5 text-muted-foreground hover:text-foreground" />
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Join Us Section */}
          <div className="mt-16 text-center">
            <Card className="max-w-2xl mx-auto bg-gradient-to-r from-primary/10 to-accent/10 border-none">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-foreground">Want to Contribute?</h2>
                <p className="text-muted-foreground mb-6">
                  We're always looking for passionate individuals who want to help make education 
                  accessible to everyone. If you're interested in contributing content, technical 
                  expertise, or ideas, we'd love to hear from you!
                </p>
                <a href="/contact">
                  <Badge className="cursor-pointer hover:opacity-80 transition-opacity px-6 py-2 text-sm">
                    Get in Touch
                  </Badge>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Portfolio;
