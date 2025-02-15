import { FunctionComponent } from "react";
import Badge from "./Badge";
import BlogCard from "./BlogCard";

export type GroupComponentType = {
  className?: string;
};

const GroupComponent: FunctionComponent<GroupComponentType> = ({
  className = "",
}) => {
  return (
    <div
      className={`w-full text-center text-gray-900 font-text-xl-font-normal ${className}`}
      data-scroll-to="blog"
    >
      <div className="w-full text-2xl md:text-4xl font-extrabold underline my-8">
        Latest Posts
      </div>
      <div className="w-full bg-white flex flex-col items-center p-4 sm:p-8 text-left text-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
          <BlogCard
            cardHeader="/cardheader@2x.png"
            title="SEO Basics: Beginner’s Guide to Tax Planning Success"
            preview="Tax planning is crucial for maximizing your financial position.
                Our guide helps you navigate the essentials of effective tax
                strategies."
            small="Aug 15, 2021 · 16 min read"
            badgeText="Article"
            showText
            showIcon={false}
            showCloseIcon={false}
          />
          <BlogCard
            cardHeader="/cardheader1@2x.png"
            title="How to Optimize Your Business for Financial Growth"
            preview="Discover how to structure your business finances for long-term growth and success."
            small="Aug 10, 2021 · 6 min read"
            badgeText="Article"
            showText
            showIcon={false}
            showCloseIcon={false}
          />
          <BlogCard
            cardHeader="/cardheader2@2x.png"
            title="Understanding the Latest Tax Changes"
            preview="Navigate recent tax law updates and how they impact your finances."
            small="Aug 1, 2021 · 23 min read"
            badgeText="Tutorial"
            showText
            showIcon
            showCloseIcon
          />
        </div>
      </div>
    </div>
  );
};

export default GroupComponent;
