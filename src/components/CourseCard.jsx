import React from "react";

const CourseCard = ({ course }) => (
  <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 w-full max-w-sm text-gray-800 flex flex-col">
    {course.image && (
      <img
        src={course.image}
        alt={course.title}
        className="rounded-t-lg w-full h-40 object-cover"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = `https://placehold.co/600x300/CCCCCC/FFFFFF?text=Error`;
        }}
      />
    )}
    <div className="p-4 flex flex-col flex-grow">
      {course.icon && (
        <img src={course.icon} alt="" className="h-8 mb-3 self-start" />
      )}
      <h3 className="font-semibold flex-grow">{course.title}</h3>
      {course.institution && (
        <p className="text-xs text-gray-500 mt-1">{course.institution}</p>
      )}

      <div className="mt-auto pt-4 border-t border-gray-100">
        {course.stats && (
          <div className="flex justify-between text-xs text-gray-600">
            {course.stats.map((stat) => (
              <span key={stat}>{stat}</span>
            ))}
          </div>
        )}

        {(course.partners || course.duration) && (
          <div className="flex justify-between items-center text-xs text-gray-600">
            {course.partners && (
              <div className="flex items-center gap-2">
                {course.partners.map((p) => (
                  <img
                    key={p}
                    src={`https://files.codingninjas.in/company-logo-${p}-27931.png`}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = `https://placehold.co/50x20/CCCCCC/FFFFFF?text=${p}`;
                    }}
                    alt={p}
                    className="h-4"
                  />
                ))}
              </div>
            )}
            {course.duration && (
              <span className="font-semibold">{course.duration}</span>
            )}
          </div>
        )}
      </div>
    </div>
  </div>
);

export default CourseCard;
