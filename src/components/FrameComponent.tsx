import Button from "./Button";
import ButtonWhitelDefaultTrueFa from "./ButtonWhitelDefaultTrueFa";
import PropTypes from "prop-types";

const FrameComponent = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 pb-[72px] pl-[5px] pr-0 box-border max-w-full text-center text-41xl text-white font-leading-none-text-sm-font-medium mq825:pb-[47px] mq825:box-border ${className}`}
    >
      <div className="flex-1 overflow-hidden flex flex-col items-center justify-end py-[164px] px-0 box-border bg-[url('/public/jumbotron@3x.png')] bg-cover bg-no-repeat bg-[top] min-h-[664px] max-w-full mq825:pt-[107px] mq825:pb-[107px] mq825:box-border">
        <div className="self-stretch flex flex-col items-center justify-start gap-boundvariablesdata9 max-w-full">
          <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.01em] leading-[60px] font-extrabold font-[inherit] mq450:text-17xl mq450:leading-[36px] mq825:text-29xl mq825:leading-[48px]">
            <p className="m-0">Streamlining finances for</p>
            <p className="m-0">individuals, businesses, growth</p>
          </h1>
          <h3 className="m-0 w-[768px] relative text-xl leading-[150%] font-normal font-[inherit] inline-block [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] max-w-full mq450:text-base mq450:leading-[24px]">
            Empowering your financial journey with expert accounting services,
            precise tax planning, and effective financial strategies tailored to
            meet your unique needs.
          </h3>
          <div className="flex flex-row items-center justify-start py-0 px-5 box-border gap-boundvariablesdata2 max-w-full text-left text-base">
            <Button
              showRightIcon
              showLeftIcon={false}
              buttonText="Get started"
              showButtonText
              propBackgroundColor="#0e9f6e"
              propPadding="12px 19px"
              propOverflow="hidden"
              propBorder="unset"
              propWidth="unset"
              propBorderRadius="8px"
              propHeight="unset"
              cartPlus="pending_I8:6725;26:140037"
              propTextTransform="unset"
              propColor="#fff"
              propAlignSelf="unset"
              cartPlus1="/arrowright.svg"
            />
            <ButtonWhitelDefaultTrueFa
              showLeftIcon
              buttonText="Learn more"
              showRightIcon
              showButtonText
            />
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
