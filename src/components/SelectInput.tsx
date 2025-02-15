import { FunctionComponent } from "react";

export type SelectInputProps = {
  className?: string;
  labelText?: string;
  showLabel?: boolean;
  showLabelIcon?: boolean;
  placeholderText?: string;
  showPlaceholder?: boolean;
};

const SelectInput: FunctionComponent<SelectInputProps> = ({
  className = "",
  labelText = "Select language",
  showLabel = true,
  showLabelIcon = true,
  placeholderText = "English (US)",
  showPlaceholder = true,
}) => {
  return (
    <div className={`flex flex-col gap-2 text-sm text-gray-900 ${className}`}>
      {showLabel && (
        <div className="flex items-center gap-2">
          <span className="font-medium">{labelText}</span>
          {showLabelIcon && <img className="w-4 h-4" alt="info" src="/info.svg" />}
        </div>
      )}
      <div className="relative w-full bg-gray-50 border border-gray-300 rounded-lg p-2 flex items-center justify-between text-gray-500 cursor-pointer">
        {showPlaceholder && <span>{placeholderText}</span>}
        <img className="w-4 h-4" alt="dropdown" src="/chevrondown1.svg" />
      </div>
    </div>
  );
};

export default SelectInput;
