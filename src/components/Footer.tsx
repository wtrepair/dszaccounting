import { FunctionComponent, useCallback } from "react";
import Button from "./Button";

export type FooterType = {
  className?: string;
};

const Footer: FunctionComponent<FooterType> = ({ className = "" }) => {
  const scrollToSection = useCallback((target: string) => {
    const anchor = document.querySelector(`[data-scroll-to='${target}']`);
    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return (
    <footer className={`bg-green-800 text-white border-t border-green-800 w-full py-10 ${className}`}>
      <div className="max-w-screen-xl mx-auto px-6 flex flex-col items-center">
        
        {/* CTA Section */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold">Let's work together</h2>
          <div className="mt-4 flex flex-wrap gap-4 justify-center">
            <Button buttonText="Receive News" showButtonText propBackgroundColor="#fff" propColor="#111928" />
            <Button buttonText="Contact Us" showButtonText />
          </div>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full text-center md:text-left">
          
          <div>
            <h3 className="text-lg font-semibold uppercase cursor-pointer" onClick={() => scrollToSection("hero")}>Home</h3>
            <ul className="mt-2 text-sm space-y-2">
              <li className="cursor-pointer" onClick={() => scrollToSection("aboutUsContainer")}>About Us</li>
              <li className="cursor-pointer" onClick={() => scrollToSection("servicesContainer")}>Services</li>
              <li className="cursor-pointer" onClick={() => scrollToSection("blog")}>Blog</li>
              <li className="cursor-pointer" onClick={() => scrollToSection("contactContainer")}>Contact at</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold uppercase">Services</h3>
            <ul className="mt-2 text-sm space-y-2">
              <li>Business Tax</li>
              <li>Personal Tax</li>
              <li>Year-End & Bookkeeping</li>
              <li>Succession & Valuations</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold uppercase">Blog</h3>
            <ul className="mt-2 text-sm space-y-2">
              <li>Guide to Tax Changes</li>
              <li>SR&ED</li>
              <li>Succession Planning</li>
              <li>Individual Tax Planning</li>
              <li>Business Growth</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold uppercase">Contact</h3>
            <p className="mt-2 text-sm">Email: info@dineshcpa.com</p>
            <p className="text-sm">Phone: 1-855-DINESH-1</p>
          </div>
        </div>

        {/* Separator */}
        <div className="w-full border-t border-gray-400 my-6"></div>

        {/* Footer Bottom */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center text-sm">
          <div className="flex items-center gap-2">
            <img className="w-6 h-6" alt="Logo" src="/logo1.svg" />
            <span className="font-semibold">Dinesh CPA</span>
          </div>
          <p className="text-center md:text-left">&copy; 2024 Dinesh CPA. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <img className="w-6 h-4" alt="Flag" src="/flags--ca.svg" />
            <span>English (CA)</span>
            <img className="w-4 h-4" alt="Dropdown" src="/chevrondown.svg" />
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
