import { FunctionComponent } from "react";
import { useCallback } from "react";

export type JumbotronType = {
  className?: string;
};

const Jumbotron: FunctionComponent<JumbotronType> = ({ className = "" }) => {
  const scrollToSection = useCallback((target: string) => {
      const anchor = document.querySelector(`[data-scroll-to='${target}']`);
      if (anchor) {
        anchor.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, []);

  return (
    <div
      className={`relative w-full flex flex-col items-center justify-center min-h-screen bg-cover bg-no-repeat bg-center text-center text-white ${className}`}
      style={{ backgroundImage: "url('/jumbotron@3x.png')" }}
    >
      <div className="max-w-4xl flex flex-col items-center gap-6">
        <h1 className="text-13xl md:text-17xl lg:text-41xl font-extrabold leading-tight">
          Streamlining Finances for Individuals, Businesses and Growth
        </h1>
        <p className="max-w-2xl text-lg md:text-xl leading-relaxed">
          Take control of your finances with expert accounting, strategic tax
          planning, and tailored financial solutions for sustainable growth.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-[#0e9f6e] text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-green-800 transition cursor-pointer" onClick={() => scrollToSection("contactContainer")}>
            Get started
          </button>
          <button className="bg-transparent border border-white text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-green-800 transition cursor-pointer" onClick={() => scrollToSection("aboutUsContainer")}>
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
