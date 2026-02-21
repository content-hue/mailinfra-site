import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function BlogHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 border-b border-white border-opacity-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-5 flex items-center justify-between">
        <a href="https://mailinfra.co" className="text-xl sm:text-2xl font-bold text-white hover:opacity-90 transition-opacity">
          Mailinfra
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-10">
          <a href="https://mailinfra.co/#features" className="text-sm font-medium text-white hover:text-gray-100 transition-colors">
            Features
          </a>
          <a href="https://mailinfra.co/#pricing" className="text-sm font-medium text-white hover:text-gray-100 transition-colors">
            Pricing
          </a>
          <a href="https://mailinfra.co/trial"
            className="px-4 lg:px-6 py-2 lg:py-3 bg-yellow-400 hover:bg-yellow-500 text-gray-900 text-sm font-semibold rounded-lg transition-all shadow-md hover:shadow-lg">
            Start Free Trial →
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-blue-800 border-t border-white/10">
          <nav className="px-4 py-4 flex flex-col gap-4">
            <a href="https://mailinfra.co/#features" className="text-sm font-medium text-white hover:text-gray-100 transition-colors py-2">
              Features
            </a>
            <a href="https://mailinfra.co/#pricing" className="text-sm font-medium text-white hover:text-gray-100 transition-colors py-2">
              Pricing
            </a>
            <a href="https://mailinfra.co/trial"
              className="px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-gray-900 text-sm font-semibold rounded-lg transition-all shadow-md text-center">
              Start Free Trial →
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}