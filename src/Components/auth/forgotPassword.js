import React, { useState } from "react";
import login from "../../static/Forgot password.png";
import { FiMail, FiCheckCircle } from "react-icons/fi";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);

  // Email Validation
  const validateEmail = (e) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const value = e.target.value;
    setEmail(value);
    setIsEmailValid(emailRegex.test(value));
  };

  
  
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Left Section */}
      <div className="w-1/2 flex items-center -mt-40 justify-center">
        <div className="w-[70%]">
          {/* Header */}
          <div className="flex justify-between mb-6">
            <a href="/Signin" className="text-xl text-gray-600 hover:text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="cursor-pointer"
              >
                <path d="M19 12H5"></path>
                <path d="M12 5l-7 7 7 7"></path>
              </svg>
            </a>
            
          </div>

          <h1 className="text-5xl font-bold mb-3 mt-20 text-black">
            Forgot your password ?
          </h1>
          <p className="text-gray-500 mb-5">
            Enter your email and we will help you with find your password.
          </p>

          {/* Form */}
          <form className="space-y-8 pt-4">
            {/* Email Input */}
            <div className="relative group">
              <FiMail className="absolute left-2 top-3 text-gray-500 group-focus-within:text-[#4addbf]" />
              <input
                type="email"
                value={email}
                onChange={validateEmail}
                placeholder="Email"
                className="w-10/12 bg-gray-100 focus:ring-0 border-r-transparent border-l-transparent border-t-transparent border-b-2 border-gray-600 pl-8 py-2 focus:outline-0 focus:border-b-[#4addbf] hover:border-b-[#4addbf] focus:border-t-transparent hover:border-t-transparent focus:border-l-transparent hover:border-l-transparent  focus:border-r-transparent hover:border-r-transparent transition-colors duration-300"
              />
              {isEmailValid && (
                <FiCheckCircle className="absolute right-24 top-3 text-[#4addbf]" />
              )}
            </div>

            {/* Submit Button */}
            <div className="space-y-3">
  {/* Submit Button */}
  <div className="flex items-center space-x-2 pt-4">
    <button
      type="submit"
      className="w-56 bg-black text-white text-start py-2 rounded-lg hover:bg-gray-800 transition-colors duration-300 flex items-center justify-between px-4"
    >
        <span>Send Email</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-5 h-5"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L20.25 12 13.5 19.5M3.75 12h16.5" />
      </svg>
    </button>
    
  </div>

  {/* Forgot Password */}
  <p className="text-lg text-gray-600 text-start pt-4 ">
    <a href="/Signin" className="hover:text-[#4addbf] hover:underline text-black">
      return to sign in
    </a>
  </p>
</div>

          </form>
        </div>
      </div>

        {/* Right Section */}
        <div className="relative w-1/2 h-screen overflow-hidden bg-[#f5f5f5]">
        {/* First Shape */}
        <svg
          className="absolute top-[-10%] left-[-20%] w-[150%] h-[60%] opacity-80"
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,370.6c-0.5,35,29.5,68,60,82.8c40.8,19.7,82.2,6.8,99.3,1.4c76-23.8,83.3-81.4,130.3-79.9c43.9,1.4,53.2,52.1,102.2,52.5
            c38.6,0.3,67.2-30.9,79.9-44.6c44.4-48.3,49.5-116.9,33.1-165.5c-6-17.7-11.5-34.1-27.4-45.3c-30.9-22-62.5,2.7-96.2-16.2
            c-27.9-15.7-17.7-39-44.8-68c-44.9-47.9-125.5-40.2-155.5-37.3C145.6,53.7,101.3,58,66.5,92c-43.9,42.9-46.3,107.1-46.8,120.2
            c-1.7,45.2,14.1,62.2,1.4,103.6C12.1,345.6,0.3,348.8,0,370.6z"
            fill="#4addbf"
          />
        </svg>

        {/* Second Shape */}
        <svg
          className="absolute bottom-[-10%] right-[-20%] w-[150%] h-[60%] opacity-60"
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
          style={{ transform: "scaleX(-1)" }}
        >
          <path
            d="M0,370.6c-0.5,35,29.5,68,60,82.8c40.8,19.7,82.2,6.8,99.3,1.4c76-23.8,83.3-81.4,130.3-79.9c43.9,1.4,53.2,52.1,102.2,52.5
            c38.6,0.3,67.2-30.9,79.9-44.6c44.4-48.3,49.5-116.9,33.1-165.5c-6-17.7-11.5-34.1-27.4-45.3c-30.9-22-62.5,2.7-96.2-16.2
            c-27.9-15.7-17.7-39-44.8-68c-44.9-47.9-125.5-40.2-155.5-37.3C145.6,53.7,101.3,58,66.5,92c-43.9,42.9-46.3,107.1-46.8,120.2
            c-1.7,45.2,14.1,62.2,1.4,103.6C12.1,345.6,0.3,348.8,0,370.6z"
            fill="#4addbf"
          />
        </svg>

        {/* Placeholder for Custom Image */}
        <div className="absolute  flex items-center justify-center ">
          <img
            src={login} // Replace this with your image URL
            alt="Background for Sign In"
            className="w-full h-full object-cover"
          />
          
        </div>
      </div>
    </div>
  );
};
export default ForgetPassword; 