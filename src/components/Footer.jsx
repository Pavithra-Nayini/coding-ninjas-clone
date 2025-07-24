import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    "CODING NINJAS": [
      "About Us",
      "Careers",
      "Privacy Policy",
      "Terms & Conditions",
    ],
    PRODUCTS: ["Courses", "Try for free", "Pathways", "Scholarship Test"],
    COMMUNITY: ["Events", "Blogs", "Affiliate Program", "Become a Mentor"],
    "FOLLOW US": ["Facebook", "Instagram", "YouTube", "Twitter"],
  };

  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-xl font-bold">
              <span className="text-orange-500">Coding</span>Ninjas
            </h3>
            <p className="mt-4 text-gray-400 text-sm">
              Empowering the world to code.
            </p>
          </div>
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold tracking-wider uppercase text-gray-400">
                {title}
              </h4>
              <ul className="mt-4 space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-orange-500 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Coding Ninjas. All Rights
            Reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-orange-500">
              <Phone className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-orange-500">
              <Mail className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-orange-500">
              <MapPin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
