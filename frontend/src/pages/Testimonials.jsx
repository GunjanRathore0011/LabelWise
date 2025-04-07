import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "Anjali Verma",
    feedback: "LabelWise helped me avoid unhealthy food choices instantly. Love the design too!",
    location: "Delhi, India",
  },
  {
    name: "Rahul Joshi",
    feedback: "Such a handy tool while shopping! The ingredients scanner is a life saver.",
    location: "Mumbai, India",
  },
  {
    name: "Sneha Kapoor",
    feedback: "I use it for every packaged item now. My fitness coach is proud!",
    location: "Bangalore, India",
  },
  {
    name: "Arjun Mehta",
    feedback: "Simple UI, fast scanning, and informative suggestions. Totally recommend it!",
    location: "Pune, India",
  },
  {
    name: "Priya Deshmukh",
    feedback: "The alerts on harmful additives really opened my eyes. Thank you!",
    location: "Hyderabad, India",
  },
  {
    name: "Karan Singh",
    feedback: "Finally something that educates users about what they're eating!",
    location: "Chandigarh, India",
  },
  {
    name: "Meera Sharma",
    feedback: "I recommend this to every parent out there. Great for checking kids' snacks.",
    location: "Jaipur, India",
  },
  {
    name: "Nikhil Raj",
    feedback: "The health score feature is amazing. Great work by the team!",
    location: "Lucknow, India",
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000, // faster slide
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full py-16 bg-white mt-28 mb-32" id="testimonials">
      <h2 className="text-4xl font-bold text-center  text-green-700 mb-28" 
      data-aos="fade-up">
        Users Love LabelWise ❤️
      </h2>

      <div className="w-[90%] mx-auto">
        <Slider {...settings}>
          {testimonials.map((item, index) => (
            <div key={index} className="p-4">
              <div className="bg-green-100 p-6 rounded-2xl shadow-md h-[230px] flex flex-col justify-between">
                <p className="text-gray-700 italic mb-4 line-clamp-4">
                  “{item.feedback}”
                </p>
                <div>
                  <h4 className="text-green-800 font-semibold text-lg">{item.name}</h4>
                  <p className="text-sm text-gray-600">{item.location}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
