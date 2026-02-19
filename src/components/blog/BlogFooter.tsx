export function BlogFooter() {
  return (
    <footer className="bg-[#071326] mt-24">
      <div className="max-w-7xl mx-auto px-12 pt-20 pb-12">
        <div className="grid md:grid-cols-4 gap-16 mb-16">
          <div className="md:col-span-1">
            <div className="text-2xl font-bold text-white mb-4">Mailinfra</div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Email infrastructure built for modern businesses.<br />
              Send now, pay later.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-5">Product</h4>
            <ul className="space-y-3">
              <li><a href="https://mailinfra.co/#features" className="text-sm text-gray-400 hover:text-white transition-colors">Features</a></li>
              <li><a href="https://mailinfra.co/#pricing" className="text-sm text-gray-400 hover:text-white transition-colors">Pricing</a></li>
              <li><a href="https://mailinfra.co/docs" className="text-sm text-gray-400 hover:text-white transition-colors">Documentation</a></li>
              <li><a href="https://mailinfra.co/api" className="text-sm text-gray-400 hover:text-white transition-colors">API Reference</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-5">Resources</h4>
            <ul className="space-y-3">
              <li><a href="/blog" className="text-sm text-gray-400 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Guides</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Support</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-5">Company</h4>
            <ul className="space-y-3">
              <li><a href="https://mailinfra.co/about" className="text-sm text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="https://mailinfra.co/contact" className="text-sm text-gray-400 hover:text-white transition-colors">Contact</a></li>
              <li><a href="https://mailinfra.co/terms" className="text-sm text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="https://mailinfra.co/privacy" className="text-sm text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-gray-500">© 2026 Mailinfra. All rights reserved.</p>
          <div className="flex items-center gap-8">
            {[
              { label: 'Google Workspace', d: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' },
              { label: 'SOC 2 Certified', d: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
              { label: 'GDPR Compliant', d: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z' },
            ].map(({ label, d }) => (
              <div key={label} className="flex items-center gap-2 text-xs text-gray-500">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={d} />
                </svg>
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
