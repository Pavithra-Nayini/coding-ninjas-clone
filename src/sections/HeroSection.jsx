import React, { useState } from "react";
import { CheckCircle } from "lucide-react";
import { heroStats, experienceOptions } from "../data/appData";

const HeroSection = () => {
  const [formData, setFormData] = useState({
    experience: "Working Professional - Technical Roles",
    interest: "",
    name: "",
    phone: "",
    email: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Thank you for your interest! We will contact you shortly.");
  };

  return (
    <section className="bg-[#17212C] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <div className="text-center md:text-left">
            <p className="text-green-400 font-semibold">
              Restricted by opportunities?
            </p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mt-2">
              Get the tech career you deserve. Faster.
            </h1>
            <ul className="mt-8 space-y-4">
              {heroStats.map((stat) => (
                <li key={stat.text} className="flex items-center">
                  <div className="bg-green-400/20 p-1 rounded-full mr-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  </div>
                  <span className="text-gray-300">{stat.text}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* Right Side - Form */}
          <div>
            <div className="bg-white text-gray-800 rounded-lg shadow-2xl p-8 max-w-md mx-auto">
              <h2 className="text-xl font-bold mb-4">
                Let's find the right course for you
              </h2>
              <form onSubmit={handleFormSubmit}>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-semibold text-gray-600">
                      Experience
                    </label>
                    <div className="mt-2 space-y-2">
                      {experienceOptions.map((option) => (
                        <label key={option} className="flex items-center">
                          <input
                            type="radio"
                            name="experience"
                            value={option}
                            checked={formData.experience === option}
                            onChange={handleInputChange}
                            className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300"
                          />
                          <span className="ml-3 text-sm">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="interest"
                      className="block text-sm font-semibold text-gray-600"
                    >
                      Select topic of interest
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      value={formData.interest}
                      onChange={handleInputChange}
                      className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm rounded-md"
                    >
                      <option value="">Select your option</option>
                      <option>Data Structures & Algorithms</option>
                      <option>Full Stack Development</option>
                      <option>Data Science</option>
                      <option>Machine Learning</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-gray-600"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Enter name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-semibold text-gray-600"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      placeholder="Enter phone number"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-gray-600"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Enter email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full bg-orange-500 text-white py-3 px-4 mt-6 border border-transparent rounded-md shadow-sm text-base font-medium hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                >
                  Find your course
                </button>
                <p className="text-xs text-gray-500 mt-3 text-center">
                  I authorize Coding Ninjas to contact me with course updates &
                  offers via Email/SMS/WhatsApp/Call. I have read and agree to
                  the{" "}
                  <a href="#" className="underline">
                    Privacy
                  </a>{" "}
                  &{" "}
                  <a href="#" className="underline">
                    Terms of use
                  </a>
                  .
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
