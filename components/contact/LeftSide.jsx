"use client";
import { useContext } from "react";
import themeContext from "../../app/context/themeContext";
import { Mail, Phone, MapPin } from "lucide-react";

const LeftSide = () => {
  const { currentTheme } = useContext(themeContext);

  return (
    <div
      className={`${currentTheme.background} ${currentTheme.text} py-12 px-4 sm:px-6 lg:px-8`}
    >
      <div className="max-w-lg mx-auto">
        <h2
          className={`text-3xl font-bold text-center mb-8 ${currentTheme.headings}`}
        >
          Contact Information
        </h2>
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <Mail className="w-6 h-6 text-orange-500" />
            <a
              href="mailto:info@fabuilders.com"
              className="hover:text-orange-500"
            >
              info@fabuilders.co.uk
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <Phone className="w-6 h-6 text-orange-500" />
            <a href="tel:+442071234567" className="hover:text-orange-500">
              07476555002
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <MapPin className="w-6 h-6 text-orange-500" />
            <p>23 flat 2 headcorn road Thornton heath London</p>
          </div>
        </div>
        <div className="mt-8">
          <div
            className={`w-full h-64 rounded-lg ${currentTheme.card} overflow-hidden`}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2487.6635293291583!2d-0.0874558!3d51.4659985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487603c467a3b499%3A0xc34b72e5a7b8e5d!2s23%20Headcorn%20Rd%2C%20London%20SE15%203ND%2C%20UK!5e0!3m2!1sen!2sus!4v1703692800000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
