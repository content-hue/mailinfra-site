import { Mail } from 'lucide-react';

export function BlogNewsletter() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 rounded-2xl p-12 shadow-xl">
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Mail className="text-yellow-400" size={48} />
          </div>
          <h3 className="text-3xl font-bold text-white mb-4">
            Get Infrastructure Insights Before Everyone Else
          </h3>
          <p className="text-blue-100 mb-8 text-lg">
            Technical deep dives, case studies, and best practices delivered to your inbox. No spam, ever.
          </p>
          <div className="flex gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-5 py-3.5 rounded-lg border-2 border-blue-600 focus:outline-none focus:border-blue-400 transition-colors text-sm bg-white"
            />
            <button
              type="button"
              className="px-8 py-3.5 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold rounded-lg transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
