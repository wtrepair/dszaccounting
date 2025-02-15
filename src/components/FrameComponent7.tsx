import Testimonials from "./Testimonials";
import PropTypes from "prop-types";

const FrameComponent7 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-16 box-border max-w-full text-center text-17xl text-black font-leading-none-text-sm-font-medium mq825:pb-[42px] mq825:box-border ${className}`}
    >
      <Testimonials />
    </section>
  );
};

FrameComponent7.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent7;
