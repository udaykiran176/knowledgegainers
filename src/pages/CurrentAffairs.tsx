import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Download, TrendingUp, Globe, Newspaper } from "lucide-react";

const CurrentAffairs = () => {
  const monthlyUpdates = [
    {
      month: "March 2024",
      topics: 25,
      downloads: "3.2k",
      featured: true,
    },
    {
      month: "February 2024",
      topics: 28,
      downloads: "4.5k",
      featured: false,
    },
    {
      month: "January 2024",
      topics: 30,
      downloads: "5.1k",
      featured: false,
    },
  ];

  const dailyUpdates = [
    {
      date: "March 5, 2024",
      title: "India's Economic Growth Forecast Revised",
      category: "Economy",
      summary: "IMF revises India's GDP growth forecast to 6.8% for FY 2024-25, citing strong domestic demand and infrastructure investments.",
    },
    {
      date: "March 4, 2024",
      title: "New Space Mission Announced by ISRO",
      category: "Science & Technology",
      summary: "ISRO announces Gaganyaan-2 mission scheduled for late 2024, marking India's next step in human spaceflight program.",
    },
    {
      date: "March 3, 2024",
      title: "International Climate Summit Outcomes",
      category: "Environment",
      summary: "Global leaders commit to accelerated climate action with new emission reduction targets at the UN Climate Summit.",
    },
    {
      date: "March 2, 2024",
      title: "Supreme Court Landmark Judgment",
      category: "Law & Governance",
      summary: "Supreme Court delivers historic verdict on digital privacy rights, strengthening data protection framework.",
    },
    {
      date: "March 1, 2024",
      title: "India Wins Cricket World Cup 2024",
      category: "Sports",
      summary: "Team India clinches ICC World Cup 2024 with a thrilling victory in the final match against Australia.",
    },
  ];

  const categories = [
    { name: "National Affairs", icon: Globe, count: 45 },
    { name: "International Affairs", icon: Globe, count: 38 },
    { name: "Economy & Business", icon: TrendingUp, count: 32 },
    { name: "Science & Technology", icon: TrendingUp, count: 28 },
    { name: "Sports", icon: TrendingUp, count: 25 },
    { name: "Awards & Honors", icon: TrendingUp, count: 20 },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 py-8 px-4">
        <div className="container mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4 text-foreground">Current Affairs & GK</h1>
            <p className="text-muted-foreground text-lg">
              Stay updated with daily current affairs and general knowledge for competitive exams.
            </p>
          </div>

          {/* Monthly Updates Section */}
          <section className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-foreground">Monthly Compilations</h2>
              <Calendar className="w-6 h-6 text-primary" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {monthlyUpdates.map((update, index) => (
                <Card key={index} className={`hover:shadow-[var(--shadow-hover)] transition-all duration-300 ${update.featured ? 'ring-2 ring-primary' : ''}`}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl mb-2">{update.month}</CardTitle>
                        {update.featured && (
                          <Badge className="mb-2">Latest</Badge>
                        )}
                        <CardDescription>{update.topics} topics covered</CardDescription>
                      </div>
                      <Newspaper className="w-8 h-8 text-primary" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="text-sm text-muted-foreground">
                        {update.downloads} downloads
                      </div>
                      <Button variant="default" className="w-full">
                        <Download className="w-4 h-4 mr-2" />
                        Download PDF
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Categories Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">Categories</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {categories.map((category, index) => {
                const Icon = category.icon;
                return (
                  <Card key={index} className="hover:shadow-[var(--shadow-hover)] transition-all duration-300 cursor-pointer group">
                    <CardContent className="p-4 text-center">
                      <Icon className="w-8 h-8 text-primary mx-auto mb-2 group-hover:scale-110 transition-transform" />
                      <div className="font-medium text-sm mb-1">{category.name}</div>
                      <div className="text-xs text-muted-foreground">{category.count} updates</div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </section>

          {/* Daily Updates Section */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-6">Recent Daily Updates</h2>
            <div className="space-y-4">
              {dailyUpdates.map((update, index) => (
                <Card key={index} className="hover:shadow-[var(--shadow-hover)] transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="outline">{update.category}</Badge>
                          <span className="text-sm text-muted-foreground">{update.date}</span>
                        </div>
                        <CardTitle className="text-xl mb-2">{update.title}</CardTitle>
                        <CardDescription>{update.summary}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" size="sm">
                      Read More
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Quiz Section */}
          <section className="mt-12 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">Test Your Knowledge</h2>
            <p className="text-muted-foreground mb-6">
              Take interactive quizzes on current affairs and improve your preparation
            </p>
            <Button variant="hero" size="lg">
              Take a Quiz
            </Button>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CurrentAffairs;
