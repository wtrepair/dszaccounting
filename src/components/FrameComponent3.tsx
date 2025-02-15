import Button from "./Button";
import PropTypes from "prop-types";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-[76px] pb-[209px] box-border max-w-full text-left text-lg text-gray-500 font-leading-none-text-sm-font-medium mq825:pl-[38px] mq825:pr-[38px] mq825:pb-[136px] mq825:box-border ${className}`}
    >
      <div className="flex-1 flex flex-col items-center justify-start max-w-full mq825:gap-boundvariablesdata13">
        <div className="self-stretch h-[450px] flex flex-row items-center justify-start py-0 px-0 box-border gap-boundvariablesdata1 max-w-full mq450:gap-boundvariablesdata1 mq825:gap-boundvariablesdata1">
          <div className="flex-1 flex flex-col items-start justify-start gap-boundvariablesdata2 max-w-[calc(100%_-_672px)] shrink-0 lg:hidden lg:max-w-full">
            <h1 className="m-0 self-stretch h-[162px] relative text-17xl leading-[150%] font-extrabold font-[inherit] text-gray-900 flex items-center mq450:text-3xl mq450:leading-[32px] mq825:text-10xl mq825:leading-[43px]">
              Protect your wealth against economic changes and financial
              uncertainty.
            </h1>
            <div className="self-stretch relative leading-[150%]">
              Dinesh CPA offers tailored services to help you manage your
              finances efficiently, ensuring that you stay ahead of financial
              challenges and maximize your wealth.
            </div>
            <div className="self-stretch relative leading-[150%]">
              <p className="m-0">{`With our expert guidance, you’ll gain clarity and confidence in your financial decisions, allowing you to focus on what truly matters-securing your financial future. `}</p>
              <p className="m-0">
                Whether it’s tax planning, accounting, or strategic advice,
                Dinesh CPA is your trusted partner every step of the way.
              </p>
            </div>
            <Button
              showRightIcon
              showLeftIcon={false}
              buttonText="Read more"
              showButtonText
              propBackgroundColor="#057a55"
              propPadding="8px 18px"
              propOverflow="unset"
              propBorder="1px solid #e5e7eb"
              propWidth="134px"
              propBorderRadius="8px"
              propHeight="unset"
              cartPlus="pending_I8:6756;29:127802"
              propTextTransform="unset"
              propColor="#fff"
              propAlignSelf="unset"
              cartPlus1="/arrownarrowright.svg"
            />
          </div>
          <div className="flex-1 flex flex-row items-start justify-start max-w-[calc(100%_-_672px)] lg:hidden lg:max-w-full">
            <img
              className="h-[411px] flex-1 relative max-w-full overflow-hidden object-cover"
              loading="lazy"
              alt=""
              src="/pirateartifactsarrangementstilllife-1@2x.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
