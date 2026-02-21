import { Mail } from "lucide-react";
import googleWorkspace from "@/assets/google-workspace.svg";

const Footer = () => {
  const footerLinks = {
    Product: [
      { label: "Features", href: "#features" },
      { label: "Pricing", href: "#pricing" },
    ],
    Resources: [
      { label: "Blog", href: "/blog" },
    ],
    Company: [
      { label: "Contact", href: "#contact" },
    ],
  };

  return (
    <footer className="bg-[#0F172A] pt-10 md:pt-16 pb-6 md:pb-8">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 md:gap-8 lg:gap-12 mb-8 md:mb-12">
          <div className="col-span-2 sm:col-span-1">
            <a href="/" className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
              <Mail className="w-6 h-6 md:w-8 md:h-8 text-white" strokeWidth={2} />
              <span className="text-xl md:text-2xl font-bold text-white tracking-tight">Mailinfra</span>
            </a>
            <p className="text-white/60 mb-4 md:mb-6 max-w-sm text-sm md:text-base">
              Email infrastructure built for modern businesses. Send now, pay later.
            </p>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-base md:text-lg font-semibold text-white mb-3 md:mb-4">{title}</h4>
              <ul className="space-y-2 md:space-y-3">
                {links.map((link, i) => (
                  <li key={i}>
                    <a href={link.href} className="text-white/60 hover:text-white transition-colors text-sm md:text-base min-h-[44px] inline-flex items-center">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-6 md:pt-8 flex flex-col sm:flex-row justify-between items-center gap-3 md:gap-4">
          <p className="text-xs md:text-sm text-white/40">© 2026 Mailinfra. All rights reserved.</p>
          <div className="flex items-center gap-3 md:gap-4 text-[10px] md:text-xs text-white/60">
            <img src={googleWorkspace} alt="Google Workspace" className="h-4 md:h-5 opacity-70" />
            <span>SOC 2 Certified</span>
            <span>GDPR Compliant</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;