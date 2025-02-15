import InputField from "./InputField";
import SelectInput from "./SelectInput";
import Textarea from "./Textarea";
import Checkbox from "./Checkbox";
import Button from "./Button";
import PropTypes from "prop-types";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start py-0 pl-3 pr-1 box-border max-w-full text-left text-41xl text-gray-900 font-leading-none-text-sm-font-medium ${className}`}
    >
      <div
        className="flex-1 flex flex-col items-start justify-start gap-[117.3px] max-w-full mq450:gap-[29px] mq825:gap-[59px]"
        data-scroll-to="contactContainer"
      >
        <div className="w-[1271.2px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <h1 className="m-0 w-[379.3px] relative text-inherit leading-[35.7px] font-bold font-[inherit] inline-block shrink-0 max-w-full mq450:text-17xl mq450:leading-[45px] mq825:text-29xl mq825:leading-[60px]">
            Contact Us
          </h1>
        </div>
        <div className="self-stretch flex flex-col items-center justify-center py-[106.5px] px-0 box-border gap-boundvariablesdata1 max-w-full text-center text-xl lg:pt-[69px] lg:pb-[69px] lg:box-border mq450:gap-boundvariablesdata1 mq825:gap-boundvariablesdata1 mq825:pt-[45px] mq825:pb-[45px] mq825:box-border">
          <div className="self-stretch flex flex-row items-start justify-between [row-gap:20px] max-w-full gap-0 mq1425:flex-wrap mq1425:justify-center">
            <div className="w-[472px] overflow-hidden shrink-0 flex flex-col items-center justify-start py-0 px-[72px] box-border gap-boundvariablesdata2 max-w-full mq825:pl-9 mq825:pr-9 mq825:box-border">
              <div className="w-boundvariablesdata1 h-boundvariablesdata1 rounded-rounded-full bg-gray-100 flex flex-row items-center justify-center p-3.5 box-border">
                <img
                  className="h-boundvariablesdata12 w-boundvariablesdata12 relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/store.svg"
                />
              </div>
              <div className="self-stretch flex flex-col items-center justify-start gap-boundvariablesdata11">
                <h3 className="m-0 relative text-inherit leading-[150%] font-bold font-[inherit] mq450:text-base mq450:leading-[24px]">
                  Company information:
                </h3>
                <div className="self-stretch h-[54px] relative text-base leading-[150%] text-gray-500 inline-block shrink-0">
                  <p className="m-0">Dinesh Singh CGA, CPA</p>
                  <p className="m-0">Dinesh Professional Corporation</p>
                </div>
              </div>
            </div>
            <div className="w-[472px] overflow-hidden shrink-0 flex flex-col items-center justify-start py-0 px-[72px] box-border gap-boundvariablesdata2 max-w-full mq825:pl-9 mq825:pr-9 mq825:box-border">
              <div className="w-boundvariablesdata1 h-boundvariablesdata1 rounded-rounded-full bg-gray-100 flex flex-row items-center justify-center p-3.5 box-border">
                <img
                  className="h-boundvariablesdata12 w-boundvariablesdata12 relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/mappin.svg"
                />
              </div>
              <div className="self-stretch flex flex-col items-center justify-start gap-boundvariablesdata11">
                <h3 className="m-0 relative text-inherit leading-[150%] font-bold font-[inherit] mq450:text-base mq450:leading-[24px]">
                  Address:
                </h3>
                <div className="self-stretch h-[72px] relative text-base leading-[150%] text-gray-500 inline-block">
                  <p className="m-0">216-2985 Drew Road</p>
                  <p className="m-0">Mississauga, ON</p>
                </div>
              </div>
            </div>
            <div className="w-[472px] overflow-hidden shrink-0 flex flex-col items-center justify-start py-0 px-[72px] box-border gap-boundvariablesdata2 max-w-full text-base mq825:pl-9 mq825:pr-9 mq825:box-border">
              <div className="w-boundvariablesdata1 h-boundvariablesdata1 rounded-rounded-full bg-gray-100 flex flex-row items-center justify-center p-3.5 box-border">
                <img
                  className="h-boundvariablesdata12 w-boundvariablesdata12 relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/phone.svg"
                />
              </div>
              <div className="self-stretch flex flex-col items-center justify-start gap-boundvariablesdata11">
                <h3 className="m-0 relative text-xl leading-[150%] font-bold font-[inherit] mq450:text-base mq450:leading-[24px]">
                  Contact us:
                </h3>
                <div className="self-stretch h-[54px] relative leading-[150%] text-gray-500 inline-block shrink-0">
                  Email us for general queries, including marketing and
                  partnership opportunities.
                </div>
                <div className="relative leading-[150%] font-semibold whitespace-nowrap">
                  info@dineshcpa.com
                </div>
              </div>
            </div>
          </div>
          <div className="w-[808px] flex flex-col items-start justify-start py-0 px-5 box-border gap-boundvariablesdata9 max-w-full text-left text-sm text-gray-500">
            <div className="self-stretch flex flex-row items-start justify-start flex-wrap content-start gap-boundvariablesdata3 max-w-full mq450:gap-boundvariablesdata3">
              <InputField
                labelText="First name"
                showHelperText={false}
                showRightIcon={false}
                showLabel
                showPlaceholder
                showLeftIcon={false}
                placeholderText="Your name"
                propMinWidth="239px"
                propBackgroundColor="#f9fafb"
                propBorder="1px solid #d1d5db"
                propBorderTop="unset"
                propBorderBottom="unset"
                propBorderLeft="unset"
                propOverflow="unset"
                user1="pending_I9:1036;45:127840"
                x="pending_I9:1036;45:127842"
              />
              <InputField
                labelText="Last name"
                showHelperText={false}
                showRightIcon={false}
                showLabel
                showPlaceholder
                showLeftIcon={false}
                placeholderText="name@example.com"
                propMinWidth="239px"
                propBackgroundColor="#f9fafb"
                propBorder="1px solid #d1d5db"
                propBorderTop="unset"
                propBorderBottom="unset"
                propBorderLeft="unset"
                propOverflow="unset"
                user1="pending_I9:1037;45:127840"
                x="pending_I9:1037;45:127842"
              />
            </div>
            <div className="self-stretch flex flex-row items-start justify-start flex-wrap content-start gap-boundvariablesdata3 max-w-full mq450:gap-boundvariablesdata3">
              <InputField
                labelText="Email"
                showHelperText={false}
                showRightIcon={false}
                showLabel
                showPlaceholder
                showLeftIcon={false}
                placeholderText="+1(646) 786-5060"
                propMinWidth="239px"
                propBackgroundColor="#f9fafb"
                propBorder="1px solid #d1d5db"
                propBorderTop="unset"
                propBorderBottom="unset"
                propBorderLeft="unset"
                propOverflow="unset"
                user1="pending_I9:1039;45:127840"
                x="pending_I9:1039;45:127842"
              />
              <InputField
                labelText="Phone number"
                showHelperText
                showRightIcon
                showLabel
                showPlaceholder
                showLeftIcon
                placeholderText="+(12) 345 6789"
                user1="pending_I9:1040;45:127840"
                x="pending_I9:1040;45:127842"
              />
            </div>
            <div className="self-stretch flex flex-row items-center justify-start flex-wrap content-center gap-boundvariablesdata3 max-w-full text-gray-900 mq450:gap-boundvariablesdata3">
              <SelectInput
                labelText="Country"
                showLabel
                showLabelIcon
                placeholderText="United States"
                showPlaceholder
              />
              <SelectInput
                labelText="Select language"
                showLabel
                showLabelIcon
                placeholderText="English (US)"
                showPlaceholder
              />
            </div>
            <div className="self-stretch overflow-hidden flex flex-col items-start justify-start max-w-full">
              <Textarea
                placeholderText="Write text here ..."
                showHelper
                labelText="Your message"
                showPlaceholder
                helperText="A note for extra info"
                showLabel
              />
            </div>
            <Checkbox helperText="Some helper text here" showHelper showLabel />
            <Button
              showRightIcon={false}
              showLeftIcon={false}
              buttonText="Send message"
              showButtonText
              propBackgroundColor="#057a55"
              propPadding="10px 19px"
              propOverflow="hidden"
              propBorder="unset"
              propWidth="unset"
              propBorderRadius="8px"
              propHeight="unset"
              cartPlus="pending_I9:1047;26:130982"
              propTextTransform="unset"
              propColor="#fff"
              propAlignSelf="unset"
              cartPlus1="pending_I9:1047;26:128439"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
