import { FunctionComponent } from "react";
import { handleNewsLetter } from "./handleNewsLetter";

export type NewsletterType = {
  className?: string;
};

const Newsletter: FunctionComponent<NewsletterType> = ({ className = "" }) => {
  return (
    <div
      className={`w-full bg-white border-t border-gray-100 py-8 px-6 md:px-12 lg:px-16 ${className}`}
    >
      <div className="max-w-4xl mx-auto shadow-lg rounded-lg bg-gray-50 flex flex-col md:flex-row items-center p-6 sm:p-8 gap-6">
        {/* Left Section */}
        <div className="flex-1 flex flex-col items-start gap-4 text-center md:text-left px-4">
          <b className="text-xl sm:text-2xl tracking-tight leading-snug">
            Subscribe to our email
          </b>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
            Stay informed with the latest financial and business updates by
            subscribing to our blog.
          </p>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-auto flex flex-col items-center md:items-start gap-4 text-center md:text-left px-4">
          <form
            onSubmit={handleNewsLetter}
            className="w-full flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <div className="flex flex-col">
              <input
                type="email"
                placeholder="example@email.com"
                id="email"
                className="border rounded-lg p-3 text-lg"
              />
            </div>
            <div className="flex flex-col w-full sm:w-auto">
              <button
                type="submit"
                className="w-full bg-green-600 text-white text-lg font-bold py-3 rounded-md hover:bg-green-800 transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
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
