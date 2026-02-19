import { ArrowRight, Mail } from 'lucide-react';

export function EmptyState() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-32 text-center">
      <div className="max-w-md mx-auto">
        <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <Mail className="text-blue-600" size={32} />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-3">Articles coming soon.</h3>
        <p className="text-gray-600 mb-8">
          We're working on new content. Check back soon for technical insights and infrastructure guides.
        </p>
        <a
          href="/blog"
          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-lg transition-colors"
        >
          View All Articles <ArrowRight size={18} />
        </a>
      </div>
    </section>
  );
}
