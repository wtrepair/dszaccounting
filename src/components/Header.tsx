import { FunctionComponent, useCallback, useState, useEffect } from "react";

export type HeaderType = {
  className?: string;
};

const Header: FunctionComponent<HeaderType> = ({ className = "" }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = useCallback((selector: string) => {
    if (window.location.pathname === "/") {
      const element = document.querySelector(`[data-scroll-to='${selector}']`);
      if (element) {
        element.scrollIntoView({
          block: "start",
          behavior: "smooth",
        });
      }
    } else {
      window.history.pushState({}, "", "/");
      const element = document.querySelector(`[data-scroll-to='${selector}']`);
      if (element) {
        element.scrollIntoView({
          block: "start",
          behavior: "smooth",
        });
      }
    }
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const scrollTo = params.get("scrollTo");
    if (scrollTo) {
      window.history.replaceState({}, "", "/");
      const element = document.querySelector(`[data-scroll-to='${scrollTo}']`);
      if (element) {
        element.scrollIntoView({
          block: "start",
          behavior: "smooth",
        });
      }
    }
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full bg-white shadow-md p-4 text-sm text-gray-900 font-text-xl-font-normal z-50 ${className}`}
    >
      <div className="flex items-center justify-between max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo Section */}
        <div
          className="flex items-center gap-3"
          onClick={() => (window.location.href = "/")}
        >
          <img className="w-7 h-7 cursor-pointer" alt="Logo" src="/logo.svg" />
          <div
            className="font-semibold cursor-pointer"
            onClick={() => (window.location.href = "/")}
          >
            DSZ ACCOUNTING
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div
          className="md:hidden cursor-pointer pr-10 lg:pr-0"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <img className="w-6 h-6" alt="Menu" src="/menu.svg" />
        </div>

        {/* Navigation & Sign-in Section */}
        <div
          className={`md:flex items-center gap-6 ${
            isMenuOpen ? "block" : "hidden"
          } absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none p-4 md:p-0`}
        >
            {[
            { label: "Home", action: () => (window.location.href = "/") },
            {
              label: "About Us",
              action: () => scrollToSection("aboutUsContainer"),
            },
            {
              label: "Our Services",
              action: () => scrollToSection("servicesContainer"),
            },
            { label: "Blog", action: () => scrollToSection("blog") },
            {
              label: "Contact",
              action: () => scrollToSection("contactContainer"),
            },
            ].map(({ label, action }) => (
            <div
              key={label}
              className="cursor-pointer font-medium py-2 md:py-0"
              onClick={action || undefined}
            >
              {label}
            </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
