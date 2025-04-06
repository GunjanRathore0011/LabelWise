import React from "react";
import image from "../../src/images/img.png";
import { BiBarcodeReader } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";
import { GiChemicalDrop } from "react-icons/gi";
import { MdHealthAndSafety } from "react-icons/md";
import Testimonials from "./Testimonials";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleUploadClick = () => {
    navigate("/scan-product"); 
  };
  return (
    <div>
      <div className="relative w-full ">
      <div className="relative w-full h-screen">

        <img
          src={image}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-7xl font-bold mb-8">Scan, Identify & Choose Wisely!</h1>
          <p className="text-xl mb-8 font-bold">Upload a product image and get nutritional insights instantly</p>
          <button onClick={handleUploadClick} className="bg-green-600 hover:bg-green-700  font-bold text-white  px-7 py-3 rounded-lg shadow-md">
            Upload Image
          </button>
        </div>

      </div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 flex flex-wrap justify-around p-10 bg-green-600 text-white font-semibold w-[90%] mx-auto rounded-lg shadow-lg"> 
        <div className="flex justify-center items-center space-x-5">
          <BiBarcodeReader  size={40} />
          <div className="">
            <h1>10,000+</h1>
            <p>Labels Scanned</p>
          </div>
        </div>
        <div className="flex justify-center items-center space-x-5">
          <FaUsers  size={40}/>
          <div>
            <h1>5,000+</h1>
            <p>Users Benefiting</p>
          </div>
        </div>
        <div className="flex justify-center items-center space-x-5">
          <GiChemicalDrop   size={40}/>
          <div>
            <h1>1,000+</h1>
            <p>Ingredients Analyzed</p>
          </div>
        </div>
        <div className="flex justify-center items-center space-x-5">
          <MdHealthAndSafety  size={40} />
          <div>
            <h1>500+</h1>
            <p>Healthy Recommendations</p>
          </div>
        </div>
      </div>
    </div>

    <Testimonials></Testimonials>

    </div>
  );
};

export default Home;
