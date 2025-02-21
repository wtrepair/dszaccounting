import { FunctionComponent, useEffect, useState } from "react";
import { handleFormSubmit } from "./handleFormSubmit";

export type ContactType = {
  className?: string;
};

const Contact: FunctionComponent<ContactType> = ({ className = "" }) => {
  const [countries, setCountries] = useState<string[]>([]);
  const [languages, setLanguages] = useState<string[]>([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        setCountries(data.map((country: any) => country.name.common).sort());
        setLanguages(
          [
            ...new Set(
              data.flatMap((country: any) =>
                Object.values(country.languages || {})
              ) as string[]
            ),
          ].sort()
        );
      })
      .catch((error) =>
        console.error("Error fetching country/language data:", error)
      );
  }, []);

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
          <p className="text-gray-500 text-sm m-2">+1 414 260 9030</p>
          <p className="text-gray-500 text-sm m-2">1-855-DINESH-1</p>
          <p className="text-gray-500 text-sm m-2">
            Email us for general queries, including marketing and partnerships.
            <b className="block mt-2 text-green-600"> info@dineshcpa.com</b>
          </p>
        </div>
      </div>

      <form
        onSubmit={handleFormSubmit}
        className="max-w-2xl mx-auto space-y-6 bg-white p-6 md:p-8 shadow-lg rounded-lg"
      >
        <h3 className="text-2xl font-bold text-gray-700">Send us a message</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label className="text-lg font-bold text-gray-600">
              First Name
            </label>
            <input
              type="text"
              placeholder="Your name"
              id="first_name"
              className="border rounded-lg p-3 text-lg"
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="text-lg font-bold text-gray-600">Last Name</label>
            <input
              type="text"
              placeholder="Your last name"
              id="last_name"
              className="border rounded-lg p-3 text-lg"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label className="text-lg font-bold text-gray-600">Email</label>
            <input
              type="email"
              placeholder="example@email.com"
              id="email"
              className="border rounded-lg p-3 text-lg"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-lg font-bold text-gray-600">
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="+1 (123) 456-7890"
              id="phone"
              required
              className="border rounded-lg p-3 text-lg"
              pattern="^\+?[0-9\s-]+$"
              title="Please enter a valid phone number (only digits, spaces, +, and - allowed)"
              onChange={(e) => {
                if (!/^\+?[0-9\s-]*$/.test(e.target.value)) {
                  e.target.setCustomValidity(
                    "Only numbers, spaces, +, and - are allowed."
                  );
                } else {
                  e.target.setCustomValidity("");
                }
              }}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label className="text-lg font-bold text-gray-600">Country</label>
            <select
              id="country"
              required
              className="border rounded-lg p-3 text-lg"
            >
              <option>Select your country</option>
              {countries.map((country, index) => (
                <option key={index} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col">
            <label className="text-lg font-bold text-gray-600">Language</label>
            <select
              id="language"
              required
              className="border rounded-lg p-3 text-lg cursor-pointer"
            >
              <option>Preferred language</option>
              {languages.map((language, index) => (
                <option key={index} value={language}>
                  {language}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex flex-col">
          <label className="text-lg font-bold text-gray-600">
            Your Message
          </label>
          <textarea
            placeholder="Write your message here..."
            id="message"
            required
            className="border rounded-lg p-3 h-24 text-lg"
          ></textarea>
        </div>

        <div className="flex items-start gap-2">
          <input type="checkbox" required className="mt-1" />
          <label className="text-gray-600 text-sm">
            By submitting this form, you confirm that you have read and agree to
            <a href="#" className="text-green-600">
              {" "}
              Terms of Service{" "}
            </a>
            and
            <a href="#" className="text-green-600">
              {" "}
              Privacy Statement
            </a>
            .
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white text-lg font-bold py-3 rounded-md hover:bg-green-800 transition duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
