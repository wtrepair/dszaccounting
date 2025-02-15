import { FunctionComponent } from "react";
import Card from "./Card";
import Button3 from "./Button3";

export type CarouselType = {
  className?: string;
};

const Carousel: FunctionComponent<CarouselType> = ({ className = "" }) => {
  return (
    <div
      className={`relative w-full max-w-[1440px] min-h-[791px] rounded-lg overflow-hidden bg-[url('/carousel@3x.png')] bg-cover bg-no-repeat bg-top text-left text-lg text-white font-text-xl-font-normal ${className}`}
    >
      <div className="absolute top-14 left-7 flex flex-col gap-8">
        <div className="w-80 shadow-md rounded-lg bg-gray-200 p-4">
          <div className="w-full h-1 bg-primary-600" />
          <div className="mt-2">
            <h3 className="text-xl font-semibold">Trustworthy</h3>
            <p className="text-base text-gray-500">
              We build lasting relationships built on trust
            </p>
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

      <div className="absolute top-[241px] left-[545px] w-[800px]">
        <h2 className="text-5xl font-extrabold leading-snug">
          Empowering your financial future with expert guidance and clear
          communication, so you can focus on what truly matters.
        </h2>
      </div>

      <Button3
        cartPlus="/videocamera1.svg"
        buttonText="Watch video"
        cartPlus1="/cartplus.svg"
        showRightIcon={false}
        showLeftIcon
        showButtonText
        buttonPosition="absolute"
        buttonPadding="12px 20px"
        buttonBackgroundColor="#9ca3af"
        buttonOverflow="hidden"
        buttonBorder="unset"
        buttonTop="665px"
        buttonLeft="545px"
        buttonBorderRadius="8px"
        buttonAlignSelf="unset"
        cartPlusIconWidth="20px"
        cartPlusIconHeight="20px"
        textColor="#fff"
      />
    </div>
  );
};

export default Carousel;
