import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Loader from "../components/Loader";
import { Player } from "@lottiefiles/react-lottie-player";
import animationData from '../components/animation/search.json';
import video from "../components/animation/bacckgroundForm.mp4";

const ScanProduct = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [formData, setFormData] = useState({
    productName: "",
    companyName: "",
    image: null,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.image || !formData.productName || !formData.companyName) {
      alert("All fields are required!");
      return;
    }

    const data = new FormData();
    data.append("image", formData.image);
    data.append("productName", formData.productName);
    data.append("companyName", formData.companyName);

  
    try {
      setLoading(true);
      setError(null);
      const res = await axios.post("http://localhost:3000/api/ocr/analyze", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(res.data)

      localStorage.setItem("ocrResult", JSON.stringify(res.data));
      setLoading(false);
      navigate("/results");
    } catch (error) {
      console.error("Error uploading:", error);
    }
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (

        <div className="relative w-full h-screen overflow-hidden ">
          {/* Background Video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 blur-sm brightness-75 w-full h-full object-cover z-0"
          >
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          
          <div className="bg-gradient-to-b from-white via-green-50 to-white min-h-screen flex items-center justify-center px-4 pt-5">
            <div className="max-w-xl w-full bg-white p-8 rounded-2xl shadow-xl backdrop-blur-sm bg-opacity-0">
              <div className="text-center mb-6">
                <Player
                  autoplay
                  loop
                  src={animationData}
                  className="w-36 h-36 mx-auto mb-2"
                />
                <h1 className="text-3xl font-bold text-white drop-shadow-md ">Welcome to LabelWise</h1>
                <p className="text-gray-100">Scan. Understand. Eat Smart.</p>
              </div>

              {/* <h2 className="text-2xl font-semibold text-center mb-4">Scan Your Product</h2> */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-gray-950 mb-1">Product Name</label>
                  <input
                    type="text"
                    placeholder="e.g. Noodles"
                    value={formData.productName}
                    onChange={(e) => setFormData({ ...formData, productName: e.target.value })}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-950 mb-1">Company Name</label>
                  <input
                    type="text"
                    placeholder="e.g. Maggi"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-950 mb-1">Upload Image</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setFormData({ ...formData, image: e.target.files[0] })}
                    className="block w-full text-sm text-gray-700
                     file:mr-4 file:py-2 file:px-4
                     file:rounded-lg file:border-0
                     file:text-sm file:font-semibold
                     file:bg-green-50 file:text-green-700
                     hover:file:bg-green-100"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg transition duration-300"
                >
                  {loading ? "Loading..." : "Scan Product"}
                </button>
              </form>
            </div>
          </div>

        </div>

      )}
    </>
  );
}

export default ScanProduct;
