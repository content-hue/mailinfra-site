export function BlogFooter() {
  return (
    <footer className="bg-[#071326] mt-16 sm:mt-20 md:mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-12 sm:pt-16 md:pt-20 pb-8 sm:pb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 md:gap-16 mb-12 sm:mb-16">
          <div className="col-span-2 md:col-span-1">
            <div className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Mailinfra</div>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
              Email infrastructure built for modern businesses.<br />
              Send now, pay later.
            </p>
          </div>
          <div>
            <h4 className="text-sm sm:text-base font-semibold text-white mb-4 sm:mb-5">Product</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li><a href="https://mailinfra.co/#features" className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors">Features</a></li>
              <li><a href="https://mailinfra.co/#pricing" className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm sm:text-base font-semibold text-white mb-4 sm:mb-5">Resources</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li><a href="/blog" className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm sm:text-base font-semibold text-white mb-4 sm:mb-5">Company</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li><a href="https://mailinfra.co/contact" className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-6 sm:pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
          <p className="text-xs sm:text-sm text-gray-500 text-center md:text-left">© 2026 Mailinfra. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8">
            {[
              { label: 'Google Workspace', d: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' },
              { label: 'SOC 2 Certified', d: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
              { label: 'GDPR Compliant', d: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z' },
            ].map(({ label, d }) => (
              <div key={label} className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs text-gray-500">
                <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={d} />
                </svg>
                <span className="whitespace-nowrap">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}