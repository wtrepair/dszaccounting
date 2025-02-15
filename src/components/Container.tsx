import { FunctionComponent } from "react";
import Button from "./Button";

export type ContainerType = {
  className?: string;
};

const Container: FunctionComponent<ContainerType> = ({ className = "" }) => {
  return (
    <div className={`w-full bg-white py-16 px-4 flex justify-center ${className}`}>
      <div className="max-w-screen-xl flex flex-col md:flex-row items-center gap-10">
        {/* Left Text Content */}
        <div className="flex-1 flex flex-col items-start gap-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
            Protect your wealth against economic changes and financial uncertainty.
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            Dinesh CPA offers tailored services to help you manage your finances efficiently, 
            ensuring that you stay ahead of financial challenges and maximize your wealth.
          </p>
          <p className="text-lg text-gray-500 leading-relaxed">
            With our expert guidance, you’ll gain clarity and confidence in your financial 
            decisions, allowing you to focus on what truly matters—securing your financial future. 
            Whether it’s tax planning, accounting, or strategic advice, Dinesh CPA is your 
            trusted partner every step of the way.
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
            src="/pirateartifactsarrangementstilllife-1@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Container;
