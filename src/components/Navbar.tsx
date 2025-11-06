import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Search, BookOpen } from "lucide-react";
import { Input } from "@/components/ui/input";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Books", path: "/books" },
    { label: "Exam Papers", path: "/exam-papers" },
    { label: "Notifications", path: "/notifications" },
    { label: "Current Affairs", path: "/current-affairs" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-card border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-primary hover:text-primary/80 transition-colors">
            <BookOpen className="w-8 h-8" />
            <span className="hidden sm:inline">Knowledge Gainers</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-1">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="px-3 py-2 rounded-md text-sm font-medium text-foreground hover:text-primary hover:bg-secondary transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex items-center gap-2 flex-1 max-w-md mx-4">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search resources..."
                className="pl-10 bg-secondary border-border"
              />
            </div>
          </div>

          {/* Right Side Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link to="/portfolio">
              <Button variant="outline" size="sm">
                Portfolio
              </Button>
            </Link>
            <Button variant="default" size="sm">
              Login / Register
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md hover:bg-secondary"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 space-y-2 border-t border-border">
            {/* Mobile Search */}
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search resources..."
                className="pl-10 bg-secondary border-border"
              />
            </div>

            {/* Mobile Menu Items */}
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-2 rounded-md text-sm font-medium text-foreground hover:text-primary hover:bg-secondary transition-colors"
              >
                {item.label}
              </Link>
            ))}

            {/* Mobile Buttons */}
            <div className="flex flex-col gap-2 pt-4">
              <Link to="/portfolio" onClick={() => setIsMenuOpen(false)}>
                <Button variant="outline" size="sm" className="w-full">
                  Portfolio
                </Button>
              </Link>
              <Button variant="default" size="sm" className="w-full">
                Login / Register
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
