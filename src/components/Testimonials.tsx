import { FunctionComponent, useState } from "react";

export type TestimonialsType = {
  className?: string;
};

const testimonialsData = [
  {
    text: "I’ve had a great experience with Dinesh Singh CPA. Their clear communication and ability to simplify complex financial matters have made managing my finances stress-free. Highly recommend!",
    name: "J. Lohuis",
    role: "C.E.O",
    avatar: "/avatar1@2x.png",
  },
  {
    text: "Dinesh Singh CPA has been an invaluable partner in our financial planning. Their expertise and dedication have given us confidence in managing our company's finances.",
    name: "M. Patel",
    role: "Financial Director",
    avatar: "/avatar2@2x.png",
  },
  {
    text: "Their tax planning services helped us save a significant amount while ensuring compliance. We highly appreciate their professionalism and attention to detail!",
    name: "A. Brown",
    role: "Business Owner",
    avatar: "/avatar3@2x.png",
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
        <div className="w-full max-w-[768px] flex flex-col items-center justify-center text-center">
          <p className="text-xl md:text-2xl font-semibold text-gray-900 leading-relaxed">
            “{testimonialsData[currentIndex].text}”
          </p>
          <div className="flex flex-row items-center justify-center gap-3 mt-4">
            <img className="w-10 h-10 rounded-full object-cover" src={testimonialsData[currentIndex].avatar} alt={testimonialsData[currentIndex].name} />
            <div className="flex flex-row items-center gap-2">
              <span className="text-lg font-semibold">{testimonialsData[currentIndex].name}</span>
              <span className="text-gray-400">/</span>
              <span className="text-sm text-gray-500">{testimonialsData[currentIndex].role}</span>
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
