import { FunctionComponent } from "react";
import InputField from "./InputField";
import SelectInput from "./SelectInput";
import Textarea from "./Textarea";
import Checkbox from "./Checkbox";
import Button from "./Button";

export type ContactType = {
  className?: string;
};

const Contact: FunctionComponent<ContactType> = ({ className = "" }) => {
  return (
    <div
      className={`w-full max-w-4xl mx-auto p-8 text-center ${className} `}
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
            Dinesh Singh CGA, CPA
            <br /> Dinesh Professional Corporation
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
            <img src="/mappin.svg" alt="Address Icon" className="w-10 h-10" />
          </div>
          <h3 className="font-semibold mt-4">Address</h3>
          {/* Address for .ca website */}
          {/* <p className="text-gray-500 text-sm">
            216-2985 Drew Road
            <br /> Mississauga, ON
          </p> */}
          {/* Address for .com website */}
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
          {/* Phone for .ca website */}
          {/* <p className="text-gray-500 text-sm">+1 613 480 0184</p> */}
          {/* Phone for .com website */}
          <p className="text-gray-500 text-sm">+1 414 260 9030</p>
          <p className="text-gray-500 text-sm">
            Email us for general queries, including marketing and partnerships.
            <b className="block mt-2 text-green-600"> info@dineshcpa.com</b>
          </p>
        </div>
      </div>

      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InputField
            labelText="First Name"
            placeholderText="Your name"
            showLabel
          />
          <InputField
            labelText="Last Name"
            placeholderText="Your last name"
            showLabel
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InputField
            labelText="Email"
            placeholderText="example@email.com"
            showLabel
          />
          <InputField
            labelText="Phone Number"
            placeholderText="+1 (123) 456-7890"
            showLabel
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <SelectInput
            labelText="Country"
            placeholderText="Select your country"
            showLabel
          />
          <SelectInput
            labelText="Language"
            placeholderText="Preferred language"
            showLabel
          />
        </div>
        <Textarea
          labelText="Your Message"
          placeholderText="Write your message here..."
          showLabel
        />
        <Checkbox showLabel />
        <Button buttonText="Send Message" propBackgroundColor="#057a55" />
      </form>
    </div>
  );
};

export default Contact;
