import { ArrowRight } from 'lucide-react';

export function PreFooterCTA() {
  return (
    <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 py-20 mt-24">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
          Infrastructure That Delivers — Before You Pay.
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Start sending with production-grade email infrastructure. No upfront costs, no credit card required.
        </p>
        <a
          href="https://mailinfra.co/trial"
          className="inline-flex items-center gap-2 px-10 py-4 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold rounded-lg transition-all shadow-lg hover:shadow-xl text-lg"
        >
          Start Free Trial <ArrowRight size={20} />
        </a>
      </div>
    </section>
  );
}
