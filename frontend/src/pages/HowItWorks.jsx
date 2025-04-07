// src/components/HowItWorks.jsx

import React from "react";
import {
  FaUpload,
  FaSearch,
  FaLightbulb,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';

const steps = [
  {
    icon: <FaUpload size={40} className="text-green-600" />,
    title: "Upload Image",
    description: "Snap or upload a product label for instant analysis.",
  },
  {
    icon: <FaSearch size={40} className="text-green-600" />,
    title: "OCR & AI Analysis",
    description: "We extract text and analyze ingredients using AI.",
  },
  {
    icon: <FaLightbulb size={40} className="text-green-600" />,
    title: "Get Insights",
    description: "Receive warnings, health scores, and key nutritional info.",
  },
  {
    icon: <FaCheckCircle size={40} className="text-green-600" />,
    title: "Make Smart Choices",
    description: "Choose safer, healthier food products for your lifestyle.",
  },
];

const HowItWorks = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-white py-16 px-6 sm:px-10 lg:px-20 mt-40">
      <h2 className="text-4xl font-bold text-center mb-24 text-green-700 " data-aos="fade-up">
        How It Works
      </h2>

      <div className="flex flex-col md:flex-row items-center justify-center gap-10">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <div
              className="flex flex-col items-center p-6 bg-gray-100 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 w-64"
              data-aos="zoom-in"
              data-aos-delay={index * 200}
            >
              {step.icon}
              <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-800">
                {step.title}
              </h3>
              <p className="text-sm text-gray-600 text-center">
                {step.description}
              </p>
            </div>

            {index !== steps.length - 1 && (
              <div className="hidden md:block text-green-600" data-aos="fade-right" data-aos-delay={index * 200 + 100}>
                <FaArrowRight size={30} />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
