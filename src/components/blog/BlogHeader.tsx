export function BlogHeader() {
  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 border-b border-white border-opacity-10">
      <div className="max-w-7xl mx-auto px-12 py-5 flex items-center justify-between">
        <a href="https://mailinfra.co" className="text-2xl font-bold text-white hover:opacity-90 transition-opacity">
          Mailinfra
        </a>
        <nav className="flex items-center gap-10">
          <a href="https://mailinfra.co/#features" className="text-sm font-medium text-white hover:text-gray-100 transition-colors">
            Features
          </a>
          <a href="https://mailinfra.co/#pricing" className="text-sm font-medium text-white hover:text-gray-100 transition-colors">
            Pricing
          </a>
          <a href="https://mailinfra.co/trial"
            className="px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold rounded-lg transition-all shadow-md hover:shadow-lg">
            Start Free Trial →
          </a>
        </nav>
      </div>
    </header>
  );
}
