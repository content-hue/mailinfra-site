import { ArrowRight } from 'lucide-react';

export function InlineCTA() {
  return (
    <div className="my-16 text-center">
      <div className="inline-block bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl px-10 py-8 shadow-md">
        <p className="text-[19px] text-gray-900 font-medium mb-4">
          Building outbound infrastructure that actually lands in inboxes?
        </p>
        <a
          href="https://mailinfra.co/trial"
          className="inline-flex items-center gap-2 px-8 py-3.5 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold rounded-lg transition-all shadow-md hover:shadow-lg"
        >
          Try Mailinfra <ArrowRight size={18} />
        </a>
      </div>
    </div>
  );
}