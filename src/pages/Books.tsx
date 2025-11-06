import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookCard from "@/components/BookCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const Books = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const bookCategories = [
    {
      id: "job",
      label: "Job Books",
      books: [
        { title: "SSC CGL Complete Guide 2024", category: "SSC" },
        { title: "Army Recruitment Exam Preparation", category: "Defence" },
        { title: "Navy Guide Book 2024", category: "Defence" },
        { title: "Police Constable Exam Guide", category: "Police" },
        { title: "Railway RRB NTPC Guide", category: "Railway" },
        { title: "Banking PO Complete Guide", category: "Banking" },
      ],
    },
    {
      id: "current-affairs",
      label: "Current Affairs",
      books: [
        { title: "Current Affairs 2024 - Complete Guide", category: "GK" },
        { title: "Monthly Current Affairs Digest", category: "GK" },
        { title: "Banking Awareness 2024", category: "Banking" },
        { title: "Indian Economy & Current Affairs", category: "Economy" },
      ],
    },
    {
      id: "gk",
      label: "General Knowledge",
      books: [
        { title: "Lucent's General Knowledge", category: "GK" },
        { title: "Indian History & Culture", category: "History" },
        { title: "Indian Polity by Laxmikant", category: "Polity" },
        { title: "Geography of India", category: "Geography" },
        { title: "General Science for Competitive Exams", category: "Science" },
      ],
    },
    {
      id: "engineering",
      label: "Engineering Books",
      books: [
        { title: "Engineering Mathematics by RK Kanodia", category: "Mathematics" },
        { title: "Technical Aptitude for GATE", category: "GATE" },
        { title: "Digital Electronics Fundamentals", category: "Electronics" },
        { title: "Data Structures & Algorithms", category: "Computer Science" },
        { title: "Engineering Physics", category: "Physics" },
      ],
    },
    {
      id: "history",
      label: "History Books",
      books: [
        { title: "Indian History - Ancient Period", category: "Ancient" },
        { title: "Medieval Indian History", category: "Medieval" },
        { title: "Modern Indian History", category: "Modern" },
        { title: "World History for Competitive Exams", category: "World" },
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
            <h1 className="text-4xl font-bold mb-4 text-foreground">Book Library</h1>
            <p className="text-muted-foreground text-lg">
              Browse and download books for competitive exam preparation across various categories.
            </p>
          </div>

          {/* Search Bar */}
          <div className="mb-8 max-w-2xl">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search books by title, category, or subject..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12 bg-card border-border"
              />
            </div>
          </div>

          {/* Books by Category */}
          <Tabs defaultValue="job" className="w-full">
            <TabsList className="mb-8 flex-wrap h-auto gap-2">
              {bookCategories.map((category) => (
                <TabsTrigger key={category.id} value={category.id} className="px-6">
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {bookCategories.map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {category.books
                    .filter((book) =>
                      searchQuery === "" ||
                      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                      book.category.toLowerCase().includes(searchQuery.toLowerCase())
                    )
                    .map((book, index) => (
                      <BookCard
                        key={index}
                        title={book.title}
                        category={book.category}
                        onDownload={() => console.log(`Downloading ${book.title}`)}
                      />
                    ))}
                </div>
                {category.books.filter((book) =>
                  searchQuery === "" ||
                  book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  book.category.toLowerCase().includes(searchQuery.toLowerCase())
                ).length === 0 && (
                  <div className="text-center py-12">
                    <p className="text-muted-foreground">No books found matching your search.</p>
                  </div>
                )}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Books;
