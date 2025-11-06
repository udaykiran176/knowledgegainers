import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Users, Heart, Award } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To democratize education by providing free access to quality study materials and resources for competitive exam preparation."
    },
    {
      icon: Users,
      title: "Community First",
      description: "Building a supportive community of learners who help each other succeed in their academic and professional goals."
    },
    {
      icon: Heart,
      title: "Passion for Education",
      description: "Driven by the belief that every student deserves access to excellent educational resources regardless of their background."
    },
    {
      icon: Award,
      title: "Quality Content",
      description: "Curating and creating high-quality, exam-focused content that truly helps students achieve their goals."
    }
  ];

  const team = [
    {
      name: "Rajesh Kumar",
      role: "Founder & Content Lead",
      description: "B.Tech graduate passionate about making education accessible to all."
    },
    {
      name: "Priya Sharma",
      role: "Academic Coordinator",
      description: "Former competitive exam topper dedicated to helping students succeed."
    },
    {
      name: "Amit Patel",
      role: "Technical Lead",
      description: "Software engineer committed to building tools that empower learners."
    },
    {
      name: "Sneha Reddy",
      role: "Content Curator",
      description: "Education specialist focused on quality study materials and current affairs."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 py-8 px-4">
        <div className="container mx-auto">
          {/* Hero Section */}
          <section className="mb-16 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              About <span className="text-primary">Knowledge Gainers</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Knowledge Gainers was founded with a simple yet powerful vision: to make quality education 
              accessible to every student preparing for competitive exams in India. We believe that financial 
              constraints should never be a barrier to accessing excellent study materials.
            </p>
          </section>

          {/* Story Section */}
          <section className="mb-16">
            <Card className="overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-primary/10 to-accent/10">
                <CardTitle className="text-3xl">Our Story</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Knowledge Gainers began in 2020 when a group of engineering students realized that many 
                    talented aspirants couldn't afford expensive coaching materials and books. What started 
                    as a small initiative to share study materials among friends quickly grew into a 
                    comprehensive platform serving thousands of students across India.
                  </p>
                  <p>
                    Today, we're proud to offer one of the most comprehensive free resources for competitive 
                    exam preparation, including books for various exams, previous year papers, timely 
                    notifications, and daily current affairs updates. Our platform has helped students 
                    prepare for SSC, Railway, Banking, Defence, EAMCET, ECET, and many other competitive exams.
                  </p>
                  <p>
                    We're constantly expanding our library and improving our platform based on feedback from 
                    our community of learners. Every success story from our users motivates us to do more 
                    and reach more students who need quality educational resources.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Values Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-10 text-foreground">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <Card key={index} className="hover:shadow-[var(--shadow-hover)] transition-all duration-300">
                    <CardHeader>
                      <Icon className="w-12 h-12 text-primary mb-4" />
                      <CardTitle className="text-xl">{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </section>

          {/* Team Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-10 text-foreground">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member, index) => (
                <Card key={index} className="hover:shadow-[var(--shadow-hover)] transition-all duration-300 text-center">
                  <CardHeader>
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                      <Users className="w-12 h-12 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{member.name}</CardTitle>
                    <p className="text-sm text-primary font-medium">{member.role}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{member.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Impact Section */}
          <section className="mb-16">
            <Card className="bg-gradient-to-r from-primary/10 to-accent/10">
              <CardContent className="p-8 md:p-12 text-center">
                <h2 className="text-3xl font-bold mb-6 text-foreground">Our Impact</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                  <div>
                    <div className="text-4xl font-bold text-primary mb-2">50,000+</div>
                    <div className="text-muted-foreground">Active Users</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-primary mb-2">15,000+</div>
                    <div className="text-muted-foreground">Resources Available</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-primary mb-2">100,000+</div>
                    <div className="text-muted-foreground">Downloads</div>
                  </div>
                </div>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  These numbers represent real students whose preparation journey we've been honored to support. 
                  Every download, every resource accessed, and every success story inspires us to keep going.
                </p>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
