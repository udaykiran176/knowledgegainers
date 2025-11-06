import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bell, Calendar, ExternalLink } from "lucide-react";

interface NotificationCardProps {
  title: string;
  description: string;
  type: "exam" | "job" | "application" | "process";
  date: string;
  link?: string;
}

const NotificationCard = ({ title, description, type, date, link }: NotificationCardProps) => {
  const typeColors = {
    exam: "bg-blue-500/10 text-blue-700 dark:text-blue-400",
    job: "bg-green-500/10 text-green-700 dark:text-green-400",
    application: "bg-purple-500/10 text-purple-700 dark:text-purple-400",
    process: "bg-orange-500/10 text-orange-700 dark:text-orange-400",
  };

  return (
    <Card className="hover:shadow-[var(--shadow-hover)] transition-all duration-300">
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <Bell className="w-4 h-4 text-primary" />
              <Badge className={typeColors[type]}>
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </Badge>
            </div>
            <CardTitle className="text-lg">{title}</CardTitle>
          </div>
        </div>
        <CardDescription className="flex items-center gap-2 mt-2">
          <Calendar className="w-4 h-4" />
          {date}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground text-sm">{description}</p>
      </CardContent>
      {link && (
        <CardFooter>
          <Button variant="default" size="sm" className="w-full" asChild>
            <a href={link} target="_blank" rel="noopener noreferrer">
              Apply Now <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};

export default NotificationCard;
