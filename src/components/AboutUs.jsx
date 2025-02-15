import PropTypes from "prop-types";

const AboutUs = ({ className = "" }) => {
  return (
    <div
      className={`w-[1082.3px] bg-white overflow-hidden shrink-0 flex flex-col items-center justify-start pt-boundvariablesdata8 px-0 pb-[383px] box-border min-h-[569px] max-w-full z-[1] text-center text-41xl text-gray-900 font-leading-none-text-sm-font-medium mq825:pt-boundvariablesdata8 mq825:pb-boundvariablesdata8 mq825:box-border ${className}`}
      data-scroll-to="aboutUsContainer1"
    >
      <div className="w-[1280px] flex flex-col items-center justify-start py-0 px-5 box-border gap-boundvariablesdata13 max-w-[119%] shrink-0 mq450:gap-boundvariablesdata13">
        <div className="w-[768px] flex flex-col items-start justify-start gap-boundvariablesdata2 max-w-full">
          <div className="self-stretch relative tracking-[-0.01em] leading-[125%] font-extrabold hidden mq450:text-17xl mq450:leading-[45px] mq825:text-29xl mq825:leading-[60px]">
            Why Us?
          </div>
          <h3 className="m-0 self-stretch h-[90px] relative text-xl leading-[150%] font-normal font-[inherit] text-gray-500 text-left inline-block mq450:text-base mq450:leading-[24px]">{`With 30 years of accounting experience, spanning multiple industries, Mr.Dinesh Singh has acquired exceptional experience in a variety of services areas relating to both corporate and personal accounting and taxation issues. `}</h3>
        </div>
        <div className="w-[768px] hidden flex-row items-start justify-between gap-0 max-w-full [row-gap:20px] text-17xl lg:flex-wrap">
          <div className="h-[75px] w-64 flex flex-col items-center justify-start">
            <div className="self-stretch flex-1 relative tracking-[-0.01em] leading-[125%] font-extrabold flex items-center justify-center mq450:text-3xl mq450:leading-[27px] mq825:text-10xl mq825:leading-[36px]">
              73M+
            </div>
            <div className="self-stretch h-[30px] relative text-xl leading-[150%] text-gray-500 inline-block mq450:text-base mq450:leading-[24px]">
              developers
            </div>
          </div>
          <div className="h-[75px] w-64 flex flex-col items-center justify-start">
            <div className="self-stretch flex-1 relative tracking-[-0.01em] leading-[125%] font-extrabold flex items-center justify-center mq450:text-3xl mq450:leading-[27px] mq825:text-10xl mq825:leading-[36px]">
              1B+
            </div>
            <div className="self-stretch h-[30px] relative text-xl leading-[150%] text-gray-500 inline-block mq450:text-base mq450:leading-[24px]">
              contributors
            </div>
          </div>
          <div className="h-[75px] w-64 flex flex-col items-center justify-start">
            <div className="self-stretch flex-1 relative tracking-[-0.01em] leading-[125%] font-extrabold flex items-center justify-center mq450:text-3xl mq450:leading-[27px] mq825:text-10xl mq825:leading-[36px]">
              4M+
            </div>
            <div className="self-stretch h-[30px] relative text-xl leading-[150%] text-gray-500 inline-block mq450:text-base mq450:leading-[24px]">
              organizations
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

AboutUs.propTypes = {
  className: PropTypes.string,
};

export default AboutUs;
