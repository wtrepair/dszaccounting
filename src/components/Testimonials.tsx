import { FunctionComponent, useState } from "react";

export type TestimonialsType = {
  className?: string;
};

const testimonialsData = [
  {
    text: "I’ve had a great experience with Dinesh Singh CPA. Their clear communication and ability to simplify complex financial matters have made managing my finances stress-free. Highly recommend!",
    name: "Josh L.",
    avatar: "/avatar1@2x.png",
  },
  {
    text: "Dinesh Singh CPA, is very smart accountant,I have been consulting Dinesh for my buisness accounting needs since 10 years.He is honest, sincère and hard working..",
    name: "Jagmohan S.",
    avatar: "/J singh.png",
  },
  {
    text: "Mr. Dinesh is a very good financial professional.He is an honest and hard working individual he is giving the best advice. He is very prompt and provides a hassle free experience. I highly recommend using their services. He is very quick to respond to any of my questions and solve all my problems. He is best for me. I would highly recommend Dinesh singh.",
    name: "Divya M.", 
    avatar: "/divya monga.png",
  },
];

const Testimonials: FunctionComponent<TestimonialsType> = ({ className = "" }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className={`w-full bg-white border-t border-b border-gray-200 flex flex-col items-center justify-start py-16 px-6 md:px-12 lg:px-20 ${className}`}>
      <div className="w-full max-w-[1280px] flex flex-col items-center justify-start gap-12">
        
        {/* Header */}
        <div className="flex flex-col items-center justify-center text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-black">Happy Customers</h2>
          <p className="text-lg md:text-xl text-gray-500 mt-2">
            Hear from our satisfied clients about their experiences with us.
          </p>
        </div>

        {/* Testimonials */}
        <div className="w-full max-w-[768px] flex flex-col items-center justify-center text-center px-6">
          <p className="text-xl md:text-2xl font-semibold text-gray-900 leading-relaxed italic">
            “{testimonialsData[currentIndex].text}”
          </p>
          <div className="flex flex-row items-center justify-center gap-3 mt-4">
            <img className="w-10 h-10 rounded-full object-cover" src={testimonialsData[currentIndex].avatar} alt={testimonialsData[currentIndex].name} />
            <div className="flex flex-row items-center gap-2">
              <span className="text-lg font-semibold">{testimonialsData[currentIndex].name}</span>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex items-center gap-6 mt-6">
          <button onClick={prevTestimonial} className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition">
            <img className="w-6 h-6" src="/arrowleftoutline.svg" alt="Previous" />
          </button>
          <button onClick={nextTestimonial} className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition">
            <img className="w-6 h-6" src="/arrowrightoutline2.svg" alt="Next" />
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default Testimonials;
