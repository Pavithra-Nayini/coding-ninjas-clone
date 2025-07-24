import React from "react";
import { hiringData } from "../data/appData";

const HiringPartnersSection = () => {
  return (
    <section className="py-16 md:py-24 bg-[#17212C] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Our Students Work At
          </h2>
          <p className="mt-3 text-lg text-gray-300">
            We have a strong network of 400+ hiring partners.
          </p>
        </div>
        <div className="relative overflow-hidden group">
          <div className="flex animate-marquee group-hover:[animation-play-state:paused]">
            {hiringData.concat(hiringData).map((item, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-4 flex flex-col items-center justify-center h-28 w-48 bg-gray-800 rounded-lg p-4 border border-gray-700 shadow-lg"
              >
                <p className="text-lg font-bold text-white">{item.company}</p>
                <p className="text-xs text-gray-400 mt-2">Placed:</p>
                <p className="text-sm font-semibold text-orange-400">
                  {item.student}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HiringPartnersSection;
