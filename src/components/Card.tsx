import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type CardType = {
  className?: string;
  title?: string;
  description?: string;

  /** Style props */
  propBorderRadius?: CSSProperties["borderRadius"];
};

const Card: FunctionComponent<CardType> = ({
  className = "",
  propBorderRadius,
  title,
  description,
}) => {
  const rectangleDivStyle: CSSProperties = useMemo(() => {
    return {
      borderRadius: propBorderRadius,
    };
  }, [propBorderRadius]);

  return (
    <div
      className={`w-80 [filter:drop-shadow(0px_1px_3px_rgba(0,_0,_0,_0.1))_drop-shadow(0px_1px_2px_rgba(0,_0,_0,_0.1))] rounded-8xs flex flex-col items-start justify-start p-boundvariablesdata4 box-border gap-boundvariablesdata7 text-left text-lg text-white font-text-xl-font-normal ${className}`}
    >
      <div
        className="self-stretch relative rounded-sm bg-gray-500 h-1"
        style={rectangleDivStyle}
      />
      <div className="self-stretch flex flex-col items-start justify-start gap-boundvariablesdata7">
        <div className="self-stretch relative leading-[125%] font-semibold">
          {title}
        </div>
        <div className="self-stretch relative text-base leading-[150%] text-gray-400">
          {description}
        </div>
      </div>
    </div>
  );
};

export default Card;