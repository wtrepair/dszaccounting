import Card from "./Card";
import PropTypes from "prop-types";

const FrameComponent5 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 pb-[147px] pl-2.5 pr-0 box-border max-w-full text-left text-lg text-white font-leading-none-text-sm-font-medium lg:pb-24 lg:box-border mq825:pb-[62px] mq825:box-border ${className}`}
    >
      <div className="w-[1440px] rounded-lg overflow-hidden shrink-0 flex flex-row items-start justify-start pt-[54px] px-7 pb-[78px] box-border gap-[197px] bg-[url('/public/carousel@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-[102%] z-[1] mq450:gap-[25px] mq450:pt-[23px] mq450:pb-[33px] mq450:box-border mq825:gap-[49px] mq825:pt-[35px] mq825:pb-[51px] mq825:box-border mq1425:gap-[98px] mq1425:flex-wrap">
        <div className="w-80 flex flex-col items-start justify-start gap-8 min-w-[320px] mq450:gap-4 mq1425:flex-1">
          <div className="self-stretch shadow-[0px_1px_3px_rgba(0,_0,_0,_0.1),_0px_1px_2px_-1px_rgba(0,_0,_0,_0.1)] rounded-8xs bg-gray1-200 flex flex-col items-start justify-start py-4 pl-4 pr-[15px] gap-2">
            <div className="self-stretch h-1 relative bg-primary-600" />
            <div className="self-stretch relative leading-[125%] font-semibold">
              Trustworthy
            </div>
            <div className="self-stretch h-12 relative text-base leading-[150%] text-gray-200 inline-block">
              We build lasting relationships built on trust
            </div>
          </div>
          <Card
            title="Meticulous"
            description="Give you confidence in your financial plan"
          />
          <Card
            propBorderRadius="unset"
            title="Reliable"
            description="Consistent and dependable service so you can focus on your goals, knowing we have your back"
          />
          <Card
            propBorderRadius="unset"
            title="Proactive"
            description="We stay ahead of the curve"
          />
        </div>
        <div className="w-[800px] flex flex-col items-start justify-start pt-[187px] px-0 pb-0 box-border min-w-[800px] max-w-full text-41xl lg:min-w-full mq825:pt-[122px] mq825:box-border mq1425:flex-1">
          <div className="self-stretch flex flex-col items-start justify-start gap-[113px] mq450:gap-7 mq825:gap-14">
            <h1 className="m-0 self-stretch h-[311px] relative text-inherit leading-[125%] font-extrabold font-[inherit] flex items-center shrink-0 mq450:text-17xl mq450:leading-[45px] mq825:text-29xl mq825:leading-[60px]">
              Empowering your financial future with expert guidance and clear
              communication, so you can focus on what truly matters.
            </h1>
            <div className="rounded-rounded-lg bg-gray-400 overflow-hidden flex flex-row items-start justify-start py-boundvariablesdata pl-boundvariablesdata4 pr-[19px] gap-boundvariablesdata5 text-base">
              <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                <img
                  className="w-boundvariablesdata4 h-boundvariablesdata4 relative overflow-hidden shrink-0"
                  alt=""
                  src="/videocamera-2.svg"
                />
              </div>
              <div className="relative leading-[150%] font-medium">
                Watch video
              </div>
              <img
                className="h-boundvariablesdata2 w-boundvariablesdata2 relative overflow-hidden shrink-0 hidden"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent5.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent5;
