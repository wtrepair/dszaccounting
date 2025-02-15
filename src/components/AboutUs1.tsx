import { FunctionComponent } from "react";

export type AboutUs1Type = {
  className?: string;
};

const AboutUs1: FunctionComponent<AboutUs1Type> = ({ className = "" }) => {
  return (
    <div
      className={`w-full flex flex-col items-center py-16 px-4 bg-white ${className}`}
      data-scroll-to="aboutUsContainer"
    >
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 underline mb-6">
        About Us
      </h2>

      {/* Main Content */}
      <div className="max-w-screen-xl flex flex-col md:flex-row items-center gap-10">
        {/* Left: Image with overlay box */}
        <div className="relative flex-shrink-0">
          <div className="absolute bottom-0 left-0 w-full h-16 bg-darkslategray rounded-xl"></div>
          <img
            className="w-56 md:w-64 h-auto object-cover"
            alt="Financial expertise illustration"
            src="/blockchain-2246959removebgpreview-4@2x.png"
          />
        </div>

        {/* Right: Text Content */}
        <div className="flex-1 flex flex-col gap-2 text-gray-500 px-6">
          <p className="text-lg leading-relaxed">
            With 30 years of accounting experience spanning multiple industries,
            Mr. Dinesh Singh has acquired exceptional expertise in a variety of
            service areas related to both corporate and personal accounting and
            taxation.
          </p>
          <p className="text-lg leading-relaxed">
            Strategy is of utmost importance, and Mr. Singh takes a broad stance
            when analyzing your or your company’s particular situation. Having
            been himself involved in numerous business deals, Mr. Singh is an
            experienced comptroller and is adept at delivering financial advice.
          </p>
          <p className="text-lg leading-relaxed">
            At Dinesh CPA, we aim to always use a proactive approach to address
            your accounting needs and keep you informed about the latest
            financial trends and regulations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs1;
