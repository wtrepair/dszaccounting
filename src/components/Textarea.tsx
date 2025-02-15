import { FunctionComponent } from "react";

export type TextareaType = {
  className?: string;
  placeholderText?: string;
  showHelper?: boolean;
  labelText?: string;
  showPlaceholder?: boolean;
  helperText?: string;
  showLabel?: boolean;
};

const Textarea: FunctionComponent<TextareaType> = ({
  className = "",
  placeholderText = "Write text here ...",
  showHelper = false,
  labelText = "Your message",
  showPlaceholder = false,
  helperText = "A note for extra info",
  showLabel = true,
}) => {
  return (
    <div
      className={`self-stretch h-[195px] flex flex-col items-center justify-start gap-boundvariablesdata7 text-left text-sm text-gray-500 font-text-xl-font-normal ${className}`}
    >
      {showLabel && (
        <div className="self-stretch relative leading-[150%] font-medium text-gray-900">
          {labelText}
        </div>
      )}
      <div className="self-stretch flex-1 rounded-lg bg-gray-50 border-gray-300 border-[1px] border-solid flex flex-row items-start justify-start py-boundvariablesdata11 px-boundvariablesdata4">
        <div className="flex-1 h-[19px] flex flex-row items-start justify-start">
          {showPlaceholder && (
            <div className="self-stretch w-[462px] relative leading-[150%] items-center">
              {placeholderText}
            </div>
          )}
        </div>
      </div>
      {showHelper && (
        <div className="w-[494px] relative text-xs leading-[150%]">
          {helperText}
        </div>
      )}
    </div>
  );
};

export default Textarea;