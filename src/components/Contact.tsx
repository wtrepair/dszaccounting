import { FunctionComponent, useEffect, useState } from "react";
import { handleFormSubmit } from "./handleFormSubmit";
import ContactForm from "./ContactForm";

export type ContactType = {
  className?: string;
};

const Contact: FunctionComponent<ContactType> = ({ className = "" }) => {

  return (
    <div
      className={`w-full max-w-4xl mx-auto py-8 text-center items-center justify-center  ${className} `}
      data-scroll-to="contactContainer"
    >
      <h2 className="text-4xl font-bold text-gray-900 mb-6">Contact Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
            <img src="/store.svg" alt="Company Icon" className="w-10 h-10" />
          </div>
          <h3 className="font-semibold mt-4">Company Information</h3>
          <p className="text-gray-500 text-sm">
            Dinesh Singh, CPA
            <br /> DSZ Accounting & Tax Consultants
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
            <img src="/mappin.svg" alt="Address Icon" className="w-10 h-10" />
          </div>
          <h3 className="font-semibold mt-4">Address</h3>
          <p className="text-gray-500 text-sm">
            500 W. Silver Spring Drive, Suite K200,
            <br /> Glendale, Wisconsin 53217
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
            <img src="/phone.svg" alt="Contact Icon" className="w-10 h-10" />
          </div>
          <h3 className="font-semibold mt-4">Contact Us</h3>
          <p className="text-gray-500 text-sm m-2">+1-414-260-9030</p>
          <p className="text-gray-500 text-sm m-2">1-855-DINESH-1</p>
          <p className="text-gray-500 text-sm m-2">
            Email us for general queries, including marketing and partnerships.
            <b className="block mt-2 text-green-600"> info@dszaccounting.com</b>
          </p>
        </div>
      </div>

      {/* <ContactForm /> */}
    </div>
  );
};

export default Contact;
