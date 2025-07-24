import React from "react";
import { offerings } from "../data/appData";
import CourseCard from "../components/CourseCard";

const OfferingsSection = ({ sectionRefs }) => {
  return (
    <section className="bg-[#17212C] text-white py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-wide">
            OUR OFFERINGS
          </h2>
        </div>

        <div className="relative pl-8">
          {/* Vertical line */}
          <div className="absolute left-8 top-2 bottom-0 w-0.5 bg-gray-700"></div>

          {offerings.map((offering) => (
            <div
              key={offering.category}
              ref={sectionRefs[offering.category]}
              className="relative mb-16 scroll-mt-20"
            >
              <div className="absolute -left-11 top-2.5 z-10 w-6 h-6 bg-gray-800 border-2 border-gray-600 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
              </div>
              <div className="mb-8">
                <h3 className="text-2xl font-bold inline-block mr-4">
                  {offering.category}
                </h3>
                <span className="bg-orange-500/20 text-orange-300 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                  {offering.tag || offering.sections?.[0].tag}
                </span>
              </div>

              {offering.courses && (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {offering.courses.map((course, i) => (
                    <CourseCard key={i} course={course} />
                  ))}
                </div>
              )}

              {offering.sections &&
                offering.sections.map((section) => (
                  <div key={section.tag} className="mt-8">
                    <span className="bg-gray-700 text-gray-300 text-xs font-semibold px-2.5 py-0.5 rounded-full mb-6 inline-block">
                      {section.tag}
                    </span>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                      {section.courses.map((course, i) => (
                        <CourseCard key={i} course={course} />
                      ))}
                    </div>
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfferingsSection;
