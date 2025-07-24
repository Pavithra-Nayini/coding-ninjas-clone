import React from "react";
import {
  CheckCircle,
  XCircle,
  Clock,
  GraduationCap,
  Building,
} from "lucide-react";
import { comparisonData } from "../data/appData";

const WhyUsSection = () => {
  const Check = () => <CheckCircle className="w-5 h-5 text-green-400" />;
  const Cross = () => <XCircle className="w-5 h-5 text-red-400" />;

  return (
    <section className="bg-[#17212C] text-white py-16 md:py-24 relative overflow-hidden">
      <div
        className="absolute inset-0 bg-no-repeat"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232d3748' fill-opacity='0.2'%3E%3Cpath d='M0 0h80v2H0zM0 80h80v-2H0zM0 0v80h2V0zM80 0v80h-2V0z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundPosition: "center center",
        }}
      ></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h2
            className="text-6xl md:text-8xl font-black uppercase"
            style={{
              WebkitTextStroke: "1px rgba(255,255,255,0.5)",
              color: "transparent",
            }}
          >
            Why Us
          </h2>
        </div>

        <div className="max-w-md mx-auto mt-8 space-y-4">
          <button className="w-full flex items-center bg-gray-700/50 backdrop-blur-sm p-4 rounded-lg border border-gray-600 hover:bg-gray-600/60 transition-colors">
            <Clock className="w-6 h-6 text-green-400 mr-4" />
            <span>Fastest 1:1 doubt support</span>
          </button>
          <button className="w-full flex items-center bg-gray-700/50 backdrop-blur-sm p-4 rounded-lg border border-gray-600 hover:bg-gray-600/60 transition-colors">
            <GraduationCap className="w-6 h-6 text-purple-400 mr-4" />
            <span>Stanford/IIT/MAANG faculty</span>
          </button>
          <button className="w-full flex items-center bg-gray-700/50 backdrop-blur-sm p-4 rounded-lg border border-gray-600 hover:bg-gray-600/60 transition-colors">
            <Building className="w-6 h-6 text-orange-400 mr-4" />
            <span>Placement assistance</span>
          </button>
        </div>

        <div className="text-center mt-16 md:mt-24">
          <a href="#" className="text-blue-400 hover:underline">
            The Coding Ninjas advantage
          </a>
        </div>

        <div className="max-w-4xl mx-auto mt-8 bg-gray-800/60 backdrop-blur-sm rounded-xl border border-gray-700 p-6 md:p-8">
          <div className="grid grid-cols-4 gap-4 text-center font-semibold text-gray-400 mb-4">
            <div className="text-left"></div>
            <div>
              <img
                src="https://files.codingninjas.com/cn-logo-dark-27902.svg"
                alt="Coding Ninjas"
                className="h-6 mx-auto"
              />
            </div>
            <div>Free resources</div>
            <div>Other courses</div>
          </div>

          {comparisonData.map((item) => (
            <div
              key={item.feature}
              className="grid grid-cols-4 gap-4 items-center py-3 border-b border-gray-700 last:border-b-0"
            >
              <div className="text-left text-sm font-medium text-gray-200">
                {item.feature}
              </div>
              <div className="flex justify-center">
                {item.cn ? <Check /> : <Cross />}
              </div>
              <div className="flex justify-center">
                {item.free ? <Check /> : <Cross />}
              </div>
              <div className="flex justify-center">
                {item.others ? <Check /> : <Cross />}
              </div>
            </div>
          ))}

          <div className="grid grid-cols-4 gap-4 items-center pt-6 mt-4">
            <div className="text-left font-bold text-lg">
              <img
                src="https://files.codingninjas.in/cn-logo-dark-27902.svg"
                alt="Coding Ninjas"
                className="h-6"
              />
            </div>
            <div className="col-span-3">
              <div className="relative h-2 bg-gray-700 rounded-full">
                <div className="absolute top-0 left-0 h-2 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-full w-full"></div>
              </div>
              <p className="text-xs text-yellow-400 mt-2 text-right">
                Your dream role, faster and with confidence! ✨
              </p>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-4 items-center pt-4 mt-2">
            <div className="text-left font-bold text-lg text-gray-400">
              Others
            </div>
            <div className="col-span-3">
              <div className="relative h-2 bg-gray-700 rounded-full">
                <div className="absolute top-0 left-0 h-2 bg-gray-600 rounded-full w-1/2"></div>
              </div>
              <p className="text-xs text-gray-500 mt-2 text-right">
                Average role, under-confident
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="bg-orange-500 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-orange-600 transition-transform hover:scale-105">
            Explore offerings 🚀
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
