import { FunctionComponent } from "react";

export type SelectInputType = {
  className?: string;
  labelText?: string;
  showLabel?: boolean;
  showLabelIcon?: boolean;
  placeholderText?: string;
  showPlaceholder?: boolean;
};

const SelectInput: FunctionComponent<SelectInputType> = ({
  className = "",
  labelText = "Select language",
  showLabel = true,
  showLabelIcon = true,
  placeholderText = "English (US)",
  showPlaceholder = true,
}) => {
  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start gap-boundvariablesdata7 text-left text-sm text-gray-900 font-text-xl-font-normal ${className}`}
    >
      {showLabel && (
        <div className="self-stretch flex flex-row items-center justify-start gap-boundvariablesdata7">
          <div className="relative leading-[150%] font-medium">{labelText}</div>
          {showLabelIcon && (
            <img
              className="w-boundvariablesdata11 relative h-boundvariablesdata11 overflow-hidden shrink-0"
              alt=""
              src="/info.svg"
            />
          )}
        </div>
      )}
      <div className="self-stretch rounded-lg bg-gray-50 border-gray-300 border-[1px] border-solid flex flex-col items-start justify-start p-boundvariablesdata11 text-gray-500">
        <div className="self-stretch flex flex-row items-center justify-start">
          {showPlaceholder && (
            <div className="self-stretch flex-1 relative leading-[125%] flex items-center">
              {placeholderText}
            </div>
          )}
          <img
            className="w-boundvariablesdata1 relative h-boundvariablesdata1 overflow-hidden shrink-0"
            alt=""
            src="/chevrondown1.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default SelectInput;