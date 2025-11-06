import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Download } from "lucide-react";

interface BookCardProps {
  title: string;
  category: string;
  image?: string;
  onDownload?: () => void;
}

const BookCard = ({ title, category, image, onDownload }: BookCardProps) => {
  return (
    <Card className="group hover:shadow-[var(--shadow-hover)] transition-all duration-300 overflow-hidden">
      <CardHeader className="p-0">
        <div className="aspect-[3/4] bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center overflow-hidden">
          {image ? (
            <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
          ) : (
            <BookOpen className="w-16 h-16 text-primary/30 group-hover:text-primary/50 transition-colors" />
          )}
        </div>
      </CardHeader>
      <CardContent className="p-4 space-y-2">
        <Badge variant="secondary" className="mb-2">
          {category}
        </Badge>
        <CardTitle className="text-base line-clamp-2">{title}</CardTitle>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button
          variant="default"
          size="sm"
          className="w-full"
          onClick={onDownload}
        >
          <Download className="w-4 h-4 mr-2" />
          Download PDF
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BookCard;
