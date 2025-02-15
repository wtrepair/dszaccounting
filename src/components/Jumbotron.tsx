import { FunctionComponent } from "react";
import Button from "./Button";
import ButtonWhitelDefaultTrueFa from "./ButtonWhitelDefaultTrueFa";

export type JumbotronType = {
  className?: string;
};

const Jumbotron: FunctionComponent<JumbotronType> = ({ className = "" }) => {
  return (
    <div
      className={`relative w-full flex flex-col items-center justify-center min-h-screen bg-cover bg-no-repeat bg-center text-center text-white ${className}`}
      style={{ backgroundImage: "url('/jumbotron@3x.png')" }}
    >
      <div className="max-w-4xl flex flex-col items-center gap-6">
        <h1 className="text-13xl md:text-17xl lg:text-41xl font-extrabold leading-tight">
          Streamlining finances for <br /> individuals, businesses, growth
        </h1>
        <p className="max-w-2xl text-lg md:text-xl leading-relaxed">
          Empowering your financial journey with expert accounting services,
          precise tax planning, and effective financial strategies tailored to
          meet your unique needs.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button buttonText="Get started" propBackgroundColor="#0e9f6e" />
          <ButtonWhitelDefaultTrueFa buttonText="Learn more" />
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
