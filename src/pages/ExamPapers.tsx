import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, Download } from "lucide-react";

const ExamPapers = () => {
  const examCategories = [
    {
      title: "Polycet Papers",
      description: "Polytechnic Common Entrance Test previous year papers",
      papers: [
        { year: "2023", subject: "Mathematics", downloads: "2.5k" },
        { year: "2023", subject: "Physics", downloads: "2.1k" },
        { year: "2022", subject: "Mathematics", downloads: "3.2k" },
        { year: "2022", subject: "Chemistry", downloads: "2.8k" },
      ],
    },
    {
      title: "10th Class Papers",
      description: "SSC / 10th standard previous year question papers",
      papers: [
        { year: "2023", subject: "Mathematics", downloads: "5.2k" },
        { year: "2023", subject: "Science", downloads: "4.8k" },
        { year: "2022", subject: "English", downloads: "4.1k" },
        { year: "2022", subject: "Social Studies", downloads: "3.9k" },
      ],
    },
    {
      title: "12th Class Papers",
      description: "Intermediate / 12th standard previous year question papers",
      papers: [
        { year: "2023", subject: "Mathematics", downloads: "4.5k" },
        { year: "2023", subject: "Physics", downloads: "4.2k" },
        { year: "2022", subject: "Chemistry", downloads: "3.8k" },
        { year: "2022", subject: "Biology", downloads: "3.5k" },
      ],
    },
    {
      title: "ECET Papers",
      description: "Engineering Common Entrance Test previous year papers",
      papers: [
        { year: "2023", subject: "Mathematics", downloads: "3.8k" },
        { year: "2023", subject: "Technical", downloads: "3.5k" },
        { year: "2022", subject: "Mathematics", downloads: "4.2k" },
        { year: "2022", subject: "Technical", downloads: "3.9k" },
      ],
    },
    {
      title: "EAMCET Papers",
      description: "Engineering, Agriculture & Medical Common Entrance Test papers",
      papers: [
        { year: "2023", subject: "Physics", downloads: "6.5k" },
        { year: "2023", subject: "Chemistry", downloads: "6.2k" },
        { year: "2023", subject: "Mathematics", downloads: "5.8k" },
        { year: "2022", subject: "Biology", downloads: "5.5k" },
      ],
    },
    {
      title: "Job Exam Papers",
      description: "Competitive job exam papers - SSC, Railway, Banking, etc.",
      papers: [
        { year: "2023", subject: "SSC CGL", downloads: "8.5k" },
        { year: "2023", subject: "Railway RRB", downloads: "7.8k" },
        { year: "2023", subject: "Banking PO", downloads: "7.2k" },
        { year: "2022", subject: "SSC CHSL", downloads: "6.8k" },
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 py-8 px-4">
        <div className="container mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4 text-foreground">Exam Papers</h1>
            <p className="text-muted-foreground text-lg">
              Access previous year question papers for various competitive exams and board exams.
            </p>
          </div>

          {/* Exam Categories Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {examCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-[var(--shadow-hover)] transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-2">{category.title}</CardTitle>
                      <CardDescription>{category.description}</CardDescription>
                    </div>
                    <FileText className="w-10 h-10 text-primary" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {category.papers.map((paper, paperIndex) => (
                      <div
                        key={paperIndex}
                        className="flex items-center justify-between p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                      >
                        <div className="flex items-center gap-3 flex-1">
                          <Badge variant="outline">{paper.year}</Badge>
                          <span className="font-medium text-sm">{paper.subject}</span>
                          <span className="text-xs text-muted-foreground ml-auto mr-3">
                            {paper.downloads} downloads
                          </span>
                        </div>
                        <Button variant="ghost" size="sm">
                          <Download className="w-4 h-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full mt-4">
                    View All Papers
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ExamPapers;
