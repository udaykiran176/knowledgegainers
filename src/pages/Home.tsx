import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, FileText, Bell, TrendingUp, ArrowRight, Download, Award } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Home = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Extensive Book Library",
      description: "Access thousands of books for competitive exams, engineering, and general knowledge.",
      link: "/books",
    },
    {
      icon: FileText,
      title: "Previous Year Papers",
      description: "Practice with authentic exam papers from Polycet, ECET, EAMCET, and more.",
      link: "/exam-papers",
    },
    {
      icon: Bell,
      title: "Latest Notifications",
      description: "Stay updated with exam notifications, application deadlines, and job alerts.",
      link: "/notifications",
    },
    {
      icon: TrendingUp,
      title: "Current Affairs",
      description: "Daily updates on current events, GK, and topics relevant for competitive exams.",
      link: "/current-affairs",
    },
  ];

  const recentUpdates = [
    { type: "Book", title: "SSC CGL Complete Guide 2024", category: "Job Books", date: "2 days ago" },
    { type: "Paper", title: "EAMCET 2023 Question Paper", category: "Engineering", date: "3 days ago" },
    { type: "Notification", title: "Army Recruitment Notification", category: "Jobs", date: "1 day ago" },
  ];

  const stats = [
    { label: "Books Available", value: "10,000+", icon: BookOpen },
    { label: "Exam Papers", value: "5,000+", icon: FileText },
    { label: "Active Users", value: "50,000+", icon: Award },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[var(--gradient-hero)] opacity-10"></div>
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
            Learn. Prepare. <span className="text-primary">Succeed.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Your one-stop resource for competitive exam preparation. Access books, exam papers, notifications, and current affairs - all in one place.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/books">
              <Button variant="hero" size="lg">
                Explore Resources <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <Icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            About Knowledge Gainers
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Knowledge Gainers is dedicated to making quality education accessible to everyone. 
            We provide free resources for students and job aspirants preparing for competitive exams. 
            Our platform brings together comprehensive study materials, previous year papers, timely notifications, 
            and current affairs updates to help you succeed in your academic and professional journey.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            What We Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Link key={index} to={feature.link}>
                  <Card className="h-full hover:shadow-[var(--shadow-hover)] transition-all duration-300 group cursor-pointer">
                    <CardHeader>
                      <Icon className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{feature.description}</CardDescription>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Recent Updates Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Recent Updates
            </h2>
            <Link to="/notifications">
              <Button variant="ghost">
                View All <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentUpdates.map((update, index) => (
              <Card key={index} className="hover:shadow-[var(--shadow-hover)] transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    {update.type === "Book" && <BookOpen className="w-5 h-5 text-primary" />}
                    {update.type === "Paper" && <FileText className="w-5 h-5 text-primary" />}
                    {update.type === "Notification" && <Bell className="w-5 h-5 text-primary" />}
                    <span className="text-xs text-muted-foreground">{update.type}</span>
                  </div>
                  <CardTitle className="text-lg">{update.title}</CardTitle>
                  <CardDescription>{update.category} • {update.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" size="sm" className="w-full">
                    <Download className="w-4 h-4 mr-2" />
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
