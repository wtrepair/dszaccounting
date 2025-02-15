import { FunctionComponent, useCallback } from "react";

export type ButtonWhitelDefaultTrueFaType = {
  className?: string;
  showLeftIcon?: boolean;
  buttonText?: string;
  showRightIcon?: boolean;
  showButtonText?: boolean;
};

const ButtonWhitelDefaultTrueFa: FunctionComponent<
  ButtonWhitelDefaultTrueFaType
> = ({
  className = "",
  showLeftIcon = false,
  buttonText = "Learn more",
  showRightIcon = false,
  showButtonText = true,
}) => {
  const onButtonWhitelDefaultTrueFaContainerClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='servicesContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div
      className={`rounded-rounded-lg border-white border-[1px] border-solid flex flex-row items-center justify-center py-boundvariablesdata11 px-boundvariablesdata6 gap-boundvariablesdata7 cursor-pointer text-left text-base text-white font-text-xl-font-normal ${className}`}
      onClick={onButtonWhitelDefaultTrueFaContainerClick}
    >
      {showLeftIcon && (
        <img
          className="w-boundvariablesdata4 relative h-boundvariablesdata4 overflow-hidden shrink-0"
          alt=""
          src="/cartplus.svg"
        />
      )}
      {showButtonText && (
        <div className="relative leading-[150%] font-medium">{buttonText}</div>
      )}
      {showRightIcon && (
        <img
          className="w-boundvariablesdata4 relative h-boundvariablesdata4 overflow-hidden shrink-0"
          alt=""
          src="/cartplus.svg"
        />
      )}
    </div>
  );
};

export default ButtonWhitelDefaultTrueFa;