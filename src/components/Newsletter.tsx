import { FunctionComponent } from "react";
import InputField from "./InputField";
import Button from "./Button";

export type NewsletterType = {
  className?: string;
};

const Newsletter: FunctionComponent<NewsletterType> = ({ className = "" }) => {
  return (
    <div className={`w-full bg-white border-t border-gray-100 py-8 px-6 md:px-12 lg:px-16 ${className}`}>
      <div className="max-w-4xl mx-auto shadow-lg rounded-lg bg-gray-50 flex flex-col md:flex-row items-center p-6 sm:p-8 gap-6">
        {/* Left Section */}
        <div className="flex-1 flex flex-col items-start gap-4 text-center md:text-left px-4">
          <b className="text-xl sm:text-2xl tracking-tight leading-snug">
            Subscribe to our email
          </b>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
            Stay informed with the latest financial and business updates by subscribing to our blog.
          </p>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-auto flex flex-col items-center md:items-start gap-4 text-center md:text-left px-4">
          <div className="w-full flex flex-col sm:flex-row items-center">
            <InputField
              placeholderText="Enter your email"
              showPlaceholder
              showLeftIcon
              className="w-full sm:w-auto flex-1 border border-gray-300 rounded-l-md px-4 py-2"
            />
            <Button
              buttonText="Subscribe"
              showButtonText
              className="bg-green-600 text-white px-6 py-2 rounded-r-md w-full sm:w-auto"
            />
          </div>
          <p className="text-xs text-gray-500">
            We care about the protection of your data. Read our{" "}
            <a href="#" className="text-gray-900 underline font-medium">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
