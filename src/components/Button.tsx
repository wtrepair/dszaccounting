import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type ButtonType = {
  className?: string;
  showRightIcon?: boolean;
  showLeftIcon?: boolean;
  buttonText?: string;
  showButtonText?: boolean;
  cartPlus?: string;
  cartPlus1?: string;

  /** Style props */
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propPadding?: CSSProperties["padding"];
  propOverflow?: CSSProperties["overflow"];
  propBorder?: CSSProperties["border"];
  propWidth?: CSSProperties["width"];
  propBorderRadius?: CSSProperties["borderRadius"];
  propHeight?: CSSProperties["height"];
  propTextTransform?: CSSProperties["textTransform"];
  propColor?: CSSProperties["color"];
  propAlignSelf?: CSSProperties["alignSelf"];
  buttonFlex?: CSSProperties["flex"];
  buttonAlignSelf?: CSSProperties["alignSelf"];
};

const Button: FunctionComponent<ButtonType> = ({
  className = "",
  showRightIcon = false,
  showLeftIcon = false,
  buttonText = "Contact us",
  showButtonText = true,
  propBackgroundColor,
  propPadding,
  propOverflow,
  propBorder,
  propWidth,
  propBorderRadius,
  propHeight,
  cartPlus,
  propTextTransform,
  propColor,
  propAlignSelf,
  cartPlus1,
  buttonFlex,
  buttonAlignSelf,
}) => {
  const button1Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
      padding: propPadding,
      overflow: propOverflow,
      border: propBorder,
      width: propWidth,
      borderRadius: propBorderRadius,
      height: propHeight,
      flex: buttonFlex,
      alignSelf: buttonAlignSelf,
    };
  }, [
    propBackgroundColor,
    propPadding,
    propOverflow,
    propBorder,
    propWidth,
    propBorderRadius,
    propHeight,
    buttonFlex,
    buttonAlignSelf,
  ]);

  const text1Style: CSSProperties = useMemo(() => {
    return {
      textTransform: propTextTransform,
      color: propColor,
      alignSelf: propAlignSelf,
    };
  }, [propTextTransform, propColor, propAlignSelf]);

  return (
    <div
      className={`flex-1 rounded-rounded-lg bg-green-800 overflow-hidden flex flex-row items-center justify-center py-boundvariablesdata1 px-boundvariablesdata6 gap-boundvariablesdata7 text-left text-sm text-white font-text-xl-font-normal ${className}`}
      style={button1Style}
    >
      {showLeftIcon && (
        <img
          className="w-boundvariablesdata8 relative h-boundvariablesdata8 overflow-hidden shrink-0"
          alt=""
          src={cartPlus}
        />
      )}
      {showButtonText && (
        <div
          className="relative leading-[150%] uppercase font-medium"
          style={text1Style}
        >
          {buttonText}
        </div>
      )}
      {showRightIcon && (
        <img
          className="w-boundvariablesdata8 relative h-boundvariablesdata8 overflow-hidden shrink-0"
          alt=""
          src={cartPlus1}
        />
      )}
    </div>
  );
};

export default Button;