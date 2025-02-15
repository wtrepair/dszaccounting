import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type InputFieldType = {
  className?: string;
  labelText?: string;
  showHelperText?: boolean;
  showRightIcon?: boolean;
  showLabel?: boolean;
  showPlaceholder?: boolean;
  showLeftIcon?: boolean;
  placeholderText?: string;
  user1?: string;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propBorder?: CSSProperties["border"];
  propBorderTop?: CSSProperties["borderTop"];
  propBorderBottom?: CSSProperties["borderBottom"];
  propBorderLeft?: CSSProperties["borderLeft"];
  propOverflow?: CSSProperties["overflow"];
  labelAlignSelf?: CSSProperties["alignSelf"];
  labelWidth?: CSSProperties["width"];
};

const InputField: FunctionComponent<InputFieldType> = ({
  className = "",
  labelText = "Phone number",
  showHelperText = false,
  showRightIcon = false,
  showLabel = true,
  showPlaceholder = true,
  showLeftIcon = false,
  placeholderText = "+(12) 345 6789",
  propMinWidth,
  propBackgroundColor,
  propBorder,
  propBorderTop,
  propBorderBottom,
  propBorderLeft,
  propOverflow,
  user1,
  labelAlignSelf,
  labelWidth,
}) => {
  const inputFieldStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const inputStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
      border: propBorder,
      borderTop: propBorderTop,
      borderBottom: propBorderBottom,
      borderLeft: propBorderLeft,
      overflow: propOverflow,
    };
  }, [
    propBackgroundColor,
    propBorder,
    propBorderTop,
    propBorderBottom,
    propBorderLeft,
    propOverflow,
  ]);

  const labelStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: labelAlignSelf,
      width: labelWidth,
    };
  }, [labelAlignSelf, labelWidth]);

  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start gap-boundvariablesdata7 text-left text-sm text-gray-500 font-text-xl-font-normal ${className}`}
      style={inputFieldStyle}
    >
      {showLabel && (
        <div
          className="self-stretch relative leading-[150%] font-medium text-gray-900"
          style={labelStyle}
        >
          {labelText}
        </div>
      )}
      <div
        className="self-stretch rounded-lg bg-gray-50 border-gray-300 border-[1px] border-solid flex flex-row items-center justify-start py-boundvariablesdata11 px-boundvariablesdata4"
        style={inputStyle}
      >
        <div className="flex-1 flex flex-row items-center justify-start gap-2.5">
          {showLeftIcon && (
            <img
              className="w-boundvariablesdata4 relative h-boundvariablesdata4 overflow-hidden shrink-0 hidden"
              alt=""
              src={user1}
            />
          )}
          {showPlaceholder && (
            <div className="flex-1 relative leading-[125%]">
              {placeholderText}
            </div>
          )}
          {showRightIcon && (
            <img
              className="w-boundvariablesdata11 relative h-boundvariablesdata11 overflow-hidden shrink-0 hidden"
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

export default InputField;