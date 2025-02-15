import { FunctionComponent } from "react";

export type CheckboxType = {
  className?: string;
  helperText?: string;
  showHelper?: boolean;
  showLabel?: boolean;
};

const Checkbox: FunctionComponent<CheckboxType> = ({
  className = "",
  helperText = "Some helper text here",
  showHelper = false,
  showLabel = true,
}) => {
  return (
    <div
      className={`rounded flex flex-row items-center justify-start gap-boundvariablesdata7 text-left text-xs text-gray-500 font-text-xl-font-normal ${className}`}
    >
      <div className="w-boundvariablesdata4 rounded bg-gray-50 border-gray-300 border-[0.5px] border-solid box-border h-boundvariablesdata4" />
      {showLabel && (
        <div className="flex flex-col items-start justify-start gap-boundvariablesdata20">
          <div className="relative leading-[150%]">
            <span>{`By submitting this form, you confirm that you have read and agree to `}</span>
            <span className="[text-decoration:underline] text-black">
              <b className="font-text-xl-font-normal">
                <span className="text-gray1-100">Dinesh CPA</span>
              </b>
              <span>
                <b className="font-text-xl-font-normal">{` `}</b>
                <span className="font-medium">Terms of Service</span>
              </span>
            </span>
            <span>{` and `}</span>
            <span className="[text-decoration:underline] font-medium text-black">
              Privacy Statement
            </span>
          </div>
          {showHelper && (
            <div className="w-[126px] relative leading-[150%]">
              {helperText}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Checkbox;