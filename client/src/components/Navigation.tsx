import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img 
            src="/images/teng-logo.jpg" 
            alt="$TENG Logo" 
            className="h-10 w-10 rounded-full object-cover"
          />
          <span className="text-xl font-bold text-gradient-gold">$TENG</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#vision" className="text-foreground hover:text-accent transition-colors">品牌视觉</a>
          <a href="#social" className="text-foreground hover:text-accent transition-colors">社交矩阵</a>
          <a href="#launch" className="text-foreground hover:text-accent transition-colors">公平发射</a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-foreground hover:text-accent transition-colors"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-card border-t border-border">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <a href="#vision" className="text-foreground hover:text-accent transition-colors">品牌视觉</a>
            <a href="#social" className="text-foreground hover:text-accent transition-colors">社交矩阵</a>
            <a href="#launch" className="text-foreground hover:text-accent transition-colors">公平发射</a>
          </div>
        </div>
      )}
    </nav>
  );
}
