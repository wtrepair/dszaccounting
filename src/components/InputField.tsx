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
  labelText = "Email",
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
      maxWidth: "100%", // Prevents horizontal overflow
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
      className={`flex-1 flex flex-col items-start justify-start gap-2 text-left text-sm text-gray-500 font-normal ${className}`}
      style={inputFieldStyle}
    >
      {showLabel && (
        <label
          className="self-stretch text-gray-900 font-medium leading-[150%]"
          style={labelStyle}
        >
          {labelText}
        </label>
      )}
      <div
        className="self-stretch rounded-lg bg-gray-50 border-gray-300 border px-3 py-2 flex flex-row items-center justify-start"
        style={inputStyle}
      >
        {showLeftIcon && user1 && (
          <img className="w-5 h-5" alt="Icon" src={user1} />
        )}
        {showPlaceholder && (
          <input
            className="w-full bg-transparent outline-none text-gray-700 placeholder-gray-400"
            type="text"
            placeholder={placeholderText}
          />
        )}
        {showRightIcon && (
          <img className="w-5 h-5 cursor-pointer" alt="Clear" src="/x.svg" />
        )}
      </div>
      {showHelperText && (
        <p className="w-full text-gray-500 text-xs leading-[125%]">
          We’ll never share your details. See our{" "}
          <span className="text-gray-900">Privacy Policy.</span>
        </p>
      )}
    </div>
  );
};

export default InputField;
