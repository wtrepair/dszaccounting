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
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        About Us
      </h2>

      {/* Main Content */}
      <div className="max-w-screen-xl flex flex-col md:flex-row items-center gap-10">
        {/* Left: Image with overlay box */}
        {/* <div className="relative flex-shrink-0">
          <div className="absolute bottom-0 left-0 w-full h-16 bg-darkslategray rounded-xl"></div>
          <img
            className="w-56 md:w-64 h-auto object-cover"
            alt="Financial expertise illustration"
            src="/blockchain-2246959removebgpreview-4@2x.png"
          />
        </div> */}

        {/* Right: Text Content */}
        <div className="flex-1 flex flex-col text-gray-500 px-6">
          <p className="text-lg leading-relaxed">
            With over 30 years of accounting experience across multiple
            industries, <b>DSZ Accounting and Tax Consultants</b> provides expert financial services to
            both corporate and personal clients throughout the United States.
            Our firm specializes in helping businesses and individuals navigate
            complex financial regulations and tax laws seamlessly.
            <br />
            At <b>DSZ Accounting and Tax Consultants</b>, strategy is at the core of everything we do.
            Our team takes a broad, forward-thinking approach to analyzing each
            client’s financial situation, ensuring that every decision aligns
            with long-term success. With deep experience in financial
            management, business transactions, and corporate oversight, we help
            clients optimize financial performance and drive sustainable growth.
            <br />
            Drawing from firsthand experience in financial strategy, tax
            planning, and compliance, our leadership delivers financial advice
            that is both technically sound and grounded in real-world
            application.
            <br />
            We prioritize a proactive approach, keeping our clients informed
            about the latest financial trends, tax laws, and regulatory changes.
            Whether you’re an entrepreneur, a growing business, or an individual
            seeking expert tax guidance, <b>DSZ Accounting and Tax Consultants</b> provides the reliable
            financial expertise and strategic insights you need to succeed.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs1;
