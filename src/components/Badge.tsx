import { FunctionComponent } from "react";

export type BadgeType = {
  className?: string;
  showText?: boolean;
  badgeText?: string;
  showIcon?: boolean;
  showCloseIcon?: boolean;
};

const Badge: FunctionComponent<BadgeType> = ({
  className = "",
  showText = true,
  badgeText = "Tutorial",
  showIcon = false,
  showCloseIcon = false,
}) => {
  return (
    <div
      className={`rounded-rounded-md bg-indigo-100 flex flex-row items-center justify-center py-boundvariablesdata20 px-boundvariablesdata1 gap-boundvariablesdata21 text-center text-xs text-indigo-800 font-text-xl-font-normal ${className}`}
    >
      {showIcon && (
        <img
          className="w-boundvariablesdata1 relative h-boundvariablesdata1 overflow-hidden shrink-0 hidden"
          alt=""
          src="/clock.svg"
        />
      )}
      {showText && (
        <div className="relative leading-[150%] font-medium">{badgeText}</div>
      )}
      {showCloseIcon && (
        <img
          className="w-boundvariablesdata7 relative h-boundvariablesdata7 overflow-hidden shrink-0 hidden"
          alt=""
          src="/x1.svg"
        />
      )}
    </div>
  );
};

export default Badge;