import Badge from "./Badge";
import BlogCard from "./BlogCard";
import PropTypes from "prop-types";

const FrameComponent6 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[69px] box-border gap-[27px] max-w-full text-center text-17xl text-gray-900 font-leading-none-text-sm-font-medium lg:pb-[45px] lg:box-border mq450:pb-[29px] mq450:box-border ${className}`}
    >
      <h1 className="ml-[-95px] m-0 w-[673px] relative text-inherit [text-decoration:underline] tracking-[-0.01em] leading-[125%] font-extrabold font-[inherit] flex items-center justify-center max-w-full mq450:text-3xl mq450:leading-[27px] mq825:text-10xl mq825:leading-[36px]">
        Latest Posts
      </h1>
      <div className="self-stretch flex flex-col items-start justify-start gap-[13px] max-w-full text-left text-5xl">
        <div className="self-stretch bg-white overflow-hidden flex flex-col items-center justify-center py-[70px] px-0 box-border max-w-full mq825:pt-[45px] mq825:pb-[45px] mq825:box-border">
          <div className="self-stretch flex flex-col items-center justify-start max-w-full mq825:gap-boundvariablesdata13">
            <div className="self-stretch flex flex-row items-center justify-center flex-wrap content-center gap-x-[31px] gap-y-8 max-w-full mq825:gap-[15px]">
              <div className="flex-1 shadow-[0px_4px_6px_-1px_rgba(0,_0,_0,_0.1),_0px_2px_4px_-2px_rgba(0,_0,_0,_0.05)] rounded-lg bg-white overflow-hidden flex flex-col items-start justify-start min-w-[433px] max-w-full mq450:min-w-full mq825:w-[calc(100%_-_40px)]">
                <div className="self-stretch h-[216px] flex flex-col items-start justify-start pt-boundvariablesdata9 px-boundvariablesdata9 pb-0 box-border">
                  <img
                    className="self-stretch flex-1 rounded-lg max-w-full overflow-hidden max-h-full object-cover"
                    loading="lazy"
                    alt=""
                    src="/cardheader@2x.png"
                  />
                </div>
                <div className="self-stretch flex flex-col items-start justify-start p-boundvariablesdata9 box-border max-w-full">
                  <div className="self-stretch flex flex-col items-start justify-end pt-[22px] px-0 pb-0 box-border gap-boundvariablesdata max-w-full">
                    <Badge
                      showText
                      badgeText="Article"
                      showIcon={false}
                      showCloseIcon={false}
                      clock="pending_I120:370;12:142218"
                      x="pending_I120:370;3335:17146"
                    />
                    <div className="self-stretch flex flex-col items-start justify-start gap-boundvariablesdata6 max-w-full">
                      <h2 className="m-0 relative text-inherit leading-[125%] font-bold font-[inherit] inline-block max-w-full mq450:text-lgi mq450:leading-[24px]">
                        <p className="m-0">SEO Basics: Beginner’s Guide to</p>
                        <p className="m-0">Tax Planning Success</p>
                      </h2>
                      <div className="self-stretch relative text-base leading-[150%] text-gray-500">{`Tax planning is crucial for maximizing your financial position. Our guide helps you navigate the essentials of effective tax strategies. `}</div>
                    </div>
                    <div className="flex flex-col items-start justify-end text-sm">
                      <div className="flex flex-row items-center justify-start gap-boundvariablesdata">
                        <img
                          className="h-8 w-8 relative rounded-81xl object-cover"
                          loading="lazy"
                          alt=""
                          src="/avatar@2x.png"
                        />
                        <div className="flex flex-col items-start justify-start">
                          <div className="relative leading-[125%] font-medium">
                            Bonnie Green
                          </div>
                          <div className="relative leading-[125%] text-gray-500 whitespace-nowrap">
                            Aug 15, 2021 · 16 min read
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <BlogCard
                cardHeader="/cardheader-1@2x.png"
                title="How to Optimize Your Business for Financial Growth"
                preview="Discover how to structure your business finances for long-term growth and success."
                small="Aug 10, 2021 · 6 min read"
                clock="pending_I120:384;12:142218"
                badgeText="Article"
                x="pending_I120:384;3335:17146"
                showText
                showIcon={false}
                showCloseIcon={false}
              />
              <BlogCard
                cardHeader="/cardheader-2@2x.png"
                propPadding="unset"
                title="Understanding the Latest Tax Changes: A Guide for Small Businesses and Individuals"
                propHeight="90px"
                preview="Navigate recent tax law updates and how they impact your finances.                                       "
                small="Aug 1, 2021 · 23 min read"
                clock="pending_I120:398;12:142218"
                badgeText="Tutorial"
                x="pending_I120:398;3335:17146"
                showText
                showIcon
                showCloseIcon
              />
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-center py-0 pl-[122px] pr-5 text-xl text-black lg:pl-[61px] lg:box-border mq825:pl-[30px] mq825:box-border">
          <h3 className="m-0 relative text-inherit leading-[150%] font-normal font-[inherit] mq450:text-base mq450:leading-[24px]">
            Stay informed with the most recent financial and business updates by
            subscribing to our blog.​
          </h3>
        </div>
      </div>
    </section>
  );
};

FrameComponent6.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent6;
