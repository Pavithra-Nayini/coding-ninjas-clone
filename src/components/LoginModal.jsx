import React from "react";
import { X, ArrowRight } from "lucide-react";
import GoogleIcon from "./GoogleIcon";

const LoginModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex justify-center items-center z-50 transition-opacity duration-300 ease-in-out">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-sm p-8 m-4 transform transition-all duration-300 ease-in-out scale-95 opacity-0 animate-fade-in-scale">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold text-gray-800">
            <span className="text-orange-500">Coding</span>Ninjas
          </h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800 flex items-center"
          >
            <span className="mr-2 text-sm">Close</span>
            <X className="w-5 h-5 inline-block" />
          </button>
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mb-6">Login with</h2>

        <div className="space-y-4">
          <button className="w-full flex items-center justify-center py-3 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
            <GoogleIcon />
            Google
          </button>
        </div>

        <div className="my-6 flex items-center">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="flex-shrink mx-4 text-sm text-gray-500">OR</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        <form>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Enter email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
              placeholder="Enter email here"
            />
          </div>
          <button
            type="submit"
            className="w-full mt-6 bg-gray-200 text-gray-500 font-semibold py-3 px-4 rounded-md flex items-center justify-center hover:bg-gray-300 transition-colors"
          >
            Continue <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </form>
      </div>
      <style>
        {`
                    @keyframes fadeInScale {
                        from { opacity: 0; transform: scale(0.95); }
                        to { opacity: 1; transform: scale(1); }
                    }
                    .animate-fade-in-scale {
                        animation: fadeInScale 0.3s forwards;
                    }
                `}
      </style>
    </div>
  );
};

export default LoginModal;
