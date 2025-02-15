import Button from "./Button";
import Row from "./Row";
import Row1 from "./Row1";
import Hero from "./Hero";
import PropTypes from "prop-types";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-col items-start justify-start pt-0 pb-[91px] pl-[116px] pr-[3px] box-border max-w-full text-left text-17xl text-gray-900 font-leading-none-text-sm-font-medium mq450:pb-5 mq450:box-border mq825:pl-[29px] mq825:pb-[25px] mq825:box-border mq1425:pl-[58px] mq1425:pb-[38px] mq1425:box-border ${className}`}
    >
      <h1 className="m-0 w-[437.6px] h-[35px] relative text-inherit [text-decoration:underline] leading-[125%] font-bold font-[inherit] whitespace-pre-wrap inline-block shrink-0 max-w-full z-[1] mq450:text-3xl mq450:leading-[27px] mq825:text-10xl mq825:leading-[36px]">
        Our Areas of Expertise
      </h1>
      <div className="ml-[-127px] w-[1440px] flex flex-col items-start justify-start gap-[20.2px] max-w-[110%] shrink-0">
        <div className="self-stretch bg-white overflow-hidden flex flex-col items-center justify-start py-boundvariablesdata16 px-0 box-border max-w-full mq825:pt-boundvariablesdata16 mq825:pb-boundvariablesdata16 mq825:box-border mq1425:pt-boundvariablesdata16 mq1425:pb-boundvariablesdata16 mq1425:box-border">
          <div className="w-[1280px] flex flex-col items-start justify-start gap-16 max-w-full mq450:gap-4 mq825:gap-8">
            <div className="self-stretch flex flex-row items-center justify-start py-0 pl-0 pr-8 box-border gap-boundvariablesdata17 max-w-full lg:flex-wrap mq450:gap-boundvariablesdata17 mq825:gap-boundvariablesdata17">
              <img
                className="w-[528px] relative max-h-full object-cover max-w-full lg:flex-1"
                loading="lazy"
                alt=""
                src="/collagefinancebannerconcept-1@2x.png"
              />
              <div className="flex-1 flex flex-col items-start justify-start gap-boundvariablesdata18 min-w-[416px] max-w-full mq825:min-w-full">
                <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.01em] leading-[125%] font-extrabold font-[inherit] mq450:text-3xl mq450:leading-[27px] mq825:text-10xl mq825:leading-[36px]">
                  Personal Income Tax Preparation
                </h1>
                <div className="self-stretch relative text-lg leading-[150%] text-gray-500">
                  Preparing your personal income tax is crucial, and our
                  comprehensive services ensure that all your financial details
                  are accurately captured and filed. We guide you through the
                  entire process, from gathering essential personal information
                  and documenting various income sources to claiming deductions
                  and credits specific to your situation. Whether you have
                  business income, rental properties, or have made significant
                  life changes in the past year, we help you maximize your tax
                  returns while ensuring compliance with the latest tax
                  regulations. Let our expert advisors assist you in preparing
                  and filing your tax returns efficiently and accurately.
                </div>
                <div className="flex flex-row items-center justify-start gap-boundvariablesdata19">
                  <Button
                    showRightIcon
                    showLeftIcon={false}
                    buttonText="Get  started"
                    showButtonText
                    propBackgroundColor="#057a55"
                    propPadding="10px 19px"
                    propOverflow="hidden"
                    propBorder="unset"
                    propWidth="unset"
                    propBorderRadius="8px"
                    propHeight="unset"
                    cartPlus="pending_I8:6790;26:130982"
                    propTextTransform="unset"
                    propColor="#fff"
                    propAlignSelf="unset"
                    cartPlus1="/arrowrightoutline-1.svg"
                  />
                  <Button
                    showRightIcon={false}
                    showLeftIcon={false}
                    buttonText="Learn more"
                    showButtonText
                    propBackgroundColor="#fff"
                    propPadding="8px 18px"
                    propOverflow="unset"
                    propBorder="1px solid #e5e7eb"
                    propWidth="116px"
                    propBorderRadius="8px"
                    propHeight="unset"
                    cartPlus="pending_I8:6791;29:127802"
                    propTextTransform="unset"
                    propColor="#111928"
                    propAlignSelf="unset"
                    cartPlus1="pending_I8:6791;29:127804"
                  />
                </div>
              </div>
            </div>
            <Row
              heading="Bookkeeping Support "
              supportingText="Stay on top of your business transactions with our expert bookkeeping support, providing you with the crucial insights needed to make informed and profitable decisions. We assist with the recording, tracking, and analysis of your financial data, allowing you to focus on growing your business. With consistent financial reports and expert guidance, you’ll stay up-to-date on your finances, empowering you to make smarter, more strategic decisions."
              arrowNarrowRight1="pending_I8:6798;29:127802"
              arrowNarrowRight2="pending_I8:6798;29:127804"
              collageFinanceBannerConcept="/collagefinancebannerconcept-2@2x.png"
              cartPlus="pending_I8:6797;26:130982"
              buttonText="Get started"
              cartPlus1="/arrowrightoutline-2.svg"
              showRightIcon
              showLeftIcon={false}
              showButtonText
              propBackgroundColor="#057a55"
              propPadding2="10px 19px"
              propOverflow="hidden"
              propBorder="unset"
              propWidth="unset"
              propBorderRadius="8px"
              propHeight="unset"
              propTextTransform="unset"
              propColor="#fff"
              propAlignSelf="unset"
            />
            <Row1
              mockup="/mockup@2x.png"
              heading="Financial Year End"
              supportingText="Preparing year-end financial statements is a vital task for every business, and our expert support ensures that it’s done smoothly. With our services, you’ll have accurate financial data, optimized tax returns, and timely completion of all year-end statements. At Dinesh Singh, we go beyond just preparation—we analyze your financial data to develop strategies that can propel your business to new heights.​"
              arrowNarrowRight1="pending_I8:6807;29:127802"
              arrowNarrowRight2="pending_I8:6807;29:127804"
              cartPlus="pending_I8:6806;26:130982"
              buttonText="Get started"
              cartPlus1="/arrowrightoutline-3.svg"
              showRightIcon
              showLeftIcon={false}
              showButtonText
              propBackgroundColor="#057a55"
              propPadding1="10px 19px"
              propOverflow="hidden"
              propBorder="unset"
              propWidth="unset"
              propBorderRadius="8px"
              propHeight1="unset"
              propTextTransform="unset"
              propColor="#fff"
              propAlignSelf="unset"
            />
          </div>
          <div className="self-stretch bg-white overflow-hidden flex flex-col items-center justify-start py-boundvariablesdata16 px-20 box-border max-w-full lg:pt-boundvariablesdata16 lg:pb-boundvariablesdata16 lg:box-border mq825:p-boundvariablesdata16 mq825:box-border">
            <div className="self-stretch flex flex-col items-start justify-start gap-16 max-w-full mq450:gap-4 mq825:gap-8">
              <Row
                propPadding="20px 0px"
                heading={`Business Planning & Advisory`}
                supportingText="With decades of experience, we provide strategic planning advice to help your business grow to the next level. Our team analyzes your financial data to interpret past trends and guide informed decisions for your business’s future. We also assist with bookkeeping, ensuring you have the tools, support, and training needed for effective financial management, all aimed at mitigating risk and driving long-term success."
                propPadding1="unset"
                arrowNarrowRight1="pending_I26:657;29:127802"
                arrowNarrowRight2="pending_I26:657;29:127804"
                collageFinanceBannerConcept="/collagefinancebannerconcept-2-1@2x.png"
                cartPlus="pending_I26:656;26:130982"
                buttonText="Get started"
                cartPlus1="/arrowrightoutline-4.svg"
                showRightIcon
                showLeftIcon={false}
                showButtonText
                propBackgroundColor="#057a55"
                propPadding2="10px 19px"
                propOverflow="hidden"
                propBorder="unset"
                propWidth="unset"
                propBorderRadius="8px"
                propHeight="unset"
                propTextTransform="unset"
                propColor="#fff"
                propAlignSelf="unset"
              />
              <Row1
                mockup="/mockup-1@2x.png"
                propPadding="unset"
                heading="Legacy Planning and Business Valuations"
                propHeight="90px"
                propDisplay="flex"
                supportingText="At Dinesh Singh, we specialize in business valuation and succession planning to help you preserve and maximize the wealth you’ve built. Whether you’re a small business owner or leading a corporation, we guide you through the transition process—addressing both the mindset shift and the technical tax aspects. Our team works with you to develop a comprehensive succession plan that aligns with your business goals, family needs, and financial aspirations, ensuring you exit on your terms. Don’t leave your business’s future to chance; let us help you create a plan that provides peace of mind and secures the value you’ve worked hard to build."
                arrowNarrowRight1="pending_I26:666;29:127802"
                arrowNarrowRight2="pending_I26:666;29:127804"
                cartPlus="pending_I26:665;26:130982"
                buttonText="Get started"
                cartPlus1="/arrowrightoutline-5.svg"
                showRightIcon
                showLeftIcon={false}
                showButtonText
                propBackgroundColor="#057a55"
                propPadding1="10px 19px"
                propOverflow="hidden"
                propBorder="unset"
                propWidth="unset"
                propBorderRadius="8px"
                propHeight1="unset"
                propTextTransform="unset"
                propColor="#fff"
                propAlignSelf="unset"
              />
            </div>
          </div>
        </div>
        <Hero />
      </div>
    </section>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
