import { FunctionComponent } from "react";

export type InputField1Type = {
  className?: string;
  labelText?: string;
  showHelperText?: boolean;
  showRightIcon?: boolean;
  showLabel?: boolean;
  showPlaceholder?: boolean;
  showLeftIcon?: boolean;
  placeholderText?: string;
};

const InputField1: FunctionComponent<InputField1Type> = ({
  className = "",
  labelText = "First name",
  showHelperText = false,
  showRightIcon = false,
  showLabel = false,
  showPlaceholder = true,
  showLeftIcon = true,
  placeholderText = "Search",
}) => {
  return (
    <div
      className={`w-[514px] flex flex-col items-start justify-start gap-boundvariablesdata27 text-left text-sm text-gray-500 font-text-xl-font-normal ${className}`}
    >
      {showLabel && (
        <div className="w-[364px] relative leading-[150%] font-medium text-gray-900">
          {labelText}
        </div>
      )}
      <div className="self-stretch rounded-lg bg-gray-50 border-gray-300 border-[1px] border-solid flex flex-row items-center justify-start py-boundvariablesdata25 px-boundvariablesdata26">
        <div className="flex-1 flex flex-row items-center justify-start gap-2.5">
          {showLeftIcon && (
            <img
              className="w-boundvariablesdata29 relative h-boundvariablesdata29 overflow-hidden shrink-0"
              alt=""
              src="/searchoutline.svg"
            />
          )}
          {showPlaceholder && (
            <div className="flex-1 relative leading-[125%]">
              {placeholderText}
            </div>
          )}
          {showRightIcon && (
            <img
              className="w-boundvariablesdata25 relative h-boundvariablesdata25 overflow-hidden shrink-0"
              alt=""
              src="/x.svg"
            />
          )}
        </div>
      </div>
      {showHelperText && (
        <div className="w-[364px] relative leading-[125%]">
          <span>{`We’ll never share your details. See our `}</span>
          <span className="text-gray-900">Privacy Policy.</span>
        </div>
      )}
    </div>
  );
};

export default InputField1;