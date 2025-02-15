import { FunctionComponent, useMemo, type CSSProperties } from "react";
import Badge from "./Badge";

export type BlogCardType = {
  className?: string;
  cardHeader?: string;
  title?: string;
  preview?: string;
  small?: string;
  badgeText?: string;
  showText?: boolean;
  showIcon?: boolean;
  showCloseIcon?: boolean;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propHeight?: CSSProperties["height"];
  cardBodyFlex?: CSSProperties["flex"];
  contentFlex?: CSSProperties["flex"];
};

const BlogCard: FunctionComponent<BlogCardType> = ({
  className = "",
  cardHeader,
  propPadding,
  title,
  propHeight,
  preview,
  small,
  badgeText,
  showText,
  showIcon,
  showCloseIcon,
  cardBodyFlex,
  contentFlex,
}) => {
  const contentStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
      flex: contentFlex,
    };
  }, [propPadding, contentFlex]);

  const titleStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const cardBodyStyle: CSSProperties = useMemo(() => {
    return {
      flex: cardBodyFlex,
    };
  }, [cardBodyFlex]);

  return (
    <div
      className={`flex-1 shadow-[0px_4px_6px_-1px_rgba(0,_0,_0,_0.1),_0px_2px_4px_-2px_rgba(0,_0,_0,_0.05)] rounded-lg bg-white h-auto overflow-hidden flex flex-col items-start justify-start gap-boundvariablesdata4 text-left text-5xl text-gray-900 font-text-xl-font-normal ${className}`}
    >
      <div className="self-stretch flex flex-col items-start justify-start pt-boundvariablesdata10 px-boundvariablesdata10 pb-0">
        <img
          className="self-stretch rounded-lg max-w-full overflow-hidden h-48 shrink-0 object-cover"
          alt=""
          src={cardHeader}
        />
      </div>
      <div
        className="self-stretch flex-1 flex flex-col items-start justify-start p-boundvariablesdata10"
        style={cardBodyStyle}
      >
        <div
          className="self-stretch flex-1 flex flex-col items-start justify-end gap-boundvariablesdata11"
          style={contentStyle}
        >
          <Badge
            showText={showText}
            badgeText={badgeText}
            showIcon={showIcon}
            showCloseIcon={showCloseIcon}
          />
          <div className="self-stretch flex flex-col items-start justify-start gap-boundvariablesdata1">
            <b
              className="self-stretch relative leading-[125%]"
              style={titleStyle}
            >
              {title}
            </b>
            <div className="self-stretch relative text-base leading-[150%] text-gray-500">
              {preview}
            </div>
          </div>
          <div className="flex flex-row items-end justify-center gap-boundvariablesdata11 text-sm">
            <img
              className="w-8 relative rounded-81xl h-8 object-cover"
              alt=""
              src="/avatar@2x.png"
            />
            <div className="flex flex-col items-start justify-start">
              <div className="relative leading-[125%] font-medium">
                Bonnie Green
              </div>
              <div className="relative leading-[125%] text-gray-500">
                {small}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;