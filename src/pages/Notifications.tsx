import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NotificationCard from "@/components/NotificationCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const Notifications = () => {
  const [filter, setFilter] = useState("all");

  const notifications = [
    {
      title: "SSC CGL 2024 Notification Released",
      description: "Staff Selection Commission has released the notification for Combined Graduate Level Examination 2024. Last date to apply is March 30, 2024.",
      type: "exam" as const,
      date: "March 1, 2024",
      link: "https://ssc.nic.in",
    },
    {
      title: "Indian Army Agniveer Recruitment",
      description: "Applications invited for Agniveer General Duty positions. Physical tests will begin from April 2024. Age limit: 17.5 to 21 years.",
      type: "job" as const,
      date: "February 28, 2024",
      link: "https://joinindianarmy.nic.in",
    },
    {
      title: "EAMCET 2024 Application Process",
      description: "TS EAMCET 2024 application process has started. Engineering and Medical aspirants can apply online. Last date: March 25, 2024.",
      type: "application" as const,
      date: "February 25, 2024",
      link: "https://eamcet.tsche.ac.in",
    },
    {
      title: "Railway RRB NTPC Admit Card",
      description: "Railway Recruitment Board has released admit cards for NTPC CBT-2 exam. Download from the official website using registration number.",
      type: "process" as const,
      date: "February 20, 2024",
      link: "https://rrbonlinereg.in",
    },
    {
      title: "UPSC Civil Services Preliminary Exam",
      description: "UPSC has announced the Civil Services Preliminary Examination date: May 26, 2024. Registration closes on March 15, 2024.",
      type: "exam" as const,
      date: "February 15, 2024",
      link: "https://upsc.gov.in",
    },
    {
      title: "State Police Recruitment 2024",
      description: "State Police Department is hiring for Constable and Sub-Inspector positions. Total vacancies: 5000+. Apply before March 20, 2024.",
      type: "job" as const,
      date: "February 10, 2024",
      link: "#",
    },
    {
      title: "GATE 2024 Result Announced",
      description: "IIT has announced GATE 2024 results. Candidates can check their scores and download score cards from the official portal.",
      type: "process" as const,
      date: "February 5, 2024",
      link: "https://gate.iitm.ac.in",
    },
    {
      title: "Banking PO Recruitment",
      description: "Multiple Public Sector Banks are recruiting for Probationary Officer positions. Common written exam scheduled for April 2024.",
      type: "job" as const,
      date: "January 30, 2024",
      link: "#",
    },
  ];

  const filteredNotifications = filter === "all" 
    ? notifications 
    : notifications.filter(n => n.type === filter);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 py-8 px-4">
        <div className="container mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4 text-foreground">Notifications</h1>
            <p className="text-muted-foreground text-lg">
              Stay updated with the latest exam notifications, job alerts, and application deadlines.
            </p>
          </div>

          {/* Filter Tabs */}
          <Tabs defaultValue="all" className="w-full mb-8">
            <TabsList className="mb-6">
              <TabsTrigger value="all" onClick={() => setFilter("all")}>
                All Notifications
                <Badge variant="secondary" className="ml-2">{notifications.length}</Badge>
              </TabsTrigger>
              <TabsTrigger value="exam" onClick={() => setFilter("exam")}>
                Exams
                <Badge variant="secondary" className="ml-2">
                  {notifications.filter(n => n.type === "exam").length}
                </Badge>
              </TabsTrigger>
              <TabsTrigger value="job" onClick={() => setFilter("job")}>
                Jobs
                <Badge variant="secondary" className="ml-2">
                  {notifications.filter(n => n.type === "job").length}
                </Badge>
              </TabsTrigger>
              <TabsTrigger value="application" onClick={() => setFilter("application")}>
                Applications
                <Badge variant="secondary" className="ml-2">
                  {notifications.filter(n => n.type === "application").length}
                </Badge>
              </TabsTrigger>
              <TabsTrigger value="process" onClick={() => setFilter("process")}>
                Processes
                <Badge variant="secondary" className="ml-2">
                  {notifications.filter(n => n.type === "process").length}
                </Badge>
              </TabsTrigger>
            </TabsList>
          </Tabs>

          {/* Notifications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredNotifications.map((notification, index) => (
              <NotificationCard
                key={index}
                title={notification.title}
                description={notification.description}
                type={notification.type}
                date={notification.date}
                link={notification.link}
              />
            ))}
          </div>

          {filteredNotifications.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No notifications found in this category.</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Notifications;
