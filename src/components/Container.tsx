import { FunctionComponent } from "react";
import Button from "./Button";

export type ContainerType = {
  className?: string;
};

const Container: FunctionComponent<ContainerType> = ({ className = "" }) => {
  return (
    <div
      className={`w-full bg-white py-16 px-4 flex justify-center ${className}`}
    >
      <div className="max-w-screen-xl flex flex-col lg:flex-row items-center gap-10">
        {/* Left Text Content */}
        <div className="flex-1 flex flex-col items-start gap-4 px-2 md:px-4">
          <h2 className="text-13xl md:text-4xl font-extrabold text-gray-900 leading-tight">
            Protect Your Wealth with Strategic Investment & Retirement Planning
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            <b>DSZ Accounting and Tax Consultants</b> offers tailored services to help you manage your
            finances efficiently.
            <br />
            With our expert guidance, you’ll gain clarity and confidence in your
            financial decisions, allowing you to focus on what truly
            matters—securing your financial future. Let us help you make
            informed financial decisions with confidence.
          </p>
          <Button
            showRightIcon
            showLeftIcon={false}
            buttonText="Read more"
            showButtonText
            propBackgroundColor="#057a55"
            propPadding="10px 20px"
            propOverflow="unset"
            propBorder="1px solid #e5e7eb"
            propWidth="unset"
            propBorderRadius="8px"
            propHeight="unset"
            cartPlus="/cartplus1.svg"
            propTextTransform="unset"
            propColor="#fff"
            propAlignSelf="unset"
            cartPlus1="/arrownarrowright.svg"
            buttonFlex="unset"
            buttonAlignSelf="unset"
          />
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center">
          <img
            className="w-full max-w-md md:max-w-lg h-auto object-cover"
            alt="Financial security concept"
            src="/pirateartifactsarrangementstilllife.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Container;
