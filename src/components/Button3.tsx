import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type Button3Type = {
  className?: string;
  cartPlus?: string;
  buttonText?: string;
  cartPlus1?: string;
  showRightIcon?: boolean;
  showLeftIcon?: boolean;
  showButtonText?: boolean;

  /** Style props */
  buttonPosition?: CSSProperties["position"];
  buttonPadding?: CSSProperties["padding"];
  buttonBackgroundColor?: CSSProperties["backgroundColor"];
  buttonOverflow?: CSSProperties["overflow"];
  buttonBorder?: CSSProperties["border"];
  buttonTop?: CSSProperties["top"];
  buttonLeft?: CSSProperties["left"];
  buttonBorderRadius?: CSSProperties["borderRadius"];
  buttonAlignSelf?: CSSProperties["alignSelf"];
  cartPlusIconWidth?: CSSProperties["width"];
  cartPlusIconHeight?: CSSProperties["height"];
  textColor?: CSSProperties["color"];
};

const Button3: FunctionComponent<Button3Type> = ({
  className = "",
  cartPlus,
  buttonText = "Button text",
  cartPlus1,
  showRightIcon = true,
  showLeftIcon = true,
  showButtonText = true,
  buttonPosition,
  buttonPadding,
  buttonBackgroundColor,
  buttonOverflow,
  buttonBorder,
  buttonTop,
  buttonLeft,
  buttonBorderRadius,
  buttonAlignSelf,
  cartPlusIconWidth,
  cartPlusIconHeight,
  textColor,
}) => {
  const buttonStyle: CSSProperties = useMemo(() => {
    return {
      position: buttonPosition,
      padding: buttonPadding,
      backgroundColor: buttonBackgroundColor,
      overflow: buttonOverflow,
      border: buttonBorder,
      top: buttonTop,
      left: buttonLeft,
      borderRadius: buttonBorderRadius,
      alignSelf: buttonAlignSelf,
    };
  }, [
    buttonPosition,
    buttonPadding,
    buttonBackgroundColor,
    buttonOverflow,
    buttonBorder,
    buttonTop,
    buttonLeft,
    buttonBorderRadius,
    buttonAlignSelf,
  ]);

  const cartPlusIconStyle: CSSProperties = useMemo(() => {
    return {
      width: cartPlusIconWidth,
      height: cartPlusIconHeight,
    };
  }, [cartPlusIconWidth, cartPlusIconHeight]);

  const textStyle: CSSProperties = useMemo(() => {
    return {
      color: textColor,
    };
  }, [textColor]);

  return (
    <div
      className={`relative rounded-rounded-lg bg-primary-700 overflow-hidden flex flex-row items-center justify-center py-boundvariablesdata1 px-boundvariablesdata6 gap-boundvariablesdata7 text-left text-sm text-white font-text-xl-font-normal ${className}`}
      style={buttonStyle}
    >
      {showLeftIcon && (
        <img
          className="w-boundvariablesdata8 relative h-boundvariablesdata8 overflow-hidden shrink-0"
          alt=""
          src={cartPlus}
          style={cartPlusIconStyle}
        />
      )}
      {showButtonText && (
        <div className="relative leading-[150%] font-medium" style={textStyle}>
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

export default Button3;
