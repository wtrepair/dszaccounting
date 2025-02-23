import { FunctionComponent } from "react";
import { useCallback } from "react";

export type ServicesType = {
  className?: string;
};

const Services: FunctionComponent<ServicesType> = ({ className = "" }) => {
  const scrollToSection = useCallback((target: string) => {
    const anchor = document.querySelector(`[data-scroll-to='${target}']`);
    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return (
    <div
      className={`w-full text-gray-900 font-text-xl-font-normal ${className}`}
    >
      <div className="px-4">
        <div
          className="w-full max-w-screen-xl mx-auto flex flex-col items-center justify-center gap-2 md:gap-8
        "
        >
          {/* Section 1 - Personal Income Tax Preparation */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 w-full" data-scroll-to="PersonalIncomeTaxPreparation">
            <img
              className="w-full lg:w-[50%] h-auto object-cover"
              src="/collagefinancebannerconcept-1@2x.png"
              alt="Personal Income Tax Preparation"
            />
            <div className="w-full lg:w-[50%] flex flex-col items-start justify-start gap-2">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-extrabold">
                Personal Income Tax Preparation
              </h2>
              <p className="text-base md:text-lg text-gray-500 leading-7">
                Filing your personal income tax isn’t just about paperwork—it’s
                about keeping more of what you earn. Our team ensures your tax
                return is accurate, optimized, and fully compliant with the
                latest regulations. Whether you have business income, rental
                properties, or major life changes, we help you claim the right
                deductions and credits to maximize your return. With expert
                guidance, you can file confidently and efficiently.
                <br /> In addition to tax preparation, our services include{" "}
                <b>Personal Tax Planning and Compliance</b>. Tax planning is
                more than just filing forms at the end of the year—it’s about
                creating a strategy to minimize the tax you pay. Our tax experts
                review your current financial situation, explain new tax laws,
                and help you develop an individualized tax plan to meet your
                short- and long-term goals. When necessary, our specialists can
                also handle relations with regulatory agencies, ensuring you
                remain compliant while optimizing your tax position.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <button
                  className="bg-green-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-800 transition cursor-pointer"
                  onClick={() => scrollToSection("contactContainer")}
                >
                  Get started
                </button>
                <button
                  className="text-gray-800 px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition cursor-pointer"
                  onClick={() => scrollToSection("aboutUsContainer")}
                >
                  Learn more
                </button>
              </div>
            </div>
          </div>

          {/* Section 2 - Bookkeeping Support */}
          <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-8 w-full" data-scroll-to="AccountingPayrollandTaxes">
            <img
              className="w-full lg:w-[50%] h-auto object-cover"
              src="/collagefinancebannerconcept-2@2x.png"
              alt="Bookkeeping Support"
            />
            <div className="w-full lg:w-[50%] flex flex-col items-start justify-start">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-extrabold">
                Accounting, Payroll and Taxes Services for Businesses
              </h2>
              <p className="text-base md:text-lg text-gray-500 leading-7">
                In today’s fast-paced business world, having the right financial
                tools is essential. At <b>DSZ Accounting and Tax Consultants</b>, we provide cloud
                accounting, expert bookkeeping, payroll management, and other
                accounting solutions that keep your finances organized and your
                business running smoothly. Focus on profitability while we
                handle the numbers—gain real-time insights and stay compliant
                with confidence. Our expertise in tax, audit, and financial
                complexities ensures that you receive accurate, up-to-date
                guidance to support informed decision-making. With consistent
                financial reporting, expert advisory services, and a proactive
                approach, we help businesses streamline operations, maintain
                compliance, and drive growth. Let us handle the numbers, so you
                can concentrate on what matters most—scaling your business
                successfully.
              </p>
              <button
                className="bg-green-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-800 transition cursor-pointer"
                onClick={() => scrollToSection("contactContainer")}
              >
                Get started
              </button>
            </div>
          </div>

          {/* Section 3 - Business Services */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 w-full" data-scroll-to="BusinessServices">
            <img
              className="w-full lg:w-[50%] h-auto object-cover"
              src="/coins.jpg"
              alt="Financial Year End"
            />
            <div className="w-full lg:w-[50%] flex flex-col items-start justify-start">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-extrabold">
                Business Services
              </h2>
              <p className="text-base md:text-lg text-gray-500 leading-7">
                From business registration to tax planning, our expert team
                provides tailored solutions to help you build, grow, and manage
                your business with confidence.
                <br />
                <ul className="list-disc pl-6">
                  <li>
                    <b>Business Incorporation</b> – We offer a wide range of
                    business registration services, in both the U.S and Canada,
                    including U.S. entity formation (LLC, S-Corp, C-Corp),
                    Ontario and Canada incorporations, and NUANS (Name Search)
                    to help you secure the right business name.
                  </li>
                  <li>
                    <b>Business Consulting</b> – As a commercially focused
                    accounting firm, we understand the challenges businesses
                    face. We provide practical, first-hand insights to help you
                    make informed decisions, maximize efficiency, and achieve
                    long-term growth.
                  </li>
                  <li>
                    <b>Corporate Tax Planning & Compliance</b> – Proper tax
                    planning helps avoid unexpected costs and ensures tax
                    efficiency. While taxes are unavoidable, a well-planned tax
                    strategy can reduce liabilities and improve financial
                    efficiency. With proactive planning and foresight, we help
                    businesses stay compliant and maximize financial
                    opportunities.
                  </li>
                  <li>
                    <b>Return Filing</b> – Proper tax Our team offers expert
                    assistance in both U.S. and Canadian tax filings, including:
                    <ul className="list pl-6">
                      <li>
                        U.S. Corporate Tax (Form 1120) / Canadian Corporate Tax
                        (T2)
                      </li>
                      <li>
                        U.S. Individual Tax (Form 1040) / Canadian Personal Tax
                        (T1)
                      </li>
                      <li>
                        U.S. Sales & Use Tax Compliance / Canadian HST Returns
                      </li>
                      <li>
                        U.S. Workers’ Compensation Filings (State-Specific) /
                        Canadian WSIB Filings
                      </li>
                      <li>
                        U.S. Payroll Tax Filings (Federal & State) / Canadian
                        EHT Returns
                      </li>
                      <li>
                        U.S. Payroll Reporting (W-2, 1099 Forms) / Canadian
                        Annual Payroll Returns (T4/T5)
                      </li>
                    </ul>
                  </li>
                </ul>
                Whether you’re launching a new business or optimizing an
                existing one, DSZ Accounting and Tax Consultants provides the expertise, guidance, and
                strategic support needed to ensure financial success.
              </p>
              <button className="bg-green-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-800 transition cursor-pointer">
                Get started
              </button>
            </div>
          </div>

          {/* Section 4 - Financial Year End and Audit Readiness */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 w-full" data-scroll-to="FinancialYearEnd">
            <div className="w-full lg:w-[50%] flex flex-col items-start justify-start">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-extrabold">
                Financial Year End and Audit Readiness
              </h2>
              <p className="text-base md:text-lg text-gray-500 leading-7">
                Year-end financial reporting is more than just meeting
                deadlines—it’s about ensuring accuracy, compliance, and
                strategic planning for the future. At DSZ Accounting and Tax Consultants, we provide
                expert tax compliance and advisory services, ensuring full
                adherence to IRS (U.S.) and CRA (Canada) regulations. Whether
                you operate domestically or across borders, we help businesses
                stay ahead of tax laws while optimizing financial efficiency.
                Our in-depth analysis helps you close the year with confidence
                and set the stage for continued growth.
              </p>
              <button className="bg-green-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-800 transition cursor-pointer">
                Get started
              </button>
            </div>
            <img
              className="w-full lg:w-[50%] h-auto object-cover"
              src="/mockup@2x.png"
              alt="Financial Year End"
            />
          </div>

          {/* Section 5 - Business Planning & Advisory */}
          <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-8 w-full" data-scroll-to="BusinessPlanning">
            <div className="w-full lg:w-[50%] flex flex-col items-start justify-start">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-extrabold">
                Business Planning & Advisory
              </h2>
              <p className="text-base md:text-lg text-gray-500 leading-7">
                A well-planned strategy is the foundation of a successful
                business. With over 30 years of experience, we help businesses
                navigate challenges and seize growth opportunities. Our team
                analyzes financial data to interpret past trends and develop
                informed strategies for long-term success.
                <br /> We also provide financial management support, ensuring
                you have the tools, training, and insights to maintain financial
                stability and plan for future growth. By mitigating risk and
                strengthening financial processes, we help businesses make
                confident, forward-thinking decisions.
              </p>
              <button
                className="bg-green-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-800 transition cursor-pointer"
                onClick={() => scrollToSection("contactContainer")}
              >
                Get started
              </button>
            </div>
            <img
              className="w-full lg:w-[50%] h-auto object-cover"
              src="/collagefinancebannerconcept-21@2x.png"
              alt="Business Planning & Advisory"
            />
          </div>

          {/* Section 6 - Legacy Planning and Business Valuations */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 w-full" data-scroll-to="LegacyPlanning">
            <div className="w-full lg:w-[50%] flex flex-col items-start justify-start">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-extrabold">
                Legacy Planning and Business Valuations
              </h2>
              <p className="text-base md:text-lg text-gray-500 leading-7">
                At <b>DSZ Accounting and Tax Consultants</b>, we specialize in business valuation and
                succession planning to help you protect and optimize the wealth
                you’ve built. Whether you’re a small business owner or leading a
                corporation, we guide you through the transition—helping you
                navigate both financial complexities and operational
                adjustments.
                <br />
                Our team works with you to develop a comprehensive succession
                plan that aligns with your business goals, family needs, and
                financial aspirations, ensuring you exit on your terms. With a
                well-structured succession plan, you can transition smoothly
                while securing your business’s financial future.
              </p>
              <button
                className="bg-green-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-800 transition cursor-pointer"
                onClick={() => scrollToSection("contactContainer")}
              >
                Get started
              </button>
            </div>
            <img
              className="w-full lg:w-[50%] h-auto object-cover"
              src="/mockup1@2x.png"
              alt="Legacy Planning and Business Valuations"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
