import { FunctionComponent } from "react";

export type ServicesType = {
  className?: string;
};

const Services: FunctionComponent<ServicesType> = ({ className = "" }) => {
  return (
    <div
      className={`w-full text-gray-900 font-text-xl-font-normal ${className}`}
    >
      <div className="px-4">
        <div className="w-full max-w-screen-xl mx-auto flex flex-col items-center justify-center gap-16">
          {/* Section 1 - Personal Income Tax Preparation */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 w-full">
            <img
              className="w-full lg:w-[50%] h-auto object-cover"
              src="/collagefinancebannerconcept-1@2x.png"
              alt="Personal Income Tax Preparation"
            />
            <div className="w-full lg:w-[50%] flex flex-col items-start justify-start gap-6">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-extrabold">
                Personal Income Tax Preparation
              </h2>
              <p className="text-base md:text-lg text-gray-500 leading-7">
                Preparing your personal income tax is crucial, and our
                comprehensive services ensure that all your financial details
                are accurately captured and filed. We guide you through the
                entire process, from gathering essential personal information
                and documenting various income sources to claiming deductions
                and credits specific to your situation. Whether you have
                business income, rental properties, or have made significant
                life changes in the past year, we help you maximize your tax
                returns while ensuring compliance with the latest tax
                regulations. Let our expert advisors assist you in preparing and
                filing your tax returns efficiently and accurately.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <button className="bg-green-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-800 transition">
                  Get started
                </button>
                <button className="text-gray-800 px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition">
                  Learn more
                </button>
              </div>
            </div>
          </div>

          {/* Section 2 - Bookkeeping Support */}
          <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-8 w-full">
            <img
              className="w-full lg:w-[50%] h-auto object-cover"
              src="/collagefinancebannerconcept-2@2x.png"
              alt="Bookkeeping Support"
            />
            <div className="w-full lg:w-[50%] flex flex-col items-start justify-start gap-6">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-extrabold">
                Bookkeeping Support
              </h2>
              <p className="text-base md:text-lg text-gray-500 leading-7">
                Stay on top of your business transactions with our expert
                bookkeeping support, providing you with the crucial insights
                needed to make informed and profitable decisions. We assist with
                the recording, tracking, and analysis of your financial data,
                allowing you to focus on growing your business. With consistent
                financial reports and expert guidance, you’ll stay up-to-date on
                your finances, empowering you to make smarter, more strategic
                decisions.
              </p>
              <button className="bg-green-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-800 transition">
                Get started
              </button>
            </div>
          </div>

          {/* Section 3 - Financial Year End */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 w-full">
            <img
              className="w-full lg:w-[50%] h-auto object-cover"
              src="/mockup@2x.png"
              alt="Financial Year End"
            />
            <div className="w-full lg:w-[50%] flex flex-col items-start justify-start gap-6">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-extrabold">
                Financial Year End
              </h2>
              <p className="text-base md:text-lg text-gray-500 leading-7">
                Preparing year-end financial statements is a vital task for
                every business, and our expert support ensures that it’s done
                smoothly. With our services, you’ll have accurate financial
                data, optimized tax returns, and timely completion of all
                year-end statements. At Dinesh Singh, we go beyond just
                preparation—we analyze your financial data to develop strategies
                that can propel your business to new heights.​
              </p>
              <button className="bg-green-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-800 transition">
                Get started
              </button>
            </div>
          </div>

          {/* Section 4 - Business Planning & Advisory */}
          <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-8 w-full">
            <img
              className="w-full lg:w-[50%] h-auto object-cover"
              src="/collagefinancebannerconcept-21@2x.png"
              alt="Business Planning & Advisory"
            />
            <div className="w-full lg:w-[50%] flex flex-col items-start justify-start gap-6">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-extrabold">
                Business Planning & Advisory
              </h2>
              <p className="text-base md:text-lg text-gray-500 leading-7">
                With decades of experience, we provide strategic planning advice
                to help your business grow to the next level. Our team analyzes
                your financial data to interpret past trends and guide informed
                decisions for your business’s future. We also assist with
                bookkeeping, ensuring you have the tools, support, and training
                needed for effective financial management, all aimed at
                mitigating risk and driving long-term success.
              </p>
              <button className="bg-green-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-800 transition">
                Get started
              </button>
            </div>
          </div>

          {/* Section 5 - Legacy Planning and Business Valuations */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 w-full">
            <img
              className="w-full lg:w-[50%] h-auto object-cover"
              src="/mockup1@2x.png"
              alt="Legacy Planning and Business Valuations"
            />
            <div className="w-full lg:w-[50%] flex flex-col items-start justify-start gap-6">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-extrabold">
                Legacy Planning and Business Valuations
              </h2>
              <p className="text-base md:text-lg text-gray-500 leading-7">
                At Dinesh Singh, we specialize in business valuation and
                succession planning to help you preserve and maximize the wealth
                you’ve built. Whether you’re a small business owner or leading a
                corporation, we guide you through the transition
                process—addressing both the mindset shift and the technical tax
                aspects. Our team works with you to develop a comprehensive
                succession plan that aligns with your business goals, family
                needs, and financial aspirations, ensuring you exit on your
                terms. Don’t leave your business’s future to chance; let us help
                you create a plan that provides peace of mind and secures the
                value you’ve worked hard to build.
              </p>
              <button className="bg-green-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-800 transition">
                Get started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
