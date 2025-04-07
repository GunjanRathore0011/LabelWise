import React, { useEffect } from "react";
import image from "../../src/images/img.png";
import { BiBarcodeReader } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";
import { GiChemicalDrop } from "react-icons/gi";
import { MdHealthAndSafety } from "react-icons/md";
import Testimonials from "./Testimonials";
import { useNavigate } from "react-router-dom";
import HowItWorks from "./HowItWorks";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleUploadClick = () => {
    navigate("/scan-product");
  };

  return (
    <div>
      <div className="relative w-full">
        <div className="relative w-full h-screen">
          <img
            src={image}
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black bg-opacity-50"></div>

          <div
            className="absolute inset-0 flex flex-col items-center justify-center text-white"
            data-aos="fade-up"
          >
            <h1 className="text-7xl font-bold mb-8">Scan, Identify & Choose Wisely!</h1>
            <p className="text-xl mb-8 font-bold">
              Upload a product image and get nutritional insights instantly
            </p>
            <button
              onClick={handleUploadClick}
              className="bg-green-600 hover:bg-green-700 font-bold text-white px-7 py-3 rounded-lg shadow-md"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              Upload Image
            </button>
          </div>
        </div>

        <div
          className="absolute  inset-x-0 mx-auto translate-y-1/2 flex flex-wrap justify-around p-10 bg-green-600 text-white font-semibold max-w-6xl rounded-lg shadow-lg"
          data-aos="fade-up"
        >
          <div className="flex justify-center items-center space-x-5">
            <BiBarcodeReader size={40} />
            <div>
              <h1>10,000+</h1>
              <p>Labels Scanned</p>
            </div>
          </div>
          <div className="flex justify-center items-center space-x-5">
            <FaUsers size={40} />
            <div>
              <h1>5,000+</h1>
              <p>Users Benefiting</p>
            </div>
          </div>
          <div className="flex justify-center items-center space-x-5">
            <GiChemicalDrop size={40} />
            <div>
              <h1>1,000+</h1>
              <p>Ingredients Analyzed</p>
            </div>
          </div>
          <div className="flex justify-center items-center space-x-5">
            <MdHealthAndSafety size={40} />
            <div>
              <h1>500+</h1>
              <p>Healthy Recommendations</p>
            </div>
          </div>
        </div>
      </div>

      <HowItWorks />
      <Testimonials />
    </div>
  );
};

export default Home;
