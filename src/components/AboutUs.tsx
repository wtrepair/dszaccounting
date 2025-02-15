import { FunctionComponent } from "react";

export type AboutUsType = {
  className?: string;
};

const AboutUs: FunctionComponent<AboutUsType> = ({ className = "" }) => {
  return (
    <div className={`w-full bg-white flex flex-col items-center py-16 px-4 ${className}`} data-scroll-to="aboutUsContainer1">
      {/* Section Title */}
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 text-center">
        Why Us?
      </h2>

      {/* Description */}
      <p className="max-w-3xl text-lg text-gray-500 text-center leading-relaxed">
        With 30 years of accounting experience spanning multiple industries, Mr. Dinesh Singh has acquired exceptional expertise in a variety of service areas related to both corporate and personal accounting and taxation.
      </p>

      {/* Stats Section */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div>
          <h3 className="text-4xl font-extrabold text-gray-900">73M+</h3>
          <p className="text-lg text-gray-500">developers</p>
        </div>
        <div>
          <h3 className="text-4xl font-extrabold text-gray-900">1B+</h3>
          <p className="text-lg text-gray-500">contributors</p>
        </div>
        <div>
          <h3 className="text-4xl font-extrabold text-gray-900">4M+</h3>
          <p className="text-lg text-gray-500">organizations</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
