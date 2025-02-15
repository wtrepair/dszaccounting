import { FunctionComponent, useCallback, useState } from "react";

export type HeaderType = {
  className?: string;
};

const Header: FunctionComponent<HeaderType> = ({ className = "" }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = useCallback((selector: string) => {
    document.querySelector(`[data-scroll-to='${selector}']`)?.scrollIntoView({
      block: "start",
      behavior: "smooth",
    });
  }, []);

  return (
    <div className={`fixed top-0 left-0 w-full bg-white shadow-md p-4 text-sm text-gray-900 font-text-xl-font-normal z-50 ${className}`}>
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <img className="w-7 h-7" alt="Logo" src="/mountainsun.svg" />
          <div className="font-semibold">Dinesh CPA</div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <img className="w-6 h-6" alt="Menu" src="/menu.svg" />
        </div>

        {/* Navigation & Sign-in Section */}
        <div className={`md:flex items-center gap-6 ${isMenuOpen ? "block" : "hidden"} absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none p-4 md:p-0`}>
          {[
            { label: "Home", action: null },
            { label: "About Us", action: () => scrollToSection("aboutUsContainer1") },
            { label: "Our Services", action: () => scrollToSection("servicesContainer") },
            { label: "Blog", action: null },
            { label: "Contact", action: () => scrollToSection("contactContainer") },
          ].map(({ label, action }) => (
            <div key={label} className="cursor-pointer font-medium py-2 md:py-0" onClick={action || undefined}>
              {label}
            </div>
          ))}

          {/* Divider */}
          <div className="hidden md:block w-px h-5 bg-gray-200" />

          {/* Sign-in & Notification */}
          <div className="cursor-pointer font-medium text-primary-700">Sign In</div>
          <img className="w-5 h-5" alt="Notifications" src="/bell.svg" />
        </div>
      </div>
    </div>
  );
};

export default Header;
