import AboutUs from "./AboutUs";
import PropTypes from "prop-types";

const FrameComponent4 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-end pt-0 px-5 pb-20 box-border max-w-full text-left text-17xl text-gray-900 font-leading-none-text-sm-font-medium mq825:pb-[52px] mq825:box-border ${className}`}
    >
      <div
        className="flex flex-row items-end justify-start relative gap-[7.8px] max-w-full mq1425:flex-wrap"
        data-scroll-to="aboutUsContainer"
      >
        <h1 className="!m-[0] h-[35px] w-[437.6px] absolute top-[0px] left-[30.2px] text-inherit [text-decoration:underline] leading-[125%] font-bold font-[inherit] inline-block mq450:text-3xl mq450:leading-[27px] mq825:text-10xl mq825:leading-[36px]">
          About Us
        </h1>
        <div className="h-[455px] w-[274.9px] flex flex-col items-start justify-start">
          <div className="self-stretch flex flex-col items-end justify-start gap-[18.5px]">
            <div className="self-stretch flex flex-row items-start justify-end py-0 pl-[30px] pr-[27px]">
              <img
                className="h-[254px] flex-1 relative max-w-full overflow-hidden object-cover"
                loading="lazy"
                alt=""
                src="/blockchain-2246959removebgpreview-4@2x.png"
              />
            </div>
            <div className="self-stretch h-[69.5px] relative rounded-14xl bg-darkslategray" />
          </div>
        </div>
        <div className="flex flex-row items-start justify-start relative max-w-full text-xl text-gray-500">
          <AboutUs />
          <h3 className="!m-[0] h-[120px] w-[772.5px] absolute bottom-[224px] left-[152.9px] text-inherit leading-[150%] font-normal font-[inherit] inline-block z-[2] mq450:text-base mq450:leading-[24px]">
            Strategy is of upmost importance, and Mr.Singh takes a broad stance
            where it comes to analyzing your or your company’s particular
            situation. Having been himself involved in numerous business deals,
            Mr.Singh is an experienced comptroller and is apt in delivering
            financial advice.
          </h3>
          <h3 className="!m-[0] h-[90px] w-[772.5px] absolute bottom-[93px] left-[151.8px] text-inherit leading-[150%] font-normal font-[inherit] inline-block z-[2] mq450:text-base mq450:leading-[24px]">
            At Dinesh CPA, we aim to always use a proactive approach to address
            your accounting needs and keep you informed about the latest
            financial trends and regulations.
          </h3>
        </div>
      </div>
    </section>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent4;
